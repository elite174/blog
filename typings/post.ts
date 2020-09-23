export enum Folder {
    learning = 'learning',
    life = 'life'
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
