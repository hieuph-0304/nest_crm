import { CreatePostDto } from './dto/create-post-dto';
import { UpdatePostDto } from './dto/update-post-dto';

export abstract class IPostService<Entity> {
  abstract getListPosts(): Promise<Entity[]>;
  abstract createPost(data: CreatePostDto): Promise<unknown>;
  abstract findPostById(id: string): Promise<Entity[]>;
  abstract updatePostById(id: string, data: UpdatePostDto): Promise<unknown>;
  abstract deletePostById(id: string): Promise<unknown>;
}
