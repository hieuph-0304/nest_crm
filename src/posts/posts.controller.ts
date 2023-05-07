import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post-dto';
import { Response } from 'src/common/Response';
import { Paging } from 'src/common/paging';
import { UpdatePostDto } from './dto/update-post-dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Post as PostEntity } from 'src/entities/post.entity';
import { ApiException } from 'nestjs-error-handler';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOkResponse({ type: PostEntity, isArray: true })
  @Get()
  async findAll() {
    const posts = await this.postsService.getListPosts();
    const pagingRes = new Paging(1, 10, posts.length);

    return new Response(200, posts, 'Get list posts successfully', pagingRes);
  }

  @ApiCreatedResponse({ type: PostEntity })
  @Post()
  async create(@Body() data: CreatePostDto) {
    return await this.postsService.createPost(data);
  }

  @ApiOkResponse({ type: PostEntity, description: 'Get post by id' })
  @ApiNotFoundResponse()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findPostById(id);

    if (!post) {
      throw new ApiException('Error', HttpStatus.NOT_FOUND);
    }

    return post;
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
