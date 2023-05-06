import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post-dto';
import { Response } from 'src/common/Response';
import { Paging } from 'src/common/paging';
import { UpdatePostDto } from './dto/update-post-dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    const posts = await this.postsService.getListPosts();
    const pagingRes = new Paging(1, 10, posts.length);

    return new Response(200, posts, 'Get list posts successfully', pagingRes);
  }

  @Post()
  async create(@Body() data: CreatePostDto) {
    return await this.postsService.createPost(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findPostById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return await this.postsService.updatePostById(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.postsService.deletePostById(id);
  }
}
