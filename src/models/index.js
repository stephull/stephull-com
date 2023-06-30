// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { Comment, BlogTimelineItem, MediaTimelineItem, Content, Blog, ContactFormResult } = initSchema(schema);

export {
  Comment,
  BlogTimelineItem,
  MediaTimelineItem,
  Content,
  Blog,
  ContactFormResult,
  ContentType
};