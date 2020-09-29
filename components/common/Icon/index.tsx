import { css, cx } from 'emotion';
import React, { FC } from 'react';

import { ClassNameProps } from '../../../typings';

const containerStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

interface Props extends ClassNameProps {
    readonly name: string;
    readonly ios?: string;
    readonly md?: string;
    readonly size?: 'small' | 'large';
}

export const Icon: FC<Props> = ({ className, ...rest }) => (
    <span className={cx(containerStyles, className)}>
        <ion-icon {...rest} />
    </span>
);
