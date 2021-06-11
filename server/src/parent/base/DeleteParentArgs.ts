import { ArgsType, Field } from "@nestjs/graphql";
import { ParentWhereUniqueInput } from "./ParentWhereUniqueInput";

@ArgsType()
class DeleteParentArgs {
  @Field(() => ParentWhereUniqueInput, { nullable: false })
  where!: ParentWhereUniqueInput;
}

export { DeleteParentArgs };
