import fs, { Dirent, promises } from 'fs';
import { resolve } from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { v4 as uuid } from 'uuid';

import { Folder, PostMeta } from '../typings';

const { readdir } = promises;

export const getFileList = async () => {
    const folders: Folder[] = [Folder.browser];
    let files: string[] = [];

    const getFiles = async (dir: string) => {
        const dirents: Dirent[] = await readdir(dir, { withFileTypes: true });

        return dirents.filter((d) => d.isFile()).map((d) => resolve(dir, d.name));
    };

    for (const f of folders) {
        files = files.concat(await getFiles(`${process.cwd()}/posts/${f}`));
    }

    return files;
};

export const getFilesData = async (files: string[]) => {
    const posts = files
        .filter((fileName: string) => fileName.endsWith('.md'))
        .map((fileName: string) => {
            const rawContent = fs.readFileSync(fileName, {
                encoding: 'utf-8'
            });
            const { data, content }: GrayMatterFile<string> = matter(rawContent);

            return { ...(data as PostMeta), content, id: uuid() };
        });

    return posts;
};
