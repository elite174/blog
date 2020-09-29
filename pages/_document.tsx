import Document, { DocumentContext, Head, NextScript, Html, Main } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const styles = extractCritical(initialProps.html);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        data-emotion-css={styles.ids.join(' ')}
                        dangerouslySetInnerHTML={{ __html: styles.css }}
                    />
                </>
            )
        };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
                </body>
            </Html>
        );
    }
}
