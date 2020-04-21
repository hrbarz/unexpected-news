import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Episodes from "../components/episodes"
import GlobalStyles from "../fonts/global-styles"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Unexpected News Podcast" />
    <GlobalStyles />

    <Episodes data={data} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            path
            image
            audio
          }
        }
      }
    }
  }
`

export default IndexPage