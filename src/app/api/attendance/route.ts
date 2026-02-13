import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch attendance records
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const employeeId = searchParams.get("employeeId");
    const month = searchParams.get("month");
    const year = searchParams.get("year");

    const whereClause: Record<string, unknown> = {};

    if (date) {
      const targetDate = new Date(date);
      whereClause.date = targetDate;
    }

    if (employeeId) {
      whereClause.employeeId = employeeId;
    }

    if (month && year) {
      const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const endDate = new Date(parseInt(year), parseInt(month), 0);
      whereClause.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    const attendance = await db.attendance.findMany({
      where: whereClause,
      include: {
        employee: {
          select: {
            id: true,
            employeeId: true,
            firstName: true,
            lastName: true,
            department: true,
          },
        },
      },
      orderBy: {
        date: "desc",
      },
    });

    // Calculate stats
    const stats = {
      present: attendance.filter((a) => a.status === "present").length,
      absent: attendance.filter((a) => a.status === "absent").length,
      late: attendance.filter((a) => a.status === "late").length,
      halfDay: attendance.filter((a) => a.status === "half_day").length,
    };

    return NextResponse.json({
      success: true,
      data: attendance,
      stats,
    });
  } catch (error) {
    console.error("Error fetching attendance:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch attendance" },
      { status: 500 }
    );
  }
}

// POST - Mark attendance
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, date, checkIn, checkOut, status, notes, location } = body;

    // Calculate work hours if both check-in and check-out are provided
    let workHours = null;
    if (checkIn && checkOut) {
      const checkInTime = new Date(`2000-01-01T${checkIn}`);
      const checkOutTime = new Date(`2000-01-01T${checkOut}`);
      workHours = (checkOutTime.getTime() - checkInTime.getTime()) / (1000 * 60 * 60);
    }

    const attendance = await db.attendance.upsert({
      where: {
        employeeId_date: {
          employeeId,
          date: new Date(date),
        },
      },
      update: {
        checkIn: checkIn ? new Date(`${date}T${checkIn}`) : null,
        checkOut: checkOut ? new Date(`${date}T${checkOut}`) : null,
        workHours,
        status: status || "present",
        notes,
        location,
      },
      create: {
        employeeId,
        date: new Date(date),
        checkIn: checkIn ? new Date(`${date}T${checkIn}`) : null,
        checkOut: checkOut ? new Date(`${date}T${checkOut}`) : null,
        workHours,
        status: status || "present",
        notes,
        location,
      },
    });

    return NextResponse.json({
      success: true,
      data: attendance,
      message: "Attendance marked successfully",
    });
  } catch (error) {
    console.error("Error marking attendance:", error);
    return NextResponse.json(
      { success: false, error: "Failed to mark attendance" },
      { status: 500 }
    );
  }
}
