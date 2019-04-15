import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';


@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, ArticleModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
