/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Document, { NextScript, Main, Head } from 'next/document';
const styles = {
  body: {
    margin: 0
  }
};

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head></Head>
        <body css={css(styles.body)}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
