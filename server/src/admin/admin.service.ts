import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AdminServiceBase } from "./base/admin.service.base";

@Injectable()
export class AdminService extends AdminServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
