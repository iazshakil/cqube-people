import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch payroll records
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get("month");
    const year = searchParams.get("year");
    const employeeId = searchParams.get("employeeId");
    const status = searchParams.get("status");

    const whereClause: Record<string, unknown> = {};

    if (month) {
      whereClause.month = parseInt(month);
    }

    if (year) {
      whereClause.year = parseInt(year);
    }

    if (employeeId) {
      whereClause.employeeId = employeeId;
    }

    if (status) {
      whereClause.status = status;
    }

    const payrolls = await db.payroll.findMany({
      where: whereClause,
      include: {
        employee: {
          select: {
            id: true,
            employeeId: true,
            firstName: true,
            lastName: true,
            department: true,
            designation: true,
          },
        },
      },
      orderBy: [
        { year: "desc" },
        { month: "desc" },
      ],
    });

    // Calculate totals
    const totals = payrolls.reduce(
      (acc, payroll) => ({
        basicSalary: acc.basicSalary + payroll.basicSalary,
        allowances: acc.allowances + payroll.allowances,
        deductions: acc.deductions + payroll.deductions,
        tax: acc.tax + payroll.tax,
        netSalary: acc.netSalary + payroll.netSalary,
      }),
      { basicSalary: 0, allowances: 0, deductions: 0, tax: 0, netSalary: 0 }
    );

    return NextResponse.json({
      success: true,
      data: payrolls,
      totals,
    });
  } catch (error) {
    console.error("Error fetching payroll:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch payroll" },
      { status: 500 }
    );
  }
}

// POST - Create/Process payroll
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      employeeId,
      month,
      year,
      basicSalary,
      allowances,
      overtime,
      bonus,
      deductions,
      tax,
      paymentMethod,
    } = body;

    const netSalary =
      basicSalary + allowances + overtime + bonus - deductions - tax;

    const payroll = await db.payroll.upsert({
      where: {
        employeeId_month_year: {
          employeeId,
          month: parseInt(month),
          year: parseInt(year),
        },
      },
      update: {
        basicSalary: parseFloat(basicSalary),
        allowances: parseFloat(allowances) || 0,
        overtime: parseFloat(overtime) || 0,
        bonus: parseFloat(bonus) || 0,
        deductions: parseFloat(deductions) || 0,
        tax: parseFloat(tax) || 0,
        netSalary,
        paymentMethod,
        status: "processed",
      },
      create: {
        employeeId,
        month: parseInt(month),
        year: parseInt(year),
        basicSalary: parseFloat(basicSalary),
        allowances: parseFloat(allowances) || 0,
        overtime: parseFloat(overtime) || 0,
        bonus: parseFloat(bonus) || 0,
        deductions: parseFloat(deductions) || 0,
        tax: parseFloat(tax) || 0,
        netSalary,
        paymentMethod,
        status: "processed",
      },
    });

    return NextResponse.json({
      success: true,
      data: payroll,
      message: "Payroll processed successfully",
    });
  } catch (error) {
    console.error("Error processing payroll:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process payroll" },
      { status: 500 }
    );
  }
}

// PATCH - Mark payroll as paid
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    const payroll = await db.payroll.update({
      where: { id },
      data: {
        status: "paid",
        paidDate: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      data: payroll,
      message: "Payroll marked as paid",
    });
  } catch (error) {
    console.error("Error updating payroll:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update payroll" },
      { status: 500 }
    );
  }
}
