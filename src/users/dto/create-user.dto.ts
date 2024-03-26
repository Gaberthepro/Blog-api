import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;
  
    @IsNotEmpty()
    @IsString()
    lastName: string;
  
    @IsNotEmpty()
    @IsString()
    username: string;
  
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
}
