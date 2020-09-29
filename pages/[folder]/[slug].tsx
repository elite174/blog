import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';

import { PostLayout } from '../../layouts/PostLayout';
import { Content } from '../../components/post/Content';

import { getFileList, getFilesData } from '../../utils/fileSystem';

import { PostMeta, PostData } from '../../typings';

interface Props {
    readonly post: PostData | null;
}

interface ContextParams {
    readonly folder: string;
    readonly slug: string;
    readonly [key: string]: string;
}

const PostPage: NextPage<Props> = ({ post }) => {
    if (!post) {
        return null;
    }

    const content = post.content;

    return (
        <PostLayout>
            <Content content={content} />
        </PostLayout>
    );
};

export const getStaticProps: GetStaticProps<Props, ContextParams> = async (context) => {
    if (!context.params) {
        return {
            props: {
                post: null
            }
        };
    }

    const { folder, slug } = context.params;
    const path = `${process.cwd()}/posts/${folder}/${slug}.md`;

    const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8'
    });

    const { data, content }: GrayMatterFile<string> = matter(rawContent);

    return {
        props: {
            post: {
                ...(data as PostMeta),
                content
            }
        }
    };
};

export const getStaticPaths = async () => {
    const files = await getFileList();
    const dataList = await getFilesData(files);

    return {
        paths: dataList.map(({ slug, folder }) => ({
            params: {
                slug,
                folder
            }
        })),
        fallback: false
    };
};

export default PostPage;
