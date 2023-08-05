import React from 'react';

import FlexRow from '../../components/flex-row';

const GradientBackdrop = ({
    margin, opacity, color, height, 
    startPoints, middlePoints, endPoints, 
    width, stripes
}) => {

    const startStripe = (
        <svg height={height} width={width} style={{ marginLeft: margin }}>
            <polygon 
                points={startPoints} 
                fill={color} 
                opacity={opacity}
            />
        </svg>
    ), endStripe = (
        <svg height={height} width={width} style={{ marginLeft: margin }}>
            <polygon 
                points={endPoints} 
                fill={color} 
                opacity={opacity}
            />
        </svg>
    );

    const iterateByStripeCount = () => {
        const temp = [];
        for (let i = 0; i < stripes; i++) {
            temp.push(
                <svg key={i} height={height} width={width} style={{ marginLeft: margin }}>
                    <polygon 
                        points={middlePoints} 
                        fill={color} 
                        opacity={opacity}
                    />
                </svg>
            );
        }
        return temp;
    }
    const insides = iterateByStripeCount();

    return (
        <FlexRow>
            { startStripe }
            { insides.map((e) => e) }
            { endStripe }
        </FlexRow>
    );
};

export default GradientBackdrop;