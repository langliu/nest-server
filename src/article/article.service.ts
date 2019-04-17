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
    const data: Article = await this.articleRepository.findOne(id);
    this.addViewCount(data);
    return { code: 200, data };
  }

  async findAll(searchData: ArticleSearchDto): Promise<object> {
    const data = await this.connection.getRepository(Article)
      .createQueryBuilder('user')
      .where('user.title like :title')
      .andWhere('user.tags like :tags')
      .setParameters({
        title: `%${searchData.title ? searchData.title : ''}%`,
        tags: `%${searchData.tags ? searchData.tags : ''}%`,
      })
      .skip((searchData.page - 1) * searchData.size)
      .take(searchData.size)
      .getManyAndCount();
    return { count: data[1], data: data[0] };
  }

  async create(article: Article): Promise<Article> {
    article.createTime = new Date();
    article.updateTime = new Date();
    article.viewCount = 0;
    return this.articleRepository.save(article);
  }

  async update(id: number, article: Article): Promise<any> {
    // const articleToUpdate = await this.articleRepository.findOne(id);
    // articleToUpdate.viewCount = article.viewCount;
    article.updateTime = new Date();
    return this.articleRepository.update({ id }, article);
  }

  async addViewCount(article: Article): Promise<object> {
    article.viewCount += 1;
    return this.articleRepository.update({ id: article.id }, article);
  }

  async deleteArticle(id: number): Promise<object> {
    return this.articleRepository.delete({ id });
  }
}
