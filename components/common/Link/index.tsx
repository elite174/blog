import React, { FC } from 'react';
import { css, cx } from 'emotion';

import { ClassNameProps } from '../../../typings';
import { typography } from '../../../variables';

interface Props extends ClassNameProps {
    readonly href?: string;
}

const linkStyles = css`
    position: relative;

    display: flex;
    align-items: center;

    cursor: pointer;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: color 0.3s ease-out;

    ${typography.style.mono}
    font-weight: 300;

    &:after {
        content: '';

        display: block;
        height: 2px;
        width: 100%;

        position: absolute;
        bottom: -4px;

        background-color: black;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.2s ease-out, background-color 0.2s ease-out;
    }

    &:active {
        color: #cf1919;

        &:after {
            background-color: #cf1919;
        }
    }

    &:hover&:after {
        transform: scaleX(1);
    }
`;

export const Link: FC<Props> = ({ href, className = '', children }) => {
    return (
        <a href={href} className={cx(linkStyles, className)}>
            {children}
        </a>
    );
};
