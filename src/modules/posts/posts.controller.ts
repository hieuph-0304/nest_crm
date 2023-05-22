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
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiException } from 'nestjs-error-handler';

import { PostsService } from './posts.service';
import { Paging } from '../../utils/paging';
import { Response } from '../../utils/response';
import { ACTION, Role } from '../../common/constants';
import { UpdatePostDto } from './dto/update-post-dto';
import { CreatePostDto } from './dto/create-post-dto';
import { Post as PostEntity } from '../../entities/post.entity';
import { RolesGuard } from '../../common/gaurds/roles.gaurd';
import { AbilitiesGaurd } from '../../common/gaurds/ability.gaurd';
import { Roles } from '../../common/decorators/roles.decorator';
import { CheckAbilities } from '../../common/decorators/ability.decorator';

@ApiTags('posts')
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
  @UseGuards(RolesGuard)
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
  @UseGuards(AbilitiesGaurd)
  @CheckAbilities({
    action: ACTION.UPDATE,
    subject: PostEntity,
  })
  async update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return await this.postService.updatePostById(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.postService.deletePostById(id);
  }
}
