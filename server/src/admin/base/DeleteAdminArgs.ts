import { ArgsType, Field } from "@nestjs/graphql";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";

@ArgsType()
class DeleteAdminArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  where!: AdminWhereUniqueInput;
}

export { DeleteAdminArgs };
