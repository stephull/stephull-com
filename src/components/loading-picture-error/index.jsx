import React from 'react';

import colors from '../../constants/colors';
import { s3TestPic } from '../../envConfig';

const LoadingPictureError = () => {
    return (
        <>
            <div style={{
                zIndex: 2,
                position: 'absolute'
            }}>
                <p style={{
                    maxWidth: '90px',
                    maxHeight: '90px',
                    marginLeft: '1em',
                    color: colors.goldenYellow,
                    fontStyle: 'italic'
                }}>
                    Photo unavailable
                </p>
            </div>
            <div style={{
                zIndex: 1,
                border: `1px solid ${colors.jetBlack}`,
                height: 'fit-content'
            }}>
                <img
                    style={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        height: '100px',
                        width: '100px',
                        opacity: 0.25
                    }}
                    draggable={false}
                    src={s3TestPic}
                    alt=""
                />
            </div>
        </>
    )
};

export default LoadingPictureError;