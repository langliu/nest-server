import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository, Connection } from 'typeorm';
import { ArticleSearchDto } from './dto/articleSearch.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
    private readonly connection: Connection,
  ) {
  }

  async findOne(id): Promise<object> {
    return await this.articleRepository.findOne(id);
  }

  async findAll(searchData: ArticleSearchDto): Promise<object> {
    const data = await this.connection.getRepository(Article)
      .createQueryBuilder('user')
      .where('user.title like :title')
      .andWhere('user.tags like :tags')
      .setParameters({
        name: `%${searchData.title ? searchData.title : ''}%`,
        sex: `%${searchData.tags ? searchData.tags : ''}%`,
      })
      .skip((searchData.page - 1) * searchData.size)
      .take(searchData.size)
      .getManyAndCount();
    return { count: data[1], data: data[0] };
  }
}
