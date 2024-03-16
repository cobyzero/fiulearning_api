import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './Features/Auth/auth.controller';
import { AuthModule } from './Features/Auth/auth.module';
import { UserEntity } from './Features/Auth/Entities/user_entity';
import { HomeModule } from './Features/Home/home.module';
import { CategoryEntity } from './Features/Home/Entities/category_entity';
import { CoursesModule } from './Features/Courses/courses.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "fiulearning",
      entities: [UserEntity, CategoryEntity],
      synchronize: true,
    }),
    AuthModule,
    HomeModule,
    CoursesModule,
     ],
  controllers: [],
  providers: [],
})
export class AppModule { }
