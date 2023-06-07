import { IsEmail, MinLength, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {

  @ApiProperty()
  @MinLength(1)
  firstName: string;

  @ApiProperty()
  middleName?: string;

  @ApiProperty()
  lastname?: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  @Matches(new RegExp(/(\+977)?[9][6-9]\d{8}/gm),{
    message: 'Invalid number'
  })
  contact: string;
}
