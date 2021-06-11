import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParentService } from "./parent.service";
import { ParentControllerBase } from "./base/parent.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("parents")
@common.Controller("parents")
export class ParentController extends ParentControllerBase {
  constructor(
    protected readonly service: ParentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
