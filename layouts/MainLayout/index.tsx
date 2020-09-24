import React, { FC } from 'react';
import { cx, css } from 'emotion';

import { ClassNameProps } from '../../typings';

const layoutStyles = css`
    display: grid;

    grid-template-columns: repeat(auto-fit, 200px);
    grid-template-rows: repeat(auto-fit, 200px);
    grid-gap: 30px;

    padding: 30px;

    box-sizing: border-box;
`;

export const MainLayout: FC<ClassNameProps> = ({ className = '', children }) => (
    <div className={cx(layoutStyles, className)}>{children}</div>
);
