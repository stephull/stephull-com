import React from 'react';
import { HeaderBody, HeaderTitle, HeaderMenu } from './header.styles';

const Header = () => {
    const WIDTH = '435px';//'495px';
    return (
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
                {
                    /* ::: Take out for now :::
                    <span onClick={(e) => {
                        e.preventDefault();
                        window.open('/portfolio', '_self');
                    }}>
                        Portfolio
                    </span>*/
                }
                <span onClick={(e) => {
                    e.preventDefault();
                    window.open("/projects", "_self");
                }}>
                    PROJECTS
                </span>
                {
                    // Take out for now, leave links open for editing
                   /* <span onClick={(e) => {
                        e.preventDefault();
                        window.open("/blogs", "_self");
                    }}>
                        Blogs
                    </span>*/
                    
                }
                {/*<span onClick={(e) => {
                    e.preventDefault();
                    window.open("/media", "_self");
                }}>
                    MEDIA
                </span>*/}
                <span onClick={(e) => {
                    e.preventDefault();
                    window.open("/resume", "_self");
                }}>
                    RESUME
                </span>
                <span onClick={(e) => {
                    e.preventDefault();
                    window.open("/contact", "_self")
                }}>
                    CONTACT
                </span>
            </HeaderMenu>
        </HeaderBody>
    )
};

export default Header;