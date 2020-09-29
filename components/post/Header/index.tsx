import { css } from 'emotion';
import React from 'react';
import NextLink from 'next/link';

import { Link } from '../../common/Link';
import { Icon } from '../../common/Icon';

const headerStyles = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    padding: 0 60px;

    box-sizing: border-box;
`;

const iconStyles = css`
    margin-right: 12px;

    font-size: 20px;
`;

export const Header = () => {
    return (
        <header className={headerStyles}>
            <NextLink href="/" passHref>
                <Link>
                    <Icon name="chevron-back-outline" className={iconStyles} />
                    Назад
                </Link>
            </NextLink>
        </header>
    );
};
