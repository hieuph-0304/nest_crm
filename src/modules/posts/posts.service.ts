import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Post } from '../../entities/post.entity';
import { CreatePostDto } from './dto/create-post-dto';
import { UpdatePostDto } from './dto/update-post-dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async getListPosts() {
    return await this.postRepository.find();
  }

  async createPost(data: CreatePostDto) {
    return await this.postRepository.save(data);
  }

  async findPostById(id: string) {
    return await this.postRepository.findBy({ id });
  }

  async updatePostById(id: string, data: UpdatePostDto) {
    await this.postRepository.update(id, data);
    return {
      result: 'success',
    };
  }

  async deletePostById(id: string) {
    await this.postRepository.softDelete(id);
    return {
      result: 'success',
    };
  }
}
