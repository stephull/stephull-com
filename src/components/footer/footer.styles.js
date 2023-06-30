import styled from 'styled-components';
import colors from '../../constants/colors';

export const FooterBody = styled.div`
    background-color: ${colors.brightBlue};
    
    width: 100%;
    height: 22.5px;
    padding: 0.25em;
    paddingLeft: 1em;
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    z-index: 998;
`;

export const FooterContentTitle = styled.div`
    color: ${colors.snowWhite};

    padding: 0.0625em 0;
    padding-left: 0.85em;
    font-weight: bold; 

    z-index: 999;
`;