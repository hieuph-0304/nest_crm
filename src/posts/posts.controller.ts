import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post-dto';
import { Response } from 'src/common/Response';
import { Paging } from 'src/common/paging';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getListPosts() {
    const paging = {
      page: 1,
      page_size: 2,
    };

    const listPosts = await this.postsService.getListPosts();
    const pagingRes = new Paging(
      paging.page,
      paging.page_size,
      listPosts.length,
    );
    return new Response(
      200,
      listPosts,
      'Get list posts successfully',
      pagingRes,
    );
  }

  @Post()
  async createPost(@Body() data: CreatePostDto) {
    return await this.postsService.createPost(data);
  }
}
