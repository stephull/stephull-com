import React from 'react';
import FlexRow from '../flex-row';
import FlexColumn from '../flex-column';
import PageText from '../page-text';
import colors from '../../constants/colors';

const Construction = ({tidbits}) => {
    return (
        <FlexRow edits={{ 
            backgroundColor: colors.goldenYellow,
            padding: '1em'
        }}>
            <PageText bold edits={{ 
                fontSize: '64px',
                padding: '0 0.5em',
                marginTop: '-0.125em'
            }}>
                {"!"}
            </PageText>
            <FlexColumn>
                <PageText bold>
                    This page is undergoing some work...
                </PageText>
                <ul>
                {
                    tidbits.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })
                }
                </ul>
            </FlexColumn>
        </FlexRow>
    )
};

export default Construction;