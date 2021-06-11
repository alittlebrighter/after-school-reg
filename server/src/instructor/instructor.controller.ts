import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstructorService } from "./instructor.service";
import { InstructorControllerBase } from "./base/instructor.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("instructors")
@common.Controller("instructors")
export class InstructorController extends InstructorControllerBase {
  constructor(
    protected readonly service: InstructorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
