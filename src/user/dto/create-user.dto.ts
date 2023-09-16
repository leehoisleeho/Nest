import { IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({
    message: 'username can not be empty',
  })
  @IsString({
    message: 'username must string',
  })
  username: string

  @IsNotEmpty()
  @IsString()
  password: string
}
