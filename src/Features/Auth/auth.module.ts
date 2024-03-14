import { Module } from '@nestjs/common';
import { AuthService } from './Services/auth.service';
import { AuthController } from './Controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './Entities/user_entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      UserEntity
    ]),
   
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
