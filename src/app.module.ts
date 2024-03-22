import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gabercujes:j5727zLIElUvV5cN@blog.9hdakid.mongodb.net/'), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
