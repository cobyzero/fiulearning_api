import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './Entities/category_entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {

    constructor(@InjectRepository(CategoryEntity) private category: Repository<CategoryEntity>) { }

    getCategories(){
        return this.category.find();
    }

}
