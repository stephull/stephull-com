import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum MediaType {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE"
}



type EagerMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: MediaType | keyof typeof MediaType;
  readonly desc?: string | null;
  readonly comments?: (Comment | null)[] | null;
  readonly likes: number;
  readonly albumID: string;
  readonly blogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: MediaType | keyof typeof MediaType;
  readonly desc?: string | null;
  readonly comments: AsyncCollection<Comment>;
  readonly likes: number;
  readonly albumID: string;
  readonly blogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media>) => MutableModel<Media> | void): Media;
}

type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly paragraphs: string[];
  readonly media?: (Media | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly likes: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly paragraphs: string[];
  readonly media: AsyncCollection<Media>;
  readonly comments: AsyncCollection<Comment>;
  readonly likes: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerAlbum = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Album, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly desc?: string | null;
  readonly comments?: (Comment | null)[] | null;
  readonly media?: (Media | null)[] | null;
  readonly likes: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAlbum = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Album, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly desc?: string | null;
  readonly comments: AsyncCollection<Comment>;
  readonly media: AsyncCollection<Media>;
  readonly likes: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Album = LazyLoading extends LazyLoadingDisabled ? EagerAlbum : LazyAlbum

export declare const Album: (new (init: ModelInit<Album>) => Album) & {
  copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly albumID: string;
  readonly mediaID: string;
  readonly blogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly albumID: string;
  readonly mediaID: string;
  readonly blogID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}