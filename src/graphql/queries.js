/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
      id
      type
      desc
      comments {
        items {
          id
          body
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          mediaCommentsId
          blogCommentsId
          albumCommentsId
        }
        nextToken
        startedAt
      }
      album {
        id
        desc
        comments {
          nextToken
          startedAt
        }
        media {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      blog {
        id
        paragraphs
        media {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogMediaId
      albumMediaId
    }
  }
`;
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        desc
        comments {
          nextToken
          startedAt
        }
        album {
          id
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        blog {
          id
          paragraphs
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogMediaId
        albumMediaId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMedia = /* GraphQL */ `
  query SyncMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedia(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        desc
        comments {
          nextToken
          startedAt
        }
        album {
          id
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        blog {
          id
          paragraphs
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogMediaId
        albumMediaId
      }
      nextToken
      startedAt
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      paragraphs
      media {
        items {
          id
          type
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogMediaId
          albumMediaId
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          body
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          mediaCommentsId
          blogCommentsId
          albumCommentsId
        }
        nextToken
        startedAt
      }
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paragraphs
        media {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogs = /* GraphQL */ `
  query SyncBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        paragraphs
        media {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      desc
      comments {
        items {
          id
          body
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          mediaCommentsId
          blogCommentsId
          albumCommentsId
        }
        nextToken
        startedAt
      }
      media {
        items {
          id
          type
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogMediaId
          albumMediaId
        }
        nextToken
        startedAt
      }
      likes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        desc
        comments {
          nextToken
          startedAt
        }
        media {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAlbums = /* GraphQL */ `
  query SyncAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAlbums(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        desc
        comments {
          nextToken
          startedAt
        }
        media {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      body
      media {
        id
        type
        desc
        comments {
          nextToken
          startedAt
        }
        album {
          id
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        blog {
          id
          paragraphs
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogMediaId
        albumMediaId
      }
      album {
        id
        desc
        comments {
          nextToken
          startedAt
        }
        media {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      blog {
        id
        paragraphs
        media {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        likes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      mediaCommentsId
      blogCommentsId
      albumCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        body
        media {
          id
          type
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogMediaId
          albumMediaId
        }
        album {
          id
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        blog {
          id
          paragraphs
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mediaCommentsId
        blogCommentsId
        albumCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        body
        media {
          id
          type
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          blogMediaId
          albumMediaId
        }
        album {
          id
          desc
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        blog {
          id
          paragraphs
          likes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        mediaCommentsId
        blogCommentsId
        albumCommentsId
      }
      nextToken
      startedAt
    }
  }
`;
