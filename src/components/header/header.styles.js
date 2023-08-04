import styled from 'styled-components';
import colors from '../../constants/colors';

export const HeaderBody = styled.div`
    background-color: ${colors.brightBlue};
    padding: 0.25em;
    paddingLeft: 1em;
    width: 600px;
    height: 80px;
    position: relative;
    top: 0;
`;

export const HeaderTitle = styled.div`
    color: ${colors.snowWhite};
    padding-left: 1em;
    padding-top: 0.5em;
    font-weight: bold;
    font-size: 32px;
    width: fit-content;
`;

export const HeaderMenu = styled.div`
    padding: 0.25em 0;
    padding-left: 2em;
    font-size: 16.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${(props) => props.style.width};
    max-width: ${(props) => props.style.maxWidth};

    span {
        color: ${colors.snowWhite};

        &:hover {
            color: ${colors.skyBlue};
            cursor: pointer;
            text-decoration: underline;
            transition-duration: 0.25s;
        }
    }
`;