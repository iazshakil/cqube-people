import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch company settings
export async function GET() {
  try {
    let settings = await db.companySettings.findFirst();

    if (!settings) {
      // Create default settings if none exist
      settings = await db.companySettings.create({
        data: {
          companyName: "CQube Technologies",
          email: "info@cqube.com",
          phone: "+1 (555) 123-4567",
          website: "https://cqube.com",
          address: "123 Business Park, Suite 456, New York, NY 10001",
          currency: "USD",
          timezone: "America/New_York",
        },
      });
    }

    // Get holidays
    const holidays = await db.holiday.findMany({
      orderBy: { date: "asc" },
    });

    return NextResponse.json({
      success: true,
      data: {
        settings,
        holidays,
      },
    });
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

// PUT - Update company settings
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyName,
      logo,
      address,
      phone,
      email,
      website,
      workingDays,
      workingHours,
      fiscalYear,
      currency,
      timezone,
    } = body;

    let settings = await db.companySettings.findFirst();

    if (settings) {
      settings = await db.companySettings.update({
        where: { id: settings.id },
        data: {
          companyName,
          logo,
          address,
          phone,
          email,
          website,
          workingDays,
          workingHours,
          fiscalYear,
          currency,
          timezone,
        },
      });
    } else {
      settings = await db.companySettings.create({
        data: {
          companyName,
          logo,
          address,
          phone,
          email,
          website,
          workingDays,
          workingHours,
          fiscalYear,
          currency,
          timezone,
        },
      });
    }

    return NextResponse.json({
      success: true,
      data: settings,
      message: "Settings updated successfully",
    });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
