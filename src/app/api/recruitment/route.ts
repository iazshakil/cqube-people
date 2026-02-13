import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch job postings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const department = searchParams.get("department");

    const whereClause: Record<string, unknown> = {};

    if (status) {
      whereClause.status = status;
    }

    if (department) {
      whereClause.department = department;
    }

    const jobPostings = await db.jobPosting.findMany({
      where: whereClause,
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get application stats
    const totalApplications = await db.application.count();
    const pendingApplications = await db.application.count({
      where: { status: "applied" },
    });
    const interviewApplications = await db.application.count({
      where: { status: "interview" },
    });
    const hiredThisMonth = await db.application.count({
      where: {
        status: "hired",
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: jobPostings,
      stats: {
        totalApplications,
        pendingApplications,
        interviewApplications,
        hiredThisMonth,
      },
    });
  } catch (error) {
    console.error("Error fetching job postings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch job postings" },
      { status: 500 }
    );
  }
}

// POST - Create job posting
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      code,
      department,
      location,
      type,
      experience,
      salary,
      description,
      requirements,
      benefits,
      closingDate,
    } = body;

    const jobPosting = await db.jobPosting.create({
      data: {
        title,
        code,
        department,
        location,
        type,
        experience,
        salary,
        description,
        requirements,
        benefits,
        status: "draft",
        closingDate: closingDate ? new Date(closingDate) : null,
      },
    });

    return NextResponse.json({
      success: true,
      data: jobPosting,
      message: "Job posting created successfully",
    });
  } catch (error) {
    console.error("Error creating job posting:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create job posting" },
      { status: 500 }
    );
  }
}
