import React, { useState } from 'react';

const Blog = ({ key, text, content = null }) => {
    // key will be used later for comments :-)

    const [enableFullModal, setEnableFullModal] = useState(false);
    const [viewBlog, setViewBlog] = useState(true);

    // What you see on the page
    const BlogPreview = ({ text }) => {
        return (
            <>
            </>
        )
    }

    // and what you'll see when clicking on a blog post
    const BlogModal = ({ text, content }) => {
        return (
            <>
            </>
        )
    }

    return (
        <>
            {
                viewBlog && <BlogPreview />
            }
        </>
    )
}

export default Blog;