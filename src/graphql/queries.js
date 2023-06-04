/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const commentsByBlogtimelineitemID = /* GraphQL */ `
  query CommentsByBlogtimelineitemID(
    $blogtimelineitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByBlogtimelineitemID(
      blogtimelineitemID: $blogtimelineitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const commentsByMediatimelineitemID = /* GraphQL */ `
  query CommentsByMediatimelineitemID(
    $mediatimelineitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByMediatimelineitemID(
      mediatimelineitemID: $mediatimelineitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBlogTimelineItem = /* GraphQL */ `
  query GetBlogTimelineItem($id: ID!) {
    getBlogTimelineItem(id: $id) {
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
export const listBlogTimelineItems = /* GraphQL */ `
  query ListBlogTimelineItems(
    $filter: ModelBlogTimelineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogTimelineItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        stars
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogTimelineItemBlogsourceId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBlogTimelineItems = /* GraphQL */ `
  query SyncBlogTimelineItems(
    $filter: ModelBlogTimelineItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlogTimelineItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        stars
        updatedAt
        _version
        _deleted
        _lastChangedAt
        blogTimelineItemBlogsourceId
      }
      nextToken
      startedAt
    }
  }
`;
export const getMediaTimelineItem = /* GraphQL */ `
  query GetMediaTimelineItem($id: ID!) {
    getMediaTimelineItem(id: $id) {
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
export const listMediaTimelineItems = /* GraphQL */ `
  query ListMediaTimelineItems(
    $filter: ModelMediaTimelineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMediaTimelineItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        createdAt
        stars
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
export const syncMediaTimelineItems = /* GraphQL */ `
  query SyncMediaTimelineItems(
    $filter: ModelMediaTimelineItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMediaTimelineItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        createdAt
        stars
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
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
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
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncContents = /* GraphQL */ `
  query SyncContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncContents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const contentsByMediatimelineitemID = /* GraphQL */ `
  query ContentsByMediatimelineitemID(
    $mediatimelineitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentsByMediatimelineitemID(
      mediatimelineitemID: $mediatimelineitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const contentsByBlogtimelineitemID = /* GraphQL */ `
  query ContentsByBlogtimelineitemID(
    $blogtimelineitemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contentsByBlogtimelineitemID(
      blogtimelineitemID: $blogtimelineitemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
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
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        title
        paragraphs
        externallinks
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
