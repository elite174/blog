import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <CacheProvider value={cache}>
                <Component {...pageProps} />
            </CacheProvider>
        );
    }
}
