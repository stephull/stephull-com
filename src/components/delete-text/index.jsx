import React from 'react';

import { Amplify, API } from 'aws-amplify';
import awsmobile from '../../aws-exports';

const DeleteText = ({ function: funct }) => {
    Amplify.configure(awsmobile);
    const API_NAME = awsmobile.aws_cloud_logic_custom[0].name;

    return (
        <>
        </>
    )
}

export default DeleteText;