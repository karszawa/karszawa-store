import React from "react";
import Document, { NextDocumentContext } from "next/document";
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
  static async getInitialProps(ctx: NextDocumentContext) {
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
        styles: (
          <>
            <ResetCSS />
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        head: (
          <>
            <link rel="icon" type="image/png" href="/static/favicon.png" />
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
