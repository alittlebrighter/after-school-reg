import { PrismaService } from "nestjs-prisma";
import { Prisma, Admin } from "@prisma/client";

export class AdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AdminFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminFindManyArgs>
  ): Promise<number> {
    return this.prisma.admin.count(args);
  }

  async findMany<T extends Prisma.AdminFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminFindManyArgs>
  ): Promise<Admin[]> {
    return this.prisma.admin.findMany(args);
  }
  async findOne<T extends Prisma.AdminFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminFindUniqueArgs>
  ): Promise<Admin | null> {
    return this.prisma.admin.findUnique(args);
  }
  async create<T extends Prisma.AdminCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminCreateArgs>
  ): Promise<Admin> {
    return this.prisma.admin.create<T>(args);
  }
  async update<T extends Prisma.AdminUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminUpdateArgs>
  ): Promise<Admin> {
    return this.prisma.admin.update<T>(args);
  }
  async delete<T extends Prisma.AdminDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdminDeleteArgs>
  ): Promise<Admin> {
    return this.prisma.admin.delete(args);
  }
}
