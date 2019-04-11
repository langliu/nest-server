import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiModelProperty()
  id: number;

  @Column({ length: 50 })
  @ApiModelProperty({ description: '用户名' })
  name: string;

  @Column('text')
  @ApiModelProperty()
  description: string;

  @Column({ length: 10 })
  @ApiModelProperty()
  realName: string;

  @Column('int')
  views: number;

  @Column({ length: 2 })
  sex: string;

  @Column()
  age: number;

  @Column({ length: 20 })
  password: string;
}
