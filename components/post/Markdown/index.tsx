import { css } from 'emotion';
import React, { FC } from 'react';
import { default as MarkdownToJSX } from 'markdown-to-jsx';

import { typography } from '../../../variables';

import {
    StyledH1,
    StyledLi,
    StyledP,
    StyledH2,
    StyledH3,
    StyledH4,
    commonStyles,
    StyledCode,
    StyledPre,
    StyledStrong,
    StyledOl,
    StyledBlockquote
} from './MarkdownElements';

interface Props {
    readonly content: string;
}

const markdownContainerStyles = css`
    ${typography.style.mono}
    font-weight: 300;

    max-width: 600px;
    margin: auto;
    padding: 60px 0;

    ${commonStyles}
`;

export const Markdown: FC<Props> = ({ content }) => {
    return (
        <div className={markdownContainerStyles}>
            <MarkdownToJSX
                options={{
                    overrides: {
                        p: StyledP,
                        li: StyledLi,
                        h1: StyledH1,
                        h2: StyledH2,
                        h3: StyledH3,
                        h4: StyledH4,
                        pre: StyledPre,
                        code: StyledCode,
                        strong: StyledStrong,
                        ol: StyledOl,
                        blockquote: StyledBlockquote
                    }
                }}
            >
                {content}
            </MarkdownToJSX>
        </div>
    );
};
