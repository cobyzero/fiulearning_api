import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './Features/Auth/Controllers/auth.controller';
import { AuthModule } from './Features/Auth/auth.module';
import { UserEntity } from './Features/Auth/Entities/user_entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "fiulearning",
      entities: [UserEntity],
      synchronize: true,
    }),
    AuthModule,
     ],
  controllers: [],
  providers: [],
})
export class AppModule { }
