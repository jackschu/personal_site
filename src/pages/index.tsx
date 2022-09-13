import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'
import './home_style.scss'

interface Props {
  data: ProfilePageQuery
  location: Location
}

const Index: React.FC<Props> = ({ data, location }: Props) => {
  const profile = data.profile
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Home" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="jumbotron mt-3 pt-0 pb-4">
              <h1 className="display-4">My Corner of the Internet</h1>
              <p className="lead">
                This is a simple static site built by me, Jack Schumann. <br />
                <br />
                I'm not sure what it's for yet, but I'm sure its mine.
              </p>
              <hr className="my-4" />
              <p>Want to learn more about me? Here's a button for that:</p>
              <a className="btn btn-primary btn" href="/profile/" role="button">
                View my profile page
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query LandingPageQuery {
    profile: file(name: { eq: "jackpride" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120, quality: 100, layout: FIXED)
      }
    }
  }
`
