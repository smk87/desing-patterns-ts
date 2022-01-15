import { Post } from '../../solid-principles/post';
import { IExportPostsService } from './iexport-posts-service';

export class JsonExportService implements IExportPostsService {
	export(posts: Post[]): string {
		return JSON.stringify(posts);
	}
}
