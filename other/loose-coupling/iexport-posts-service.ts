import { Post } from '../../solid-principles/post';

export interface IExportPostsService {
	export(post: Post[]): string;
}
