import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import matter, { GrayMatterFile } from 'gray-matter';
import fs from 'fs';

import { getFileList, getFilesData } from '../../../utils';

interface Props {
    blog: any;
}

const PostPage: NextPage<Props> = (props) => {
    console.log(props);

    return (
        <div>
            <h1>ww</h1>
        </div>
    );
};

export const getStaticProps: GetStaticProps<any, { folder: string; slug: string }> = async (
    context
) => {
    if (!context.params) {
        return { props: {} };
    }

    const { folder, slug } = context.params;
    console.log(context);

    const path = `${process.cwd()}/posts/${folder}/${slug}.md`;

    // read file content and store into rawContent variable
    const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8'
    });

    const { data, content }: GrayMatterFile<string> = matter(rawContent); // pass rawContent to gray-matter to get data and content

    return {
        props: {
            blog: {
                ...data,
                content
            }
        }
    };
};

// generate HTML paths at build time
export const getStaticPaths = async () => {
    const files = await getFileList();
    const data = await getFilesData(files);

    return {
        paths: data.map((d) => {
            return {
                params: {
                    slug: d.slug,
                    folder: d.folder
                }
            };
        }),
        fallback: false
    };
};

export default PostPage;
