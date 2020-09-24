import { css } from 'emotion';
import React, { FC } from 'react';

const layoutStyles = css`
    max-width: 600px;
    margin: auto;
`;

export const PostLayout: FC = ({ children }) => {
    return <div className={layoutStyles}>{children}</div>;
};
