import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { UserSearchDto } from './dto/userSearch.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly connection: Connection,
  ) {
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({ id });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async findAll(searchData: UserSearchDto): Promise<object> {
    const data = await this.connection.getRepository(User)
      .createQueryBuilder('user')
      .where('user.name like :name')
      .andWhere('user.sex like :sex')
      .setParameters({
        name: `%${searchData.name ? searchData.name : ''}%`,
        sex: `%${searchData.sex ? searchData.sex : ''}%`,
      })
      .skip((searchData.page - 1) * searchData.size)
      .take(searchData.size)
      .getManyAndCount();
    return { count: data[1], data: data[0] };
  }
}
