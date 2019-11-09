import React from 'react'
import PropTypes from 'prop-types'

import data from './data'

// Gatsby requires this file to be in /src root :(
// Extracted because react-helmet was outdated (threw warnings) and the unnecessary noscript tag
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta name="title" content={data.title} />
        <meta name="description" content={data.description} />
        <meta name="og:title" content={data.title} />
        <meta name="og:description" content={data.description} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="http://frontrain.net" />
        {/* <meta name="og:image" content="" /> */}

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="static/favicon/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="static/favicon/favicon-16x16.png?v=1"
        />
        <link rel="manifest" href="/favicon/site.webmanifest?v=1" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=1" color="#5ab52c" />
        <link rel="shortcut icon" href="/favicon/favicon.ico?v=1" />
        <meta name="apple-mobile-web-app-title" content="frontrain - frontend web development" />
        <meta name="application-name" content="frontrain - frontend web development" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=1" />
        <meta name="theme-color" content="#ffffff" />

        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
        <link href="https://necolas.github.io/normalize.css/3.0.2/normalize.css" rel="stylesheet" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
