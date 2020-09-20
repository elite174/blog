import React from 'react';
import { NextPage } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';
import { v4 as uuid } from 'uuid';

import Page from '../components/common/Page';

import { getFileList } from '../utils';
import Header from '../components/common/Header';
import { css } from 'emotion';

interface Props {
    blogs: string[];
}

const layoutStyles = css`
    display: flex;

    height: 100%;
`;

const Home: NextPage<Props> = () => {
    return (
        <Page>
            <div className={layoutStyles}>
                <Header />
            </div>
        </Page>
    );
};

export async function getStaticProps() {
    const files = await getFileList();

    const posts = files
        .filter((fileName: string) => fileName.endsWith('.md'))
        .map((fileName: string) => {
            const rawContent = fs.readFileSync(fileName, {
                encoding: 'utf-8'
            });
            const { data }: GrayMatterFile<string> = matter(rawContent);

            return { ...data, id: uuid() };
        });

    return {
        props: { blogs: posts }
    };
}

export default Home;
