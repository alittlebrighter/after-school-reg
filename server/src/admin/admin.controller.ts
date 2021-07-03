import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdminService } from "./admin.service";
import { AdminControllerBase } from "./base/admin.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController extends AdminControllerBase {
  constructor(
    protected readonly service: AdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
