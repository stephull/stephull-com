import React, { useState, useEffect } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsmobile from '../../aws-exports';

const EditableMedia = () => {
    Amplify.configure(awsmobile);

    const API_NAME = awsmobile.aws_cloud_logic_custom[0].name;

    const [editingState, setEditingState] = useState(false);

    // more coming soon

    return (
        <>
        </>
    );
};

export default EditableMedia;