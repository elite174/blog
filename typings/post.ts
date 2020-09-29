export enum Folder {
    browser = 'browser'
}

export interface PostMeta {
    readonly title: string;
    readonly slug: string;
    readonly folder: Folder;
    readonly date: string;
}

export interface PostData extends PostMeta {
    readonly content: string;
}
