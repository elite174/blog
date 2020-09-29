import React, { FC } from 'react';

import { Header } from '../Header';
import { Markdown } from '../Markdown';

interface Props {
    readonly content: string;
}

export const Content: FC<Props> = ({ content }) => {
    return (
        <>
            <Header />
            <Markdown content={content} />
        </>
    );
};
