import { IExportPostsService } from '../other/loose-coupling/iexport-posts-service';
import { IPostsService } from './iposts-service';
import { Post } from './post';

// New implementation with same interface

export class MockPostsService implements IPostsService {
	posts: Post[] = [];
	constructor() {
		this.posts = [
			{ id: 1, title: 'Test Post 1', body: 'Test Post 1', postedBy: 'Me' },
			{ id: 2, title: 'Test Post 2', body: 'Test Post 2', postedBy: 'Me' },
			{ id: 3, title: 'Test Post 3', body: 'Test Post 3', postedBy: 'Me' },
			{ id: 4, title: 'Test Post 4', body: 'Test Post 4', postedBy: 'Me' },
		];
	}

	getAll(): Promise<Post[]> {
		return Promise.resolve(this.posts);
	}
	save(post: Post): Promise<void> {
		this.posts.push(post);
		return Promise.resolve();
	}
	export(service: IExportPostsService): Promise<string> {
		return this.getAll().then((posts) => service.export(posts));
	}
}
