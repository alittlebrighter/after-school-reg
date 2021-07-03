import { PrismaService } from "nestjs-prisma";
import { Prisma, Parent } from "@prisma/client";

export class ParentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ParentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentFindManyArgs>
  ): Promise<number> {
    return this.prisma.parent.count(args);
  }

  async findMany<T extends Prisma.ParentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentFindManyArgs>
  ): Promise<Parent[]> {
    return this.prisma.parent.findMany(args);
  }
  async findOne<T extends Prisma.ParentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentFindUniqueArgs>
  ): Promise<Parent | null> {
    return this.prisma.parent.findUnique(args);
  }
  async create<T extends Prisma.ParentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentCreateArgs>
  ): Promise<Parent> {
    return this.prisma.parent.create<T>(args);
  }
  async update<T extends Prisma.ParentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentUpdateArgs>
  ): Promise<Parent> {
    return this.prisma.parent.update<T>(args);
  }
  async delete<T extends Prisma.ParentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ParentDeleteArgs>
  ): Promise<Parent> {
    return this.prisma.parent.delete(args);
  }
}
