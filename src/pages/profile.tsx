import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
  const profile = data.profile?.childImageSharp?.gatsbyImageData

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Blog" />
      <div>
        <section className="text-center">
          <div className="container">
            <div className="d-flex justify-content-center mb-2">
              <GatsbyImage
                image={profile as FixedObject}
                className="rounded-circle"
                alt="Jack Schumann"
              />
            </div>
            <h1>Jack Schumann</h1>
            <p className="lead text-muted mb-0">
              Senior software engineer at{' '}
              <a target="_blank" href="https://www.antithesis.com">
                Antithesis
              </a>
            </p>
            <p className="text-muted">
              Previously: Full-stack engineer at Meta DC
            </p>
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
        gatsbyImageData(
          width: 120
          height: 120
          quality: 100
          layout: FIXED
          placeholder: BLURRED
        )
      }
    }
  }
`
