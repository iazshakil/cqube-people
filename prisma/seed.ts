import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  // Create Leave Types
  const leaveTypes = await Promise.all([
    prisma.leaveType.upsert({
      where: { code: "ANNUAL" },
      update: {},
      create: {
        name: "Annual Leave",
        code: "ANNUAL",
        description: "Yearly paid vacation leave",
        daysAllowed: 20,
        isPaid: true,
      },
    }),
    prisma.leaveType.upsert({
      where: { code: "SICK" },
      update: {},
      create: {
        name: "Sick Leave",
        code: "SICK",
        description: "Leave for illness or medical appointments",
        daysAllowed: 10,
        isPaid: true,
      },
    }),
    prisma.leaveType.upsert({
      where: { code: "PERSONAL" },
      update: {},
      create: {
        name: "Personal Leave",
        code: "PERSONAL",
        description: "Personal time off",
        daysAllowed: 5,
        isPaid: true,
      },
    }),
    prisma.leaveType.upsert({
      where: { code: "MATERNITY" },
      update: {},
      create: {
        name: "Maternity Leave",
        code: "MATERNITY",
        description: "Maternity leave for new mothers",
        daysAllowed: 90,
        isPaid: true,
      },
    }),
    prisma.leaveType.upsert({
      where: { code: "PATERNITY" },
      update: {},
      create: {
        name: "Paternity Leave",
        code: "PATERNITY",
        description: "Paternity leave for new fathers",
        daysAllowed: 14,
        isPaid: true,
      },
    }),
  ]);

  console.log(`Created ${leaveTypes.length} leave types`);

  // Create Departments
  const departments = await Promise.all([
    prisma.department.upsert({
      where: { id: "dept-engineering" },
      update: {},
      create: {
        id: "dept-engineering",
        name: "Engineering",
        description: "Software development and technical operations",
      },
    }),
    prisma.department.upsert({
      where: { id: "dept-marketing" },
      update: {},
      create: {
        id: "dept-marketing",
        name: "Marketing",
        description: "Marketing and brand management",
      },
    }),
    prisma.department.upsert({
      where: { id: "dept-sales" },
      update: {},
      create: {
        id: "dept-sales",
        name: "Sales",
        description: "Sales and business development",
      },
    }),
    prisma.department.upsert({
      where: { id: "dept-hr" },
      update: {},
      create: {
        id: "dept-hr",
        name: "Human Resources",
        description: "Human resources and people operations",
      },
    }),
    prisma.department.upsert({
      where: { id: "dept-finance" },
      update: {},
      create: {
        id: "dept-finance",
        name: "Finance",
        description: "Financial operations and accounting",
      },
    }),
    prisma.department.upsert({
      where: { id: "dept-operations" },
      update: {},
      create: {
        id: "dept-operations",
        name: "Operations",
        description: "Business operations and logistics",
      },
    }),
  ]);

  console.log(`Created ${departments.length} departments`);

  // Create Employees
  const employees = [
    {
      id: "emp-001",
      employeeId: "EMP001",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@company.com",
      phone: "+1 234-567-8901",
      departmentId: "dept-engineering",
      designation: "Senior Developer",
      employmentType: "full-time",
      joinDate: new Date("2022-03-15"),
      salary: 85000,
      status: "active",
    },
    {
      id: "emp-002",
      employeeId: "EMP002",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@company.com",
      phone: "+1 234-567-8902",
      departmentId: "dept-marketing",
      designation: "Marketing Manager",
      employmentType: "full-time",
      joinDate: new Date("2021-07-20"),
      salary: 92000,
      status: "active",
    },
    {
      id: "emp-003",
      employeeId: "EMP003",
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.b@company.com",
      phone: "+1 234-567-8903",
      departmentId: "dept-sales",
      designation: "Sales Executive",
      employmentType: "full-time",
      joinDate: new Date("2023-01-10"),
      salary: 65000,
      status: "active",
    },
    {
      id: "emp-004",
      employeeId: "EMP004",
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.d@company.com",
      phone: "+1 234-567-8904",
      departmentId: "dept-hr",
      designation: "HR Specialist",
      employmentType: "full-time",
      joinDate: new Date("2022-09-05"),
      salary: 58000,
      status: "on_leave",
    },
    {
      id: "emp-005",
      employeeId: "EMP005",
      firstName: "David",
      lastName: "Wilson",
      email: "david.w@company.com",
      phone: "+1 234-567-8905",
      departmentId: "dept-finance",
      designation: "Financial Analyst",
      employmentType: "full-time",
      joinDate: new Date("2022-11-22"),
      salary: 72000,
      status: "active",
    },
    {
      id: "emp-006",
      employeeId: "EMP006",
      firstName: "Jessica",
      lastName: "Taylor",
      email: "jessica.t@company.com",
      phone: "+1 234-567-8906",
      departmentId: "dept-engineering",
      designation: "UI/UX Designer",
      employmentType: "full-time",
      joinDate: new Date("2023-04-18"),
      salary: 68000,
      status: "active",
    },
    {
      id: "emp-007",
      employeeId: "EMP007",
      firstName: "Daniel",
      lastName: "Anderson",
      email: "daniel.a@company.com",
      phone: "+1 234-567-8907",
      departmentId: "dept-operations",
      designation: "Operations Manager",
      employmentType: "full-time",
      joinDate: new Date("2021-02-28"),
      salary: 95000,
      status: "active",
    },
    {
      id: "emp-008",
      employeeId: "EMP008",
      firstName: "Lisa",
      lastName: "Martinez",
      email: "lisa.m@company.com",
      phone: "+1 234-567-8908",
      departmentId: "dept-engineering",
      designation: "Tech Lead",
      employmentType: "full-time",
      joinDate: new Date("2020-08-14"),
      salary: 110000,
      status: "active",
    },
  ];

  for (const employee of employees) {
    await prisma.employee.upsert({
      where: { id: employee.id },
      update: {},
      create: employee,
    });
  }

  console.log(`Created ${employees.length} employees`);

  // Create Job Postings
  const jobPostings = [
    {
      id: "job-001",
      title: "Senior Software Engineer",
      code: "SSE-2024-001",
      department: "Engineering",
      location: "New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$100,000 - $130,000",
      description: "We are looking for a senior software engineer to join our engineering team.",
      requirements: "5+ years of experience in software development, proficiency in React and Node.js",
      benefits: "Health insurance, 401k, remote work options",
      status: "published",
      postedDate: new Date("2024-01-10"),
    },
    {
      id: "job-002",
      title: "Marketing Specialist",
      code: "MS-2024-001",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$60,000 - $80,000",
      description: "We are looking for a marketing specialist to drive our marketing initiatives.",
      requirements: "3+ years of marketing experience, strong communication skills",
      benefits: "Health insurance, flexible hours, professional development",
      status: "published",
      postedDate: new Date("2024-01-08"),
    },
    {
      id: "job-003",
      title: "Sales Representative",
      code: "SR-2024-001",
      department: "Sales",
      location: "Chicago",
      type: "Full-time",
      experience: "2+ years",
      salary: "$50,000 - $70,000 + Commission",
      description: "We are looking for a sales representative to expand our customer base.",
      requirements: "2+ years of sales experience, excellent negotiation skills",
      benefits: "Commission structure, health insurance, car allowance",
      status: "published",
      postedDate: new Date("2024-01-05"),
    },
    {
      id: "job-004",
      title: "HR Coordinator",
      code: "HRC-2024-001",
      department: "HR",
      location: "New York",
      type: "Part-time",
      experience: "1+ years",
      salary: "$25 - $30 per hour",
      description: "We are looking for an HR coordinator to support our HR operations.",
      requirements: "1+ years of HR experience, knowledge of HRIS systems",
      benefits: "Flexible schedule, professional development",
      status: "closed",
      postedDate: new Date("2023-12-15"),
    },
  ];

  for (const job of jobPostings) {
    await prisma.jobPosting.upsert({
      where: { id: job.id },
      update: {},
      create: job,
    });
  }

  console.log(`Created ${jobPostings.length} job postings`);

  // Create Trainings
  const trainings = [
    {
      id: "train-001",
      title: "Leadership Development",
      description: "Comprehensive leadership training for managers and team leads",
      category: "Leadership",
      instructor: "Dr. Sarah Miller",
      duration: 16,
      type: "offline",
      cost: 500,
      status: "ongoing",
    },
    {
      id: "train-002",
      title: "AWS Cloud Practitioner",
      description: "AWS certification preparation course",
      category: "Technical",
      instructor: "John Anderson",
      duration: 24,
      type: "online",
      cost: 300,
      status: "upcoming",
    },
    {
      id: "train-003",
      title: "Project Management Essentials",
      description: "Learn the fundamentals of project management",
      category: "Management",
      instructor: "Emily Chen",
      duration: 12,
      type: "offline",
      cost: 400,
      status: "completed",
    },
    {
      id: "train-004",
      title: "Communication Skills",
      description: "Improve your professional communication abilities",
      category: "Soft Skills",
      instructor: "Mark Thompson",
      duration: 8,
      type: "online",
      cost: 200,
      status: "ongoing",
    },
  ];

  for (const training of trainings) {
    await prisma.training.upsert({
      where: { id: training.id },
      update: {},
      create: training,
    });
  }

  console.log(`Created ${trainings.length} trainings`);

  // Create Company Settings
  await prisma.companySettings.upsert({
    where: { id: "company-001" },
    update: {},
    create: {
      id: "company-001",
      companyName: "CQube Technologies",
      email: "info@cqube.com",
      phone: "+1 (555) 123-4567",
      website: "https://cqube.com",
      address: "123 Business Park, Suite 456, New York, NY 10001",
      currency: "USD",
      timezone: "America/New_York",
      workingDays: '["Monday","Tuesday","Wednesday","Thursday","Friday"]',
      workingHours: "09:00 - 18:00",
    },
  });

  console.log("Created company settings");

  // Create Holidays
  const holidays = [
    { name: "New Year's Day", date: new Date("2024-01-01"), type: "public" },
    { name: "Martin Luther King Jr. Day", date: new Date("2024-01-15"), type: "public" },
    { name: "Presidents' Day", date: new Date("2024-02-19"), type: "public" },
    { name: "Memorial Day", date: new Date("2024-05-27"), type: "public" },
    { name: "Independence Day", date: new Date("2024-07-04"), type: "public" },
    { name: "Labor Day", date: new Date("2024-09-02"), type: "public" },
    { name: "Thanksgiving Day", date: new Date("2024-11-28"), type: "public" },
    { name: "Christmas Day", date: new Date("2024-12-25"), type: "public" },
  ];

  for (const holiday of holidays) {
    const existing = await prisma.holiday.findFirst({
      where: {
        name: holiday.name,
        date: holiday.date,
      },
    });
    if (!existing) {
      await prisma.holiday.create({ data: holiday });
    }
  }

  console.log(`Created ${holidays.length} holidays`);

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
