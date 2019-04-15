import { ApiModelProperty } from '@nestjs/swagger';

export class ArticleSearchDto {
  @ApiModelProperty({ required: false, description: '文章标题' })
  title: string;

  @ApiModelProperty({ required: false, description: '文章标签' })
  tags: string;

  @ApiModelProperty()
  page: number;

  @ApiModelProperty()
  size: number;
}
