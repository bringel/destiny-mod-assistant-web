import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css" />
        </Head>
        <body className="font-sans">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
