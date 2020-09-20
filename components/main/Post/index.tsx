import React, { FC } from 'react';
import { ClassNameProps } from '../../../typings';
import { cx, css } from 'emotion';
import { typography } from '../../../variables';

interface Props extends ClassNameProps {
    readonly title: string;
    readonly text: string;
}

const containerStyles = css`
    padding: 10px;

    ${typography.style.serif}
`;

const titleStyles = css`
    ${typography.l}

    margin-bottom: 30px;

    text-transform: capitalize;
`;

const textStyles = css`
    ${typography.text20}

    color: #808080;
`;

export const Post: FC<Props> = ({ title, text, className = '' }) => {
    return (
        <div className={cx(containerStyles, className)}>
            <div className={titleStyles}>{title}</div>
            <div className={textStyles}>{text}</div>
        </div>
    );
};
