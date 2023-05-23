import React, { useState, useEffect } from 'react';
import { COLOR_DESCS } from '../../constants/colorDesc';
import PhotoGenerate from '../photogenerate';
import FlexRow from "../flex-row";
import FlexColumn from "../flex-column";

const ColorScheme = () => {
  const [clickColor, setClickColor] = useState(false);
  const [currColor, setCurrColor] = useState('');
  const [currColorName, setCurrColorName] = useState('');

  // each block shows color, name, and hex
  const ColorSample = ({element}) => {
    const { name, hex, fgColor } = element;

    return (
      <div 
        style={{
          width: '128px',
          height: '72px',
          backgroundColor: hex,
          padding: '0.25em 0.5em',
          margin: '0.125em'
        }}
        onClick={() => {
          if (clickColor) {
            setCurrColor('');
            setCurrColor('');
          }
          setClickColor(true);
          setCurrColor(hex);
          setCurrColorName(name);
        }}
      >
        <span style={{ 
          color: fgColor,
          fontWeight: 'bold',
          opacity: '1.0'
        }}>
          {name}
        </span>
        <br />
        <small style={{ color: fgColor }}>
          {hex}
        </small>
      </div>
    )
  };

  const sliceArr = COLOR_DESCS.length / 2;
  const color1 = COLOR_DESCS.slice(0, sliceArr),
    color2 = COLOR_DESCS.slice(sliceArr);

  return (
    <FlexRow>
      <FlexColumn>
        {
          color1.map((e, i) => <ColorSample key={i} element={e} />)
        }
      </FlexColumn>
      <FlexColumn>
        {
          color2.map((e, i) => <ColorSample key={i} element={e} />)
        }
      </FlexColumn>
      {
        clickColor &&
        <PhotoGenerate query={currColorName} color={currColor} />
      }
    </FlexRow>
  )
};

export default ColorScheme;