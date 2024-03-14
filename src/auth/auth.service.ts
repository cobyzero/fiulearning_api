import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';

@Injectable()
export class AuthService {


    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }


    addUser(user: CreateUserDto) {
        const nUser = this.userRepository.create(user);
        return this.userRepository.save(nUser);
    }

    listUsers() {
        return this.userRepository.find();
    }

    getUserById(id: number) {
        return this.userRepository.find({
            where: {
                id: id,
            }
        });
    }

    deleteUserById(id: number) {
        return this.userRepository.delete({ id });
    }

    updateUser(id: number, user: UpdateUserDto) {
        return this.userRepository.update({ id }, user);
    }
}
