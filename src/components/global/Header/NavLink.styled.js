import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`

    ::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 1.5px;
        background-color: #80B3FF;
        transition: width 0.35s;
        z-index: 5;
    }

    &.active {
        color: #80B3FF;

        :after {
            width: 100%;

        }

        :hover {
            color: #98E4FF;
        }

        :hover:after {
            background-color: #98E4FF;
        }
    }
`;