import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ContentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment: string;
  readonly stars?: number | null;
  readonly poster?: string | null;
  readonly blogtimelineitemID?: string | null;
  readonly mediatimelineitemID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment: string;
  readonly stars?: number | null;
  readonly poster?: string | null;
  readonly blogtimelineitemID?: string | null;
  readonly mediatimelineitemID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerBlogTimelineItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogTimelineItem, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly stars?: number | null;
  readonly blogcomments?: (Comment | null)[] | null;
  readonly blogcontents?: (Content | null)[] | null;
  readonly blogsource?: Blog | null;
  readonly updatedAt?: string | null;
  readonly blogTimelineItemBlogsourceId?: string | null;
}

type LazyBlogTimelineItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BlogTimelineItem, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly stars?: number | null;
  readonly blogcomments: AsyncCollection<Comment>;
  readonly blogcontents: AsyncCollection<Content>;
  readonly blogsource: AsyncItem<Blog | undefined>;
  readonly updatedAt?: string | null;
  readonly blogTimelineItemBlogsourceId?: string | null;
}

export declare type BlogTimelineItem = LazyLoading extends LazyLoadingDisabled ? EagerBlogTimelineItem : LazyBlogTimelineItem

export declare const BlogTimelineItem: (new (init: ModelInit<BlogTimelineItem>) => BlogTimelineItem) & {
  copyOf(source: BlogTimelineItem, mutator: (draft: MutableModel<BlogTimelineItem>) => MutableModel<BlogTimelineItem> | void): BlogTimelineItem;
}

type EagerMediaTimelineItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MediaTimelineItem, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly stars?: number | null;
  readonly mediacomments?: (Comment | null)[] | null;
  readonly mediacontents?: (Content | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyMediaTimelineItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MediaTimelineItem, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt: string;
  readonly stars?: number | null;
  readonly mediacomments: AsyncCollection<Comment>;
  readonly mediacontents: AsyncCollection<Content>;
  readonly updatedAt?: string | null;
}

export declare type MediaTimelineItem = LazyLoading extends LazyLoadingDisabled ? EagerMediaTimelineItem : LazyMediaTimelineItem

export declare const MediaTimelineItem: (new (init: ModelInit<MediaTimelineItem>) => MediaTimelineItem) & {
  copyOf(source: MediaTimelineItem, mutator: (draft: MutableModel<MediaTimelineItem>) => MutableModel<MediaTimelineItem> | void): MediaTimelineItem;
}

type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: ContentType | keyof typeof ContentType;
  readonly source: string;
  readonly title?: string | null;
  readonly mediatimelineitemID?: string | null;
  readonly blogtimelineitemID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: ContentType | keyof typeof ContentType;
  readonly source: string;
  readonly title?: string | null;
  readonly mediatimelineitemID?: string | null;
  readonly blogtimelineitemID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Content = LazyLoading extends LazyLoadingDisabled ? EagerContent : LazyContent

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(source: Content, mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void): Content;
}

type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly paragraphs?: string[] | null;
  readonly externallinks?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly paragraphs?: string[] | null;
  readonly externallinks?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerContactFormResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactFormResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly success: boolean;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactFormResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactFormResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly success: boolean;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactFormResult = LazyLoading extends LazyLoadingDisabled ? EagerContactFormResult : LazyContactFormResult

export declare const ContactFormResult: (new (init: ModelInit<ContactFormResult>) => ContactFormResult) & {
  copyOf(source: ContactFormResult, mutator: (draft: MutableModel<ContactFormResult>) => MutableModel<ContactFormResult> | void): ContactFormResult;
}