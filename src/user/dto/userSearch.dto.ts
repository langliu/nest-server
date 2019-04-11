import { ApiModelProperty } from '@nestjs/swagger';

export class UserSearchDto {
  @ApiModelProperty({ required: false, description: '用户名' })
  name: string;

  @ApiModelProperty({ required: false })
  sex: string;

  @ApiModelProperty()
  page: number;

  @ApiModelProperty()
  size: number;
}
