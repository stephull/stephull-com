import React, { useState, useEffect } from 'react';

import { API } from 'aws-amplify';
import { API_NAME } from '../../config';
import { updateBlogPost, updatePicturePost } from '../../endpoints';

const EditableMedia = ({ function: funct }) => {
    const [editingState, setEditingState] = useState(false);

    // more coming soon

    return (
        <>
        </>
    );
};

export default EditableMedia;