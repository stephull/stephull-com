/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
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
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
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
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createAlbum = /* GraphQL */ `
  mutation CreateAlbum(
    $input: CreateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    createAlbum(input: $input, condition: $condition) {
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
export const updateAlbum = /* GraphQL */ `
  mutation UpdateAlbum(
    $input: UpdateAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    updateAlbum(input: $input, condition: $condition) {
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
export const deleteAlbum = /* GraphQL */ `
  mutation DeleteAlbum(
    $input: DeleteAlbumInput!
    $condition: ModelAlbumConditionInput
  ) {
    deleteAlbum(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
