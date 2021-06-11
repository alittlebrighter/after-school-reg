import { Module } from "@nestjs/common";
import { InstructorModuleBase } from "./base/instructor.module.base";
import { InstructorService } from "./instructor.service";
import { InstructorController } from "./instructor.controller";
import { InstructorResolver } from "./instructor.resolver";

@Module({
  imports: [InstructorModuleBase],
  controllers: [InstructorController],
  providers: [InstructorService, InstructorResolver],
  exports: [InstructorService],
})
export class InstructorModule {}
