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
import { DeleteInstructorArgs } from "./DeleteInstructorArgs";
import { InstructorFindManyArgs } from "./InstructorFindManyArgs";
import { InstructorFindUniqueArgs } from "./InstructorFindUniqueArgs";
import { Instructor } from "./Instructor";
import { InstructorService } from "../instructor.service";

@graphql.Resolver(() => Instructor)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class InstructorResolverBase {
  constructor(
    protected readonly service: InstructorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "any",
  })
  async _instructorsMeta(
    @graphql.Args() args: InstructorFindManyArgs
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

  @graphql.Query(() => [Instructor])
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "any",
  })
  async instructors(
    @graphql.Args() args: InstructorFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Instructor[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Instructor",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Instructor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "own",
  })
  async instructor(
    @graphql.Args() args: InstructorFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Instructor | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Instructor",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Instructor)
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "delete",
    possession: "any",
  })
  async deleteInstructor(
    @graphql.Args() args: DeleteInstructorArgs
  ): Promise<Instructor | null> {
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
