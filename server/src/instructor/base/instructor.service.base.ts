import { PrismaService } from "nestjs-prisma";
import { Prisma, Instructor } from "@prisma/client";

export class InstructorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InstructorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstructorFindManyArgs>
  ): Promise<number> {
    return this.prisma.instructor.count(args);
  }

  async findMany<T extends Prisma.InstructorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstructorFindManyArgs>
  ): Promise<Instructor[]> {
    return this.prisma.instructor.findMany(args);
  }
  async findOne<T extends Prisma.InstructorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstructorFindUniqueArgs>
  ): Promise<Instructor | null> {
    return this.prisma.instructor.findUnique(args);
  }
  async create<T extends Prisma.InstructorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstructorCreateArgs>
  ): Promise<Instructor> {
    return this.prisma.instructor.create<T>(args);
  }
  async update<T extends Prisma.InstructorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstructorUpdateArgs>
  ): Promise<Instructor> {
    return this.prisma.instructor.update<T>(args);
  }
  async delete<T extends Prisma.InstructorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InstructorDeleteArgs>
  ): Promise<Instructor> {
    return this.prisma.instructor.delete(args);
  }
}
