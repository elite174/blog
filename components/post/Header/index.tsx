import { css } from 'emotion';
import React from 'react';
import NextLink from 'next/link';

const headerStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    padding: 0 60px;

    box-sizing: border-box;
`;

export const Header = () => {
    return (
        <header className={headerStyles}>
            <NextLink href="/" passHref>
                <a>Назад</a>
            </NextLink>
        </header>
    );
};
