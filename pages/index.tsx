import React from 'react';
import { NextPage } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';
import { v4 as uuid } from 'uuid';
import { css } from 'emotion';

import Page from '../components/common/Page';

import Header from '../components/common/Header';
import { PostLayout } from '../layouts/PostLayout';

import { getFileList } from '../utils/fileSystem';

import { PostData, PostMeta } from '../typings';
import { Post } from '../components/main/Post';

interface Props {
    posts: PostData[];
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

const Home: NextPage<Props> = (props) => {
    return (
        <Page>
            <div className={layoutStyles}>
                <Header className={headerStyles} />
                <PostLayout className={postLayoutStyles}>
                    {props.posts?.map(({ date, slug, folder, title }) => (
                        <Post key={slug} meta={{ title, folder, date, slug }} />
                    ))}
                </PostLayout>
            </div>
        </Page>
    );
};

export async function getStaticProps() {
    const files = await getFileList();

    const posts: PostData[] = files
        .filter((fileName: string) => fileName.endsWith('.md'))
        .map((fileName: string) => {
            const rawContent = fs.readFileSync(fileName, {
                encoding: 'utf-8'
            });
            const { data, content }: GrayMatterFile<string> = matter(rawContent);

            return { ...(data as PostMeta), content, id: uuid() };
        });

    return {
        props: { posts }
    };
}

export default Home;
