import React, { FC } from 'react';
import { cx, css } from 'emotion';

import { ClassNameProps } from '../../typings';

const layoutStyles = css`
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 30px;

    padding: 30px;

    box-sizing: border-box;
`;

export const PostLayout: FC<ClassNameProps> = ({ className = '', children }) => (
    <div className={cx(layoutStyles, className)}>{children}</div>
);
