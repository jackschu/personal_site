import { graphql } from 'gatsby'
import React from 'react'

import { BlogPageQuery, PostByPathQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Post from '../templates/post/post'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'

interface Props {
  data: BlogPageQuery
}

const Blog: React.FC<Props> = ({ data, location }: Props) => {
  const posts = data.remark.posts
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Profile" />
      <div>
        {posts.map((post, i) => (
          <Post
            data={post as PostByPathQuery}
            options={{
              isIndex: true,
            }}
            key={i}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`query BlogPageQuery {
  remark: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    posts: edges {
      post: node {
        html
        frontmatter {
          hidden
          layout
          title
          path
          category
          tags
          description
          date(formatString: "YYYY/MM/DD")
          image {
            childImageSharp {
              gatsbyImageData(width: 500, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`
