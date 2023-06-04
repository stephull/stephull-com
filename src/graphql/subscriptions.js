/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateBlogTimelineItem = /* GraphQL */ `
  subscription OnCreateBlogTimelineItem(
    $filter: ModelSubscriptionBlogTimelineItemFilterInput
  ) {
    onCreateBlogTimelineItem(filter: $filter) {
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
export const onUpdateBlogTimelineItem = /* GraphQL */ `
  subscription OnUpdateBlogTimelineItem(
    $filter: ModelSubscriptionBlogTimelineItemFilterInput
  ) {
    onUpdateBlogTimelineItem(filter: $filter) {
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
export const onDeleteBlogTimelineItem = /* GraphQL */ `
  subscription OnDeleteBlogTimelineItem(
    $filter: ModelSubscriptionBlogTimelineItemFilterInput
  ) {
    onDeleteBlogTimelineItem(filter: $filter) {
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
export const onCreateMediaTimelineItem = /* GraphQL */ `
  subscription OnCreateMediaTimelineItem(
    $filter: ModelSubscriptionMediaTimelineItemFilterInput
  ) {
    onCreateMediaTimelineItem(filter: $filter) {
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
export const onUpdateMediaTimelineItem = /* GraphQL */ `
  subscription OnUpdateMediaTimelineItem(
    $filter: ModelSubscriptionMediaTimelineItemFilterInput
  ) {
    onUpdateMediaTimelineItem(filter: $filter) {
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
export const onDeleteMediaTimelineItem = /* GraphQL */ `
  subscription OnDeleteMediaTimelineItem(
    $filter: ModelSubscriptionMediaTimelineItemFilterInput
  ) {
    onDeleteMediaTimelineItem(filter: $filter) {
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
export const onCreateContent = /* GraphQL */ `
  subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
    onCreateContent(filter: $filter) {
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
export const onUpdateContent = /* GraphQL */ `
  subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
    onUpdateContent(filter: $filter) {
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
export const onDeleteContent = /* GraphQL */ `
  subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
    onDeleteContent(filter: $filter) {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
