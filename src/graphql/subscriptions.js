/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onCreateAlbum(filter: $filter) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onUpdateAlbum(filter: $filter) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
    onDeleteAlbum(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
