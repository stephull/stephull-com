import styled from 'styled-components';
import colors from '../../constants/colors';

export const FooterBody = styled.div`
    background-color: ${colors.brightBlue};
    width: 100%;
    padding: 0.25em;
    paddingLeft: 1em;
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const FooterContentTitle = styled.div`
    color: ${colors.snowWhite};
    padding: 0.0625em 0;
    padding-left: 0.85em;
`;