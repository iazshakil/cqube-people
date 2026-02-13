import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch performance data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get("employeeId");
    const type = searchParams.get("type") || "goals";

    if (type === "goals") {
      const goals = await db.goal.findMany({
        where: employeeId ? { employeeId } : {},
        include: {
          employee: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              department: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      const stats = {
        total: goals.length,
        completed: goals.filter((g) => g.status === "completed").length,
        inProgress: goals.filter((g) => g.status === "in_progress").length,
        notStarted: goals.filter((g) => g.status === "not_started").length,
      };

      return NextResponse.json({
        success: true,
        data: goals,
        stats,
      });
    }

    if (type === "reviews") {
      const reviews = await db.performanceReview.findMany({
        where: employeeId ? { employeeId } : {},
        include: {
          employee: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              department: true,
            },
          },
        },
        orderBy: { reviewDate: "desc" },
      });

      return NextResponse.json({
        success: true,
        data: reviews,
      });
    }

    return NextResponse.json({
      success: false,
      error: "Invalid type parameter",
    });
  } catch (error) {
    console.error("Error fetching performance data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch performance data" },
      { status: 500 }
    );
  }
}

// POST - Create goal
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { employeeId, title, description, category, startDate, dueDate, priority } = body;

    const goal = await db.goal.create({
      data: {
        employeeId,
        title,
        description,
        category,
        startDate: new Date(startDate),
        dueDate: new Date(dueDate),
        priority: priority || "medium",
        status: "not_started",
        progress: 0,
      },
    });

    return NextResponse.json({
      success: true,
      data: goal,
      message: "Goal created successfully",
    });
  } catch (error) {
    console.error("Error creating goal:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create goal" },
      { status: 500 }
    );
  }
}

// PATCH - Update goal progress
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, progress, status } = body;

    const goal = await db.goal.update({
      where: { id },
      data: {
        progress,
        status: status || (progress === 100 ? "completed" : "in_progress"),
      },
    });

    return NextResponse.json({
      success: true,
      data: goal,
      message: "Goal updated successfully",
    });
  } catch (error) {
    console.error("Error updating goal:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update goal" },
      { status: 500 }
    );
  }
}
