import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InstructorWhereInput } from "./InstructorWhereInput";
import { Type } from "class-transformer";
import { InstructorOrderByInput } from "./InstructorOrderByInput";

@ArgsType()
class InstructorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InstructorWhereInput,
  })
  @Field(() => InstructorWhereInput, { nullable: true })
  @Type(() => InstructorWhereInput)
  where?: InstructorWhereInput;

  @ApiProperty({
    required: false,
    type: InstructorOrderByInput,
  })
  @Field(() => InstructorOrderByInput, { nullable: true })
  @Type(() => InstructorOrderByInput)
  orderBy?: InstructorOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InstructorFindManyArgs };
