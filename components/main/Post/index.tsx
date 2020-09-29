import React, { FC } from 'react';
import { cx, css } from 'emotion';
import NextLink from 'next/link';

import { typography } from '../../../variables';

import { ClassNameProps, PostMeta } from '../../../typings';
import { getPostUrl } from '../../../utils';

interface Props extends ClassNameProps {
    readonly meta: PostMeta;
}

const containerStyles = css`
    position: relative;

    ${typography.style.mono}

    overflow: hidden;
    padding: 0 10px;

    border: 1px solid #ebebeb;
    cursor: pointer;
    transition: border-color 0.3s ease-out;
    text-decoration: none;
    color: black;

    &:hover {
        border-color: #bbb;
    }
`;

const titleStyles = css`
    ${typography.m}
    font-weight: 300;

    margin-bottom: 30px;

    text-transform: capitalize;
    letter-spacing: 2px;
`;

const topicStyles = css`
    ${typography.text16}
    font-weight: 300;

    position: absolute;
    bottom: 10px;
    left: 10px;

    color: #999;
`;

export const Post: FC<Props> = ({ meta: { title, slug, folder }, className = '' }) => {
    return (
        <NextLink href={getPostUrl(folder, slug)}>
            <a className={cx(containerStyles, className)}>
                <div className={titleStyles}>{title}</div>
                <div className={topicStyles}>{folder}</div>
            </a>
        </NextLink>
    );
};
