import React from "react";
import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const ResetCSS: React.FC<{}> = () => (
  <style>{`
    body { margin: 0; }
    * {
      box-sizing: border-box;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
`}</style>
);

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // with styled-components example
    // https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <ResetCSS key="reset-css" />,
          <>{sheet.getStyleElement()}</>,
          ...initialProps.styles
        ],
        head: [
          <link
            key="favicon"
            rel="icon"
            type="image/png"
            href="/static/favicon.png"
          />
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
