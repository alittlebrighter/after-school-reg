import { ArgsType, Field } from "@nestjs/graphql";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";

@ArgsType()
class AdminFindUniqueArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  where!: AdminWhereUniqueInput;
}

export { AdminFindUniqueArgs };
