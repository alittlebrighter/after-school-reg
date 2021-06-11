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
import { DeleteParentArgs } from "./DeleteParentArgs";
import { ParentFindManyArgs } from "./ParentFindManyArgs";
import { ParentFindUniqueArgs } from "./ParentFindUniqueArgs";
import { Parent } from "./Parent";
import { ParentService } from "../parent.service";

@graphql.Resolver(() => Parent)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class ParentResolverBase {
  constructor(
    protected readonly service: ParentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "any",
  })
  async _parentsMeta(
    @graphql.Args() args: ParentFindManyArgs
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

  @graphql.Query(() => [Parent])
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "any",
  })
  async parents(
    @graphql.Args() args: ParentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Parent[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Parent",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Parent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "own",
  })
  async parent(
    @graphql.Args() args: ParentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Parent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Parent",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Parent)
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "delete",
    possession: "any",
  })
  async deleteParent(
    @graphql.Args() args: DeleteParentArgs
  ): Promise<Parent | null> {
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
