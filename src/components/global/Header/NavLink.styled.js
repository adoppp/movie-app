import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 1.5px;
        background-color: #AF0404;
        transition: width 0.35s;
        z-index: 5;
    }

    &.active {
        color: #AF0404;
        transition-property: background-color, color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        :after {
            width: 100%;

        }

        :hover {
            color: #FF0000;
        }

        :hover:after {
            background-color: #FF0000;
        }
    }
`;