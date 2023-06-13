import React from 'react';

import BlogTimeline from '../../components/blog-timeline';

import Construction from '../../components/under-construction';

const BlogsPage = () => {
    return (
        <>
            <h2>Blogs</h2>
            {
                // temporary
                <Construction tidbits={[
                    "Need to add blogs",
                    "Need to fix backend to display blog postings properly"
                ]} />
            }
            <BlogTimeline />
        </>
    );
};

export default BlogsPage;