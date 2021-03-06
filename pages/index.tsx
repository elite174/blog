import React from 'react';
import { NextPage } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';
import { v4 as uuid } from 'uuid';
import { css } from 'emotion';

import Page from '../components/common/Page';

import Header from '../components/main/Header';
import { MainLayout } from '../layouts/MainLayout';

import { getFileList } from '../utils/fileSystem';

import { PostData, PostMeta } from '../typings';
import { Post } from '../components/main/Post';

interface Props {
    readonly posts: PostData[];
    readonly topics: string[];
}

const headerStyles = css`
    flex-shrink: 0;
`;

const layoutStyles = css`
    display: flex;

    height: 100%;
`;

const postLayoutStyles = css`
    height: 100%;
    width: 100%;
`;

const Home: NextPage<Props> = ({ posts, topics }) => {
    return (
        <Page>
            <div className={layoutStyles}>
                <Header className={headerStyles} topics={topics} />
                <MainLayout className={postLayoutStyles}>
                    {posts.map(({ date, slug, folder, title }) => (
                        <Post key={slug} meta={{ title, folder, date, slug }} />
                    ))}
                </MainLayout>
            </div>
        </Page>
    );
};

export async function getStaticProps() {
    const files = await getFileList();

    const topicSet = new Set<string>();

    const posts: PostData[] = files
        .filter((fileName: string) => fileName.endsWith('.md'))
        .map((fileName: string) => {
            const rawContent = fs.readFileSync(fileName, {
                encoding: 'utf-8'
            });
            const { data, content }: GrayMatterFile<string> = matter(rawContent);

            topicSet.add((data as PostMeta).folder);

            return { ...(data as PostMeta), content, id: uuid() };
        });

    return {
        props: { posts, topics: Array.from(topicSet) }
    };
}

export default Home;
