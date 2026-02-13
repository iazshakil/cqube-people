import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch leave requests
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const employeeId = searchParams.get("employeeId");

    const whereClause: Record<string, unknown> = {};

    if (status) {
      whereClause.status = status;
    }

    if (employeeId) {
      whereClause.employeeId = employeeId;
    }

    const leaveRequests = await db.leaveRequest.findMany({
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
        leaveType: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: leaveRequests,
    });
  } catch (error) {
    console.error("Error fetching leave requests:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leave requests" },
      { status: 500 }
    );
  }
}

// POST - Create leave request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, leaveTypeId, startDate, endDate, days, reason, attachments } = body;

    const leaveRequest = await db.leaveRequest.create({
      data: {
        employeeId,
        leaveTypeId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        days: parseFloat(days),
        reason,
        attachments,
        status: "pending",
      },
      include: {
        employee: true,
        leaveType: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: leaveRequest,
      message: "Leave request submitted successfully",
    });
  } catch (error) {
    console.error("Error creating leave request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create leave request" },
      { status: 500 }
    );
  }
}

// PATCH - Update leave request status
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, approvedBy, rejectionReason } = body;

    const leaveRequest = await db.leaveRequest.update({
      where: { id },
      data: {
        status,
        approvedBy,
        approvedAt: status === "approved" ? new Date() : null,
        rejectionReason,
      },
    });

    return NextResponse.json({
      success: true,
      data: leaveRequest,
      message: `Leave request ${status}`,
    });
  } catch (error) {
    console.error("Error updating leave request:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update leave request" },
      { status: 500 }
    );
  }
}
