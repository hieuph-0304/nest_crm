import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto';
import { Response } from 'src/common/response';
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
import { PostsService } from './posts.service';
import { RolesGuard } from 'src/common/gaurds/roles.gaurd';
import { Role } from 'src/common/constants';
import { Roles } from 'src/common/decorators/roles.decorator';

@ApiTags('posts')
@UseGuards(RolesGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiOkResponse({ type: PostEntity, isArray: true })
  @Get()
  async findAll() {
    const posts = await this.postService.getListPosts();
    const pagingRes = new Paging(1, 10, posts.length);

    return new Response(200, posts, 'Get list posts successfully', pagingRes);
  }

  @ApiCreatedResponse({ type: PostEntity })
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() data: CreatePostDto) {
    return await this.postService.createPost(data);
  }

  @ApiOkResponse({ type: PostEntity, description: 'Get post by id' })
  @ApiNotFoundResponse()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postService.findPostById(id);

    if (!post) {
      throw new ApiException('Error', HttpStatus.NOT_FOUND);
    }

    return post;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return await this.postService.updatePostById(id, data);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async delete(@Param('id') id: string) {
    return await this.postService.deletePostById(id);
  }
}
