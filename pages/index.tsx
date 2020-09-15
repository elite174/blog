import React from 'react';
import { NextPage } from 'next';
import { Dirent } from 'fs';
import { GrayMatterFile } from 'gray-matter';
import { Folder } from '../typings';
import { getFileList } from '../utils';

interface Props {
    blogs: string[];
}

const Home: NextPage<Props> = ({ blogs }) => {
    console.log(blogs);

    return <div>hi</div>;
};

export async function getStaticProps() {
    const fs = require('fs');
    const matter = require('gray-matter');
    const { v4: uuid } = require('uuid');

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
