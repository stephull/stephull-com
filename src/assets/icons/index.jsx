import React from 'react';
import {
    ViewIcon,
    ViewOffIcon,
    StarIcon,
    TimeIcon,
    EmailIcon,
    SunIcon,
    MoonIcon,
    ExternalLinkIcon,
    InfoIcon,
    AttachmentIcon
} from "@chakra-ui/icons";

// ::: POSTS (ALL) :::
// ViewIcon for seeing post (default)
// ViewOffIcon for not seeing post

// ::: FEED :::
// StarIcon for likes, feedback
// TimeIcon for date/time posted

// ::: CONTACT :::
// EmailIcon for email

// ::: NIGHT MODE ? :::
// SunIcon for light mode (default)
// MoonIcon for dark mode

// ::: OTHER :::
// ExternalLinkIcon for external links
// InfoIcon for information 
// AttachmentIcon for downloading resume

const icons = {
    view: <ViewIcon />,
    noView: <ViewOffIcon />,
    star: <StarIcon />,
    time: <TimeIcon />,
    email: <EmailIcon />,
    external: <ExternalLinkIcon />,
    info: <InfoIcon />,
    attachment: <AttachmentIcon />,
    uiDarkMode: <MoonIcon />,
    uiLightMode: <SunIcon />
};

export default icons;