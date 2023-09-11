import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly user: Repository<User>) {}

  find() {
    return this.user.find()
  }

  async findOne(id: number) {
    const result = await this.user.findOneBy({ id })
    if (result) {
      return {
        error: 0,
        msg: 'ok',
        data: result,
      }
    } else {
      return {
        error: 1,
        msg: 'not find',
      }
    }
  }

  async create(data: any) {
    try {
      let result = await this.user.save(data)
      if (result) {
        return {
          error: 0,
          msg: 'ok',
          data: result,
        }
      }
    } catch (e) {
      return {
        error: e,
        msg: 'create failed',
      }
    }
  }

  async delete(id: number) {
    try {
      const result = await this.user.delete(id)
      if (result.affected) {
        return {
          error: 0,
          msg: 'ok',
        }
      } else {
        return {
          error: 1,
          msg: 'delete failed',
        }
      }
    } catch (e) {
      return {
        error: e.message,
        msg: 'delete failed',
      }
    }
  }

  async update(data: any) {
    const result = await this.user.update(data.id, data)
    if (result.affected) {
      return {
        error: 0,
        msg: 'ok',
      }
    } else {
      return {
        error: 1,
        msg: 'not find',
      }
    }
  }
}
