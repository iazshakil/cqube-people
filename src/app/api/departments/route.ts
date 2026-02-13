import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all departments
export async function GET() {
  try {
    const departments = await db.department.findMany({
      include: {
        _count: {
          select: { employees: true },
        },
        manager: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      data: departments,
    });
  } catch (error) {
    console.error("Error fetching departments:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch departments" },
      { status: 500 }
    );
  }
}

// POST - Create new department
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, managerId } = body;

    const department = await db.department.create({
      data: {
        name,
        description,
        managerId,
      },
    });

    return NextResponse.json({
      success: true,
      data: department,
      message: "Department created successfully",
    });
  } catch (error) {
    console.error("Error creating department:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create department" },
      { status: 500 }
    );
  }
}
