import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Img from 'gatsby-image'

class BlogIndex extends React.Component {
  render() {

    return (
      <div>
        Hello
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    world_icon: imageSharp(id: { regex: "/generateImg.png/" }) {
      sizes(maxWidth: 220, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
