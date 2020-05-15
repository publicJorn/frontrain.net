/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/*

---> Not used until react-helmet fixes an outdated warning

import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ lang, title, description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'http://frontrain.net',
        },
        // {
        //   property: 'og:image',
        //   content: '',
        // },
      ]}
    >
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png?v=1" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png?v=1" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png?v=1" />
      <link rel="manifest" href="favicon/site.webmanifest?v=1" />
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg?v=1" color="#5ab52c" />
      <link rel="shortcut icon" href="favicon/favicon.ico?v=1" />
      <meta name="apple-mobile-web-app-title" content="frontrain - frontend web development" />
      <meta name="application-name" content="frontrain - frontend web development" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="favicon/browserconfig.xml?v=1" />
      <meta name="theme-color" content="#ffffff" />

      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      <link href="https://necolas.github.io/normalize.css/3.0.2/normalize.css" rel="stylesheet" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
}

SEO.propTypes = {
  lang: PropTypes.string,
}

export default SEO
*/
