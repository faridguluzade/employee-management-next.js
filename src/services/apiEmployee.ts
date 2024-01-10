import { unstable_noStore as noStore } from "next/cache";

import { EmployeeStatus, PrismaClient } from "@prisma/client";
import { EmployeesTable } from "@/types";

const prisma = new PrismaClient();

export async function getEmployees(): Promise<EmployeesTable[]> {
  noStore();

  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        selected: true,
        status: true,
        image: true,
        job: { select: { title: true } },
        department: { select: { name: true } },
        office: { select: { name: true } },
        lineManager: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return employees;
  } catch (error) {
    throw new Error("Failed to fetch the Employees");
  }
}

export async function getFilteredEmployees({
  query,
  status,
  job,
  office,
}: {
  query: string;
  status: string;
  job: string;
  office: string;
}): Promise<EmployeesTable[]> {
  noStore();

  const employeeStatus =
    !status || status === "all" ? undefined : (status as EmployeeStatus);
  const employeeJob = !job || job === "all" ? undefined : job;
  const employeeOffice = !office || office === "all" ? undefined : office;

  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        selected: true,
        status: true,
        image: true,
        job: { select: { title: true } },
        department: { select: { name: true } },
        office: { select: { name: true } },
        lineManager: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      where: {
        AND: [
          {
            OR: [
              { firstName: { contains: query, mode: "insensitive" } },
              { lastName: { contains: query, mode: "insensitive" } },
              {
                department: { name: { contains: query, mode: "insensitive" } },
              },
            ],
          },
          status ? { status: { equals: employeeStatus } } : {},
          job
            ? { job: { title: { equals: employeeJob, mode: "insensitive" } } }
            : {},
          office
            ? {
                office: {
                  name: { equals: employeeOffice, mode: "insensitive" },
                },
              }
            : {},
        ],
      },
    });

    return employees;
  } catch (error) {
    throw new Error("Failed to fetch the Employees");
  }
}

/*

const ITEMS_PER_PAGE = 5;

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await prisma.employee.findMany({
      select: {
        id: true,
        amount: true,
        date: true,
        status: true,
        customer: {
          select: {
            name: true,
            email: true,
            image_url: true,
          },
        },
      },
      where: {
        OR: [
          { customer: { name: { contains: query, mode: "insensitive" } } },
          { customer: { email: { contains: query, mode: "insensitive" } } },
          { amount: { contains: query, mode: "insensitive" } },
          { date: { contains: query, mode: "insensitive" } },
          { status: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        date: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return invoices;
  } catch (error) {
    console.error("Prisma Error:", error);
    throw new Error("Failed to fetch invoices.");
  }
}
*/
