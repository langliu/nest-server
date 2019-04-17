import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Response } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleSearchDto } from './dto/articleSearch.dto';
import { Article } from './article.entity';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('article')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {
  }

  @Get()
  @ApiOperation({ title: '获取文章列表' })
  @ApiResponse({ status: 200, description: '获取文章列表' })
  async getAll(@Query() query: ArticleSearchDto, @Response() res: any): Promise<object> {
    return await this.articleService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ title: '获取文章详情' })
  async getOne(@Param('id') id: number, @Response() res: any): Promise<void> {
    const article = await this.articleService.findOne(id);
    res.status(HttpStatus.OK).send(article);
  }

  @Post()
  @ApiOperation({ title: '创建文章' })
  async create(@Body() article: Article, @Response() res: any): Promise<void> {
    const data = this.articleService.create(article);
    res.status(HttpStatus.OK).send(data);
  }

  @Patch(':id')
  @ApiOperation({ title: '修改文章信息' })
  async update(@Body() article: Article, @Param('id') id: number, @Response() res: any): Promise<void> {
    const data = this.articleService.update(id, article);
    res.status(HttpStatus.OK).send(data);
  }

  @Delete(':id')
  @ApiOperation({ title: '删除文章' })
  async deleteArticle(@Param('id')  id: number, @Response() res: any): Promise<void> {
    const data = this.articleService.deleteArticle(id);
    res.status(HttpStatus.OK).send(data);
  }
}
