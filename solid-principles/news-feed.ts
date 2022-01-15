import { IPostsService } from './iposts-service';
import { Post } from './post';

export class NewsFeed {
	// Dependency Inversion
	constructor(private _service: IPostsService) {}

	show() {
		this._service.getAll().then((posts: Post[]) => {
			posts.forEach((post) => {
				console.log(`${post.title} - ${post.body}`);
			});
		});
	}
}
