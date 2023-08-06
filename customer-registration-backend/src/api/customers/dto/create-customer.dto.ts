import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Rainbow } from '../enums/colors.enum';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public cpf: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'enum',
    enum: Rainbow,
    default: Rainbow.Blue,
  })
  public color: Rainbow;

  @IsString()
  @IsOptional()
  @ApiProperty()
  public note: string;
}
