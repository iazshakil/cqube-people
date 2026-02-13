import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch dashboard stats
export async function GET() {
  try {
    // Get total employees
    const totalEmployees = await db.employee.count({
      where: { status: "active" },
    });

    // Get today's attendance
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayAttendance = await db.attendance.count({
      where: {
        date: today,
        status: "present",
      },
    });

    // Get employees on leave
    const onLeave = await db.employee.count({
      where: { status: "on_leave" },
    });

    // Get open positions
    const openPositions = await db.jobPosting.count({
      where: { status: "published" },
    });

    // Get department distribution
    const departments = await db.department.findMany({
      include: {
        _count: {
          select: { employees: true },
        },
      },
    });

    const departmentData = departments.map((dept) => ({
      name: dept.name,
      count: dept._count.employees,
    }));

    // Get recent activities (simulated for now)
    const recentActivities = [
      { type: "hire", message: "Sarah Johnson joined as Marketing Manager", time: "2 hours ago" },
      { type: "leave", message: "Emily Davis requested 5 days leave", time: "4 hours ago" },
      { type: "payroll", message: "January payroll processed successfully", time: "1 day ago" },
      { type: "training", message: "Leadership workshop completed by 15 employees", time: "2 days ago" },
    ];

    // Get upcoming events (simulated for now)
    const upcomingEvents = [
      { title: "Team Building Event", date: "Jan 25, 2024", type: "event" },
      { title: "Q1 Performance Review", date: "Jan 30, 2024", type: "review" },
      { title: "New Hire Orientation", date: "Feb 1, 2024", type: "orientation" },
      { title: "Training Session: Leadership", date: "Feb 5, 2024", type: "training" },
    ];

    return NextResponse.json({
      success: true,
      data: {
        stats: {
          totalEmployees,
          presentToday: todayAttendance,
          onLeave,
          openPositions,
        },
        departmentData,
        recentActivities,
        upcomingEvents,
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}
