import styled from '@emotion/styled';
import { css } from 'emotion';

import { device, typography } from '../../../../variables';

const bottomMargin = 20;

const getVerticalMargin = (coef: number) =>
    coef === 1 ? 'var(--margin-bottom)' : `calc(var(--margin-bottom) * ${coef})`;

export const commonStyles = css`
    li > ul {
        margin-top: var(--margin-bottom);
    }

    --margin-bottom: 25px;

    @media ${device.mobileS} {
        --margin-bottom: 20px;
    }
`;

export const StyledP = styled.p`
    ${typography.text20}

    @media ${device.mobileS} {
        ${typography.text16}
    }
`;

export const StyledLi = styled.li`
    ${typography.text20}

    margin-bottom: var(--margin-bottom);

    &:last-child {
        margin-bottom: 0;
    }

    @media ${device.mobileS} {
        ${typography.text16}
    }
`;

const hStyles = css`
    font-weight: 400;
`;

export const StyledH1 = styled.h1`
    ${hStyles}
    ${typography.xxl}

    &:first-child {
        margin-top: 0;
    }

    @media ${device.mobileS} {
        ${typography.xl}
    }
`;

export const StyledH2 = styled.h2`
    ${hStyles}
    ${typography.xl}

    margin: ${getVerticalMargin(2.5)} 0 var(--margin-bottom);

    @media ${device.mobileS} {
        ${typography.l}
    }
`;

export const StyledH3 = styled.h3`
    ${hStyles}
    ${typography.l}

    margin: var(--margin-bottom) 0 var(--margin-bottom);

    @media ${device.mobileS} {
        ${typography.m}
    }
`;

export const StyledH4 = styled.h4`
    ${hStyles}
    ${typography.m}

    margin: var(--margin-bottom) 0;

    @media ${device.mobileS} {
        ${typography.text20}
    }
`;

export const StyledPre = styled.pre`
    margin: var(--margin-bottom) 0;
`;

export const StyledCode = styled.code`
    display: block;

    padding: ${bottomMargin / 2}px;

    background: #eee;
    border-radius: 4px;
    white-space: pre-line;

    ${typography.text16}
    font-family: monospace;

    @media ${device.mobileS} {
        ${typography.caption}
    }
`;

export const StyledStrong = styled.strong`
    font-weight: 400;
`;

export const StyledOl = styled.ol`
    margin: var(--margin-bottom) 0;
`;

export const StyledBlockquote = styled.blockquote`
    margin: ${getVerticalMargin(2)} 0;
    padding: ${getVerticalMargin(1.5)} ${getVerticalMargin(2.5)};

    box-shadow: 0 0.9px 2.4px rgba(0, 0, 0, 0.017), 0 2px 5.4px rgba(0, 0, 0, 0.024),
        0 3.5px 9.4px rgba(0, 0, 0, 0.03), 0 5.5px 14.9px rgba(0, 0, 0, 0.035),
        0 8.5px 23px rgba(0, 0, 0, 0.04), 0 13.3px 35.9px rgba(0, 0, 0, 0.046),
        0 22px 59.6px rgba(0, 0, 0, 0.053), 0 44px 119px rgba(0, 0, 0, 0.07);
    border-radius: 4px;

    @media ${device.mobileS} {
        padding: ${getVerticalMargin(1)} ${getVerticalMargin(2)};
    }
`;
