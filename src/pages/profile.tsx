import { graphql } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import { ProfilePageQueryQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Layout from '../components/layout/layout'
import Meta from '../components/meta/meta'

interface Props {
  data: ProfilePageQueryQuery
  location: Location
}

const Profile: React.FC<Props> = ({ location, data }: Props) => {
  const profile = data.profile?.childImageSharp?.fixed

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Profile" />
      <div>
        <section className="text-center">
          <div className="container">
            <Img fixed={profile as FixedObject} className="rounded-circle" />
            <h1>Jack Schumann</h1>
            <p className="lead text-muted">Full-stack engineer at Facebook DC</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Profile

export const query = graphql`
  query ProfilePageQuery {
    profile: file(name: { eq: "jackpride" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
