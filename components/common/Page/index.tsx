import React, { FC } from 'react';
import { Global, css as cssGlobal } from '@emotion/core';
import { css, cx } from 'emotion';

import Head from 'next/head';

import { typography } from '../../../variables';

import { ClassNameProps } from '../../../typings';

const globalStyles = cssGlobal`
    * {
        font-family: inherit;
    }

    body {
        margin: 0;
        padding: 0;

        ${typography.style.serif}
    }
`;

const pageStyles = css`
    height: 100vh;
`;

const Page: FC<ClassNameProps> = ({ children, className = '' }) => (
    <div className={cx(pageStyles, className)}>
        <Head>
            <meta name="description" content="The blog of Vlad Lipatov" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="keywords" content="blog, Vladislav Lipatov, lifestyle, learning" />
            <title>The Blog of Vladislav Lipatov</title>
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Raleway:wght@300;400&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Global styles={globalStyles} />
        {children}
    </div>
);

export default Page;
