/*
Dependency Inversion - Your classes and module should depend on abstractions instead of concrete implementations. Abstractions = Interfaces (Typescript). e.g - PC mouse port has abstraction of USB port to support various mouse type.
*/

import { JsonExportService } from '../other/loose-coupling/json-export-service';
import { MockPostsService } from './mock-posts-service';
// import { NewsFeed } from './news-feed';
// import { PostsService } from './posts-service';

// We can pass different implementation with same interface
// let newsFeed1 = new NewsFeed(new PostsService());
// newsFeed1.show();

// let newsFeed2 = new NewsFeed(new MockPostsService());
// newsFeed2.show();

let mockService = new MockPostsService();
mockService.export(new JsonExportService()).then((result) => console.log(result));
