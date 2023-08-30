import React from 'react';

import DOMPurify from 'dompurify';
import { marked } from 'marked';

const MarkdownText = ({ source: text, edits = null }) => {
  return (
    <div
      style={edits}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          marked(text)
        )
      }}
    />
  )
};

export default MarkdownText;