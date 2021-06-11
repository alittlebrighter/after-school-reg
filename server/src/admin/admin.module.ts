import { Module } from "@nestjs/common";
import { AdminModuleBase } from "./base/admin.module.base";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { AdminResolver } from "./admin.resolver";

@Module({
  imports: [AdminModuleBase],
  controllers: [AdminController],
  providers: [AdminService, AdminResolver],
  exports: [AdminService],
})
export class AdminModule {}
