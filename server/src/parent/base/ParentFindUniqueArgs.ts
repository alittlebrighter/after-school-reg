import { ArgsType, Field } from "@nestjs/graphql";
import { ParentWhereUniqueInput } from "./ParentWhereUniqueInput";

@ArgsType()
class ParentFindUniqueArgs {
  @Field(() => ParentWhereUniqueInput, { nullable: false })
  where!: ParentWhereUniqueInput;
}

export { ParentFindUniqueArgs };
