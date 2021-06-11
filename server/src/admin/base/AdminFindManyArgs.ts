import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminWhereInput } from "./AdminWhereInput";
import { Type } from "class-transformer";
import { AdminOrderByInput } from "./AdminOrderByInput";

@ArgsType()
class AdminFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdminWhereInput,
  })
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: AdminWhereInput;

  @ApiProperty({
    required: false,
    type: AdminOrderByInput,
  })
  @Field(() => AdminOrderByInput, { nullable: true })
  @Type(() => AdminOrderByInput)
  orderBy?: AdminOrderByInput;

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

export { AdminFindManyArgs };
