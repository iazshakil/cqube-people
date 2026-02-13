import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all employees
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const department = searchParams.get("department");
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const whereClause: Record<string, unknown> = {};

    if (department && department !== "all") {
      whereClause.departmentId = department;
    }

    if (status && status !== "all") {
      whereClause.status = status;
    }

    if (search) {
      whereClause.OR = [
        { firstName: { contains: search } },
        { lastName: { contains: search } },
        { email: { contains: search } },
        { employeeId: { contains: search } },
      ];
    }

    const employees = await db.employee.findMany({
      where: whereClause,
      include: {
        department: true,
        manager: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: employees,
      total: employees.length,
    });
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}

// POST - Create new employee
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      departmentId,
      designation,
      employmentType,
      joinDate,
      salary,
      dateOfBirth,
      gender,
      address,
      city,
      country,
    } = body;

    // Generate employee ID
    const employeeCount = await db.employee.count();
    const employeeId = `EMP${String(employeeCount + 1).padStart(3, "0")}`;

    const employee = await db.employee.create({
      data: {
        employeeId,
        firstName,
        lastName,
        email,
        phone,
        departmentId,
        designation,
        employmentType: employmentType || "full-time",
        joinDate: new Date(joinDate),
        salary: parseFloat(salary),
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        gender,
        address,
        city,
        country,
        status: "active",
      },
      include: {
        department: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: employee,
      message: "Employee created successfully",
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create employee" },
      { status: 500 }
    );
  }
}
