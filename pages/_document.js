import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    var props = await Document.getInitialProps(ctx)
    return { ...props }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/static/hackermon.png" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"/>

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#50c878" />
          <meta name="title" content="JDanielS"/>
          <meta name="description" content="JDanielS/Hackermon is an idiot that does programming. He lives off his salary which is $0.3/month. He makes a lot of small projects and you might have earned of one of his projects. You can usually find him on repl.it or discord."/>
          <meta name="og:title" content="JDanielS" />
          <meta name="og:description" content="JDanielS/Hackermon is an idiot that does programming. He lives off his salary which is $0.3/month. He makes a lot of small projects and you might have earned of one of his projects. You can usually find him on repl.it or discord." />
					
          <meta name="og:image" content="https://jdaniels.me/static/hackermon.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="PDanielY" />
          <meta name="twitter:description" content="PDanielY is an unknown specie that lives in a planet called Earth (you may have heard of it). Apparently, he likes to make websites and app. You can contact him with something he calls an email (therealhackermon@gmail.com). He also has a Discord (Hackermon#6691)." />
          <meta name="twitter:image" content="https://jdaniels.me/static/hackermon.png" />
          <meta name="twitter:site" content="@plop_daniel" />

          { /* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-176091657-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-176091657-1');
        `,
            }}
          />
					<script async src="https://arc.io/widget.min.js#8BsJZj7h"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument