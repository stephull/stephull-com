import React from 'react';

import FlexColumn from '../../components/flex-column';

const HomePage = () => {
    return (
        <FlexColumn edits={{ justifyContent: 'space-between' }}>
            <h2>Welcome to my new website!</h2>
        </FlexColumn>
    );
};

export default HomePage;