/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ButtonResponseWhereInput } from "./ButtonResponseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ButtonResponseOrderByInput } from "./ButtonResponseOrderByInput";

@ArgsType()
class ButtonResponseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ButtonResponseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ButtonResponseWhereInput, { nullable: true })
  @Type(() => ButtonResponseWhereInput)
  where?: ButtonResponseWhereInput;

  @ApiProperty({
    required: false,
    type: [ButtonResponseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ButtonResponseOrderByInput], { nullable: true })
  @Type(() => ButtonResponseOrderByInput)
  orderBy?: Array<ButtonResponseOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ButtonResponseFindManyArgs as ButtonResponseFindManyArgs };
