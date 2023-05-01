import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post-dto';
import { PostEntity } from 'src/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_REPOSITORY') private postRepository: Repository<PostEntity>,
  ) {}

  async getListPosts() {
    return await this.postRepository.find();
  }

  async createPost(data: CreatePostDto) {
    return await this.postRepository.save(data);
  }
}
