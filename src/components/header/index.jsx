import React from 'react';

import colors from '../../constants/colors';

import { HeaderBody, HeaderTitle, HeaderMenu } from './header.styles';
import FlexRow from '../flex-row';

const Header = () => {
  const WIDTH = '570px';
  const MARGIN_LEFT = '-2.5em';

  return (
    <FlexRow>
      <HeaderBody>
        <HeaderTitle
          onClick={(e) => {
            e.preventDefault();
            window.open("/", "_self");
          }}
        >
          Stephen Hullender
        </HeaderTitle>
        <HeaderMenu style={{ width: WIDTH, maxWidth: WIDTH }}>
          <span onClick={(e) => {
            e.preventDefault();
            window.open('/about', '_self');
          }}>
            ABOUT
          </span>
          <span onClick={(e) => {
            e.preventDefault();
            window.open("/projects", "_self");
          }}>
            PROJECTS
          </span>
          <span onClick={(e) => {
              e.preventDefault();
              window.open('/portfolio', '_self');
          }}>
            PORTFOLIO
          </span>
          <span onClick={(e) => {
            e.preventDefault();
            window.open("/resume", "_self");
          }}>
            RESUME
          </span>
          <span onClick={(e) => {
              e.preventDefault();
              window.open("/timeline", "_self");
          }}>
            
            MY LIFE
          </span>
          <span onClick={(e) => {
            e.preventDefault();
            window.open("/contact", "_self")
          }}>
            CONTACT
          </span>
        </HeaderMenu>
      </HeaderBody>
      {
        <FlexRow>
          <svg height='88px' width='100px'>
            <polygon points="0,0 90,0 45,90 0,90" fill={colors.brightBlue}/>
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 997, marginLeft: MARGIN_LEFT
          }}>
            <polygon points="45,0 90,0 45,90 0,90" fill={colors.brightBlue} />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 996, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.9'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 995, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.8'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 994, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.7'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 993, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.6'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 992, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.5'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 991, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.4'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 990, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.3'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 989, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.2'
            />
          </svg>
          <svg height="88px" width="100px" style={{ 
            zIndex: 988, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.1'
            />
          </svg>
          {/* and one more... */}
          <svg height="88px" width="100px" style={{ 
            zIndex: 987, marginLeft: MARGIN_LEFT
          }}>
            <polygon 
              points="45,0 90,0 45,90 0,90" 
              fill={colors.brightBlue} 
              opacity='0.05'
            />
          </svg>
        </FlexRow>
      }
    </FlexRow>
  )
};

export default Header;