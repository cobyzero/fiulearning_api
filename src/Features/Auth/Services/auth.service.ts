import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entities/user_entity';
import { Repository } from 'typeorm';
import { LoginDto } from '../Entities/dto/login.dto';
import { RegisterDto } from '../Entities/dto/register.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UserEntity) private repository: Repository<UserEntity>) { }


    async login(login: LoginDto) {
        return await this.repository.findOne({
            where: {
                email: login.email,
                password: login.password,
            }
        });
    }


    async register(register: RegisterDto) {

        const userT = await this.repository.findOne({
            where: {
                email: register.email,
            }
        });

        if(userT){
           return new HttpException("El correo ya se encuentra registrado", HttpStatus.CONFLICT);
        }

        const user = this.repository.create(register);
 
        return this.repository.save(user);
    }
}
