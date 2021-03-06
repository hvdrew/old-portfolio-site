import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../sass/main.scss'

// import Header from '../components/header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]} 
    >
    {/* <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link> */}
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    > */}
      {children()}
    {/* </div> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
