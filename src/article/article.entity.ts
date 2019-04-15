import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  @ApiModelProperty()
  id: number;

  @Column('text')
  @ApiModelProperty({ description: '文章内容' })
  article: string;

  @Column()
  @ApiModelProperty({ description: '文章标题' })
  title: string;

  @Column('int')
  @ApiModelProperty({ description: '文章作者' })
  author: number;

  @Column()
  createTime: Date;

  @Column()
  updateTime: Date;

  @Column()
  tags: string;

  @Column('int')
  viewCount: number;
}
