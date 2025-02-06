import { IsString, IsEmail, IsPhoneNumber, IsArray, ArrayNotEmpty, IsUUID, IsNotEmpty, isValidationOptions } from '@nestjs/class-validator';
import { IsOptional } from '@nestjs/class-validator'; // Optional for update scenarios

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsPhoneNumber( undefined,{ message: 'Mobile number must be valid' })
  mobileno: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Email must be valid' })
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsArray()
  @IsNotEmpty()
  @IsUUID('4', { message: 'Restaurant ID must be a valid UUID' })
  restaurantId: string[]; // For restaurantId, if it's just an ID reference

  @IsArray()
  @ArrayNotEmpty()
  @IsUUID('4', { each: true, message: 'Each Order ID must be a valid UUID' })
  orderIds: string[]; // Order IDs as UUID array

}
