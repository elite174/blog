const desktopFHD = 1920;
const desktop = 1366;
const tablet = 1024;
const mobileL = 768;
const mobileS = 480;

export const breakpoints = {
    desktopFHD,
    desktop,
    tablet,
    mobileL,
    mobileS
};

export const device = {
    desktopFHD: `(max-width: ${breakpoints.desktopFHD}px)`,
    desktop: `(max-width: ${breakpoints.desktop}px)`,
    tablet: `(max-width: ${breakpoints.tablet}px)`,
    mobileL: `(max-width: ${breakpoints.mobileL}px)`,
    mobileS: `(max-width: ${breakpoints.mobileS}px)`
};
