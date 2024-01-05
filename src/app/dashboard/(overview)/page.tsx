import { seedAll } from "../../../../prisma/seed";
import { PrismaClient, Employee } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchEmployeeData() {
  try {
    const employeesData: any = await prisma.employee.findMany({
      select: {
        firstName: true,
        lastName: true,
        job: {
          select: { title: true },
        },
        department: {
          select: { name: true },
        },
        office: {
          select: { name: true },
        },
      },
    });

    console.log(employeesData);
  } catch (error) {
    console.error("Error fetching employee data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

function page() {
  // fetchEmployeeData();

  return (
    <>
      <h3>DASHBOARD</h3>
      <button>SEED ALL DATA</button>
    </>
  );
}

export default page;
