import { Body, Controller, HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { LoginDto } from '../Entities/dto/login.dto';
import { AuthService } from '../Services/auth.service';
import { RegisterDto } from '../Entities/dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private service: AuthService) { }

    @Post("login")
    async login(@Body() login: LoginDto) {
        const user = await this.service.login(login);

        if (user == null) {
            return new HttpException("Las credenciales son incorrectas", HttpStatus.UNAUTHORIZED);
        }

        return user;
    }

    @Post("register")
    async register(@Body() register: RegisterDto) {
        return await this.service.register(register); 
    }
}
