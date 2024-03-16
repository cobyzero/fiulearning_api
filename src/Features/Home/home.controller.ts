import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {

    constructor(private service: HomeService) { }

    @Get("categories")
    async getCategories() {
        return await this.service.getCategories();
    }


}
