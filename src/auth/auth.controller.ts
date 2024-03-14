import { Body, Controller, Delete, Get, Param, Patch, Post,  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from './user.entity';
import { LoginDTO } from './dto/login.dto';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';

@Controller('auth')
export class AuthController {

    constructor(private service: AuthService) { }

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        await this.service.addUser(user);
    }

    @Get()
    async listUsers() {
        return await this.service.listUsers();
    }

    @Get(":id")
    async getUserById(@Param("id") id: number) {
        return await this.service.getUserById(id);
    }

    @Delete(":id")
    async deleteUserById(@Param("id") id: number) {
        return await this.service.deleteUserById(id);
    }

    @Patch(":id")
    async updateUserById(@Param("id") id: number, @Body() user: UpdateUserDto) {
        return await this.service.updateUser(id, user);
    }
}
