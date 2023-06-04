/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      stars
      poster
      blogtimelineitemID
      mediatimelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      comment
      stars
      poster
      blogtimelineitemID
      mediatimelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      comment
      stars
      poster
      blogtimelineitemID
      mediatimelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBlogTimelineItem = /* GraphQL */ `
  mutation CreateBlogTimelineItem(
    $input: CreateBlogTimelineItemInput!
    $condition: ModelBlogTimelineItemConditionInput
  ) {
    createBlogTimelineItem(input: $input, condition: $condition) {
      id
      createdAt
      stars
      blogcomments {
        nextToken
        startedAt
      }
      blogcontents {
        nextToken
        startedAt
      }
      blogsource {
        id
        title
        paragraphs
        externallinks
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogTimelineItemBlogsourceId
    }
  }
`;
export const updateBlogTimelineItem = /* GraphQL */ `
  mutation UpdateBlogTimelineItem(
    $input: UpdateBlogTimelineItemInput!
    $condition: ModelBlogTimelineItemConditionInput
  ) {
    updateBlogTimelineItem(input: $input, condition: $condition) {
      id
      createdAt
      stars
      blogcomments {
        nextToken
        startedAt
      }
      blogcontents {
        nextToken
        startedAt
      }
      blogsource {
        id
        title
        paragraphs
        externallinks
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogTimelineItemBlogsourceId
    }
  }
`;
export const deleteBlogTimelineItem = /* GraphQL */ `
  mutation DeleteBlogTimelineItem(
    $input: DeleteBlogTimelineItemInput!
    $condition: ModelBlogTimelineItemConditionInput
  ) {
    deleteBlogTimelineItem(input: $input, condition: $condition) {
      id
      createdAt
      stars
      blogcomments {
        nextToken
        startedAt
      }
      blogcontents {
        nextToken
        startedAt
      }
      blogsource {
        id
        title
        paragraphs
        externallinks
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blogTimelineItemBlogsourceId
    }
  }
`;
export const createMediaTimelineItem = /* GraphQL */ `
  mutation CreateMediaTimelineItem(
    $input: CreateMediaTimelineItemInput!
    $condition: ModelMediaTimelineItemConditionInput
  ) {
    createMediaTimelineItem(input: $input, condition: $condition) {
      id
      description
      createdAt
      stars
      mediacomments {
        nextToken
        startedAt
      }
      mediacontents {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMediaTimelineItem = /* GraphQL */ `
  mutation UpdateMediaTimelineItem(
    $input: UpdateMediaTimelineItemInput!
    $condition: ModelMediaTimelineItemConditionInput
  ) {
    updateMediaTimelineItem(input: $input, condition: $condition) {
      id
      description
      createdAt
      stars
      mediacomments {
        nextToken
        startedAt
      }
      mediacontents {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMediaTimelineItem = /* GraphQL */ `
  mutation DeleteMediaTimelineItem(
    $input: DeleteMediaTimelineItemInput!
    $condition: ModelMediaTimelineItemConditionInput
  ) {
    deleteMediaTimelineItem(input: $input, condition: $condition) {
      id
      description
      createdAt
      stars
      mediacomments {
        nextToken
        startedAt
      }
      mediacontents {
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
      id
      type
      source
      title
      mediatimelineitemID
      blogtimelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
      id
      type
      source
      title
      mediatimelineitemID
      blogtimelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
      id
      type
      source
      title
      mediatimelineitemID
      blogtimelineitemID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      title
      paragraphs
      externallinks
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
      title
      paragraphs
      externallinks
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
      title
      paragraphs
      externallinks
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
