import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParentWhereInput } from "./ParentWhereInput";
import { Type } from "class-transformer";
import { ParentOrderByInput } from "./ParentOrderByInput";

@ArgsType()
class ParentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ParentWhereInput,
  })
  @Field(() => ParentWhereInput, { nullable: true })
  @Type(() => ParentWhereInput)
  where?: ParentWhereInput;

  @ApiProperty({
    required: false,
    type: ParentOrderByInput,
  })
  @Field(() => ParentOrderByInput, { nullable: true })
  @Type(() => ParentOrderByInput)
  orderBy?: ParentOrderByInput;

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

export { ParentFindManyArgs };
