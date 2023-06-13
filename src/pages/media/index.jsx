import React from 'react';
import MediaTimeline from '../../components/media-timeline';

import Construction from '../../components/under-construction';

const MediaPage = () => {
    return (
        <>
            <h2>Media</h2>
            {
                // temporary
                <Construction tidbits={[
                    "Need to fix backend to display media posts properly"
                ]} />
            }
            <MediaTimeline />
        </>
    );
};  

export default MediaPage;