import { ArgsType, Field } from "@nestjs/graphql";
import { InstructorWhereUniqueInput } from "./InstructorWhereUniqueInput";

@ArgsType()
class InstructorFindUniqueArgs {
  @Field(() => InstructorWhereUniqueInput, { nullable: false })
  where!: InstructorWhereUniqueInput;
}

export { InstructorFindUniqueArgs };
