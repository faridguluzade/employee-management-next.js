import { EmployeesTable } from "@/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEmployees(): Promise<EmployeesTable[]> {
  try {
    const employees = await prisma.employee.findMany({
      select: {
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
