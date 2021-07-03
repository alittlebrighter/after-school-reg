import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteAdminArgs } from "./DeleteAdminArgs";
import { AdminFindManyArgs } from "./AdminFindManyArgs";
import { AdminFindUniqueArgs } from "./AdminFindUniqueArgs";
import { Admin } from "./Admin";
import { AdminService } from "../admin.service";

@graphql.Resolver(() => Admin)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class AdminResolverBase {
  constructor(
    protected readonly service: AdminService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async _adminsMeta(
    @graphql.Args() args: AdminFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Admin])
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  async admins(
    @graphql.Args() args: AdminFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Admin[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Admin",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Admin, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "own",
  })
  async admin(
    @graphql.Args() args: AdminFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Admin | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Admin",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Admin)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "delete",
    possession: "any",
  })
  async deleteAdmin(
    @graphql.Args() args: DeleteAdminArgs
  ): Promise<Admin | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
