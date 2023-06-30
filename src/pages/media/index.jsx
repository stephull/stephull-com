import React from 'react';
import AlbumTimeline from '../../components/album-timeline';

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
            <AlbumTimeline />
        </>
    );
};  

export default MediaPage;