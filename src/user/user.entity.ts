import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiModelProperty({ description: '用户ID' })
  id: number;

  @Column({ length: 50 })
  @ApiModelProperty({ description: '用户名' })
  name: string;

  @Column('text')
  @ApiModelProperty({ description: '用户简介' })
  description: string;

  @Column({ length: 10 })
  @ApiModelProperty({ description: '真实姓名' })
  realName: string;

  @Column('int')
  @ApiModelProperty({ description: '浏览次数' })
  views: number;

  @Column({ length: 2 })
  @ApiModelProperty({ description: '性别' })
  sex: string;

  @Column()
  @ApiModelProperty({ description: '年纪' })
  age: number;

  @Column({ length: 20 })
  @ApiModelProperty({ description: '登录密码' })
  password: string;
}
