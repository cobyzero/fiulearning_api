import { IsString } from 'class-validator'

export class LoginDTO{
    @IsString()
    email: string
    password: string
}


