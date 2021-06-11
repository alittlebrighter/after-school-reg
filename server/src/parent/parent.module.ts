import { Module } from "@nestjs/common";
import { ParentModuleBase } from "./base/parent.module.base";
import { ParentService } from "./parent.service";
import { ParentController } from "./parent.controller";
import { ParentResolver } from "./parent.resolver";

@Module({
  imports: [ParentModuleBase],
  controllers: [ParentController],
  providers: [ParentService, ParentResolver],
  exports: [ParentService],
})
export class ParentModule {}
