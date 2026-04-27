 import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFxDto {
  @IsString()
  @IsNotEmpty()
  customer_name: string;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsNumber()
  amount: number;
}