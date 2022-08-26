import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>LUMX NFT - COLLECTION</title>
          <meta
            name="description"
            content="Lemonade helps you to create a playlist based on the setlist of your favorite artist's shows."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
