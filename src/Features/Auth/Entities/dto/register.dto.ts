import { IsString } from "@nestjs/class-validator";

export class RegisterDto{
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
}