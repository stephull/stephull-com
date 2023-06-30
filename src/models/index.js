// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MediaType = {
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE"
};

const { Media, Blog, Album, Comment } = initSchema(schema);

export {
  Media,
  Blog,
  Album,
  Comment,
  MediaType
};