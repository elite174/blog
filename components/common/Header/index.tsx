import { FC } from 'react';
import { css, cx } from 'emotion';

import { typography } from '../../../variables';
import { ClassNameProps } from '../../../typings';

const headerStyles = css`
    display: flex;
    flex-direction: column;

    padding: 30px;

    ${typography.style.mono}
`;

const nameStyles = css`
    text-transform: uppercase;
    letter-spacing: 3px;

    ${typography.text16}
    font-weight: 600;
`;

const menuStyles = css`
    position: absolute;
    top: 50%;
    left: 30px;

    transform: translateY(-50%);
`;

const menuItemStyles = css`
    position: relative;

    width: fit-content;
    margin-bottom: 20px;

    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: color 0.3s ease-out;

    &:last-child {
        margin-bottom: 0;
    }

    &:after {
        content: '';

        display: block;
        height: 2px;
        width: 100%;

        position: absolute;
        bottom: -2px;

        background-color: black;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-out, background-color 0.3s ease-out;
    }

    &:active {
        color: #cf1919;

        &:after {
            background-color: #cf1919;
        }
    }

    &:hover&:after {
        transform: scaleX(1);
    }
`;

const links = ['Posts', 'learning', 'gallery'];

const Header: FC<ClassNameProps> = ({ className = '' }) => {
    return (
        <div className={cx(headerStyles, className)}>
            <div className={nameStyles}>Vlad Lipatov</div>
            <div className={menuStyles}>
                {links.map((l) => (
                    <div key={l} className={menuItemStyles}>
                        {l}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
