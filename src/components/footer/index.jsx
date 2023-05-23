import React from 'react';
import { FooterBody, FooterContentTitle } from './footer.styles';
import Hyperlink from '../hyperlink';
import { CONTACT_INFO } from '../../constants/contact';
import FlexRow from '../flex-row';

const Footer = () => {
  return (
    <FooterBody>
      <FooterContentTitle>
        Made by Stephen Hullender
      </FooterContentTitle>
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