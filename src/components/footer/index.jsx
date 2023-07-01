import React from 'react';

import { FooterBody, FooterContentTitle } from './footer.styles';

import { CONTACT_INFO } from '../../constants/contact';

import Hyperlink from '../hyperlink';
import FlexRow from '../flex-row';
import GradientBackdrop from '../gradient-backdrop';
import colors from '../../constants/colors';

const Footer = () => {
  return (
    <FooterBody>
      <FooterContentTitle>
        Made by Stephen Hullender
      </FooterContentTitle>
      <div style={{ 
        marginLeft: '-6.25em',
        marginTop: '-0.25em' 
      }}>
        <GradientBackdrop 
          margin='-1.25em'
          opacity='1'
          color={colors.snowWhite}
          height='fit-content'
          width='40px'
          startPoints=""
          middlePoints="15,0 25,0 10,30 0,30"
          endPoints=""
          stripes={3}
        />
      </div>
      <FlexRow>
        {
          CONTACT_INFO.map((element, index) => {
            const { name, url } = element;
            return (
              <Hyperlink
                key={index}
                url={url}
              >
                {name}
              </Hyperlink>
            )
          })
        }
      </FlexRow>
    </FooterBody>
  )
};

export default Footer;