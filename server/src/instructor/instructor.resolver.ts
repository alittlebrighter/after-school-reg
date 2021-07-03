import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InstructorResolverBase } from "./base/instructor.resolver.base";
import { Instructor } from "./base/Instructor";
import { InstructorService } from "./instructor.service";

@graphql.Resolver(() => Instructor)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class InstructorResolver extends InstructorResolverBase {
  constructor(
    protected readonly service: InstructorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
