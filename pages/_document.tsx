import React from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

const ResetCSS: React.FunctionComponent<{}> = () => (
  <style>{`
    body { margin: 0; }
    * {
      box-sizing: border-box;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
`}</style>
);

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
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
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
