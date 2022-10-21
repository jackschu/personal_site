import { graphql } from 'gatsby'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Meta from '../components/meta/meta'
import { motion } from 'framer-motion'
import Layout from '../components/layout/layout'
import './home_style.scss'

interface Props {
  location: Location
}

const Index: React.FC<Props> = ({ location }: Props) => {
  const max_letter_size = 50
  const letter_variant = {
    hidden: { width: 0, height: 0, scale: 2 },

    show: {
      transition: {
        ease: [0.1, 0.51, 0.38, 0.6],
        duration: 2.5,
      },
      width: max_letter_size,
      height: max_letter_size,
      scale: 1,
    },
  }

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Home" />

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="jumbotron mt-3 pt-0 pb-4">
              <div className="d-flex flex-row justify-content-center">
                <h1 className="display-4">Hi I'm</h1>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="letter-container"
                >
                  <motion.div variants={letter_variant} className="letter-j" />
                  <motion.div variants={letter_variant} className="letter-a" />
                  <motion.div variants={letter_variant} className="letter-c" />
                  <motion.div variants={letter_variant} className="letter-k" />
                </motion.div>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <p className="lead">
                  This is a simple static site built by me, Jack Schumann.{' '}
                  <br />
                  <br />
                  I'm not sure what it's for yet, but I'm sure its mine.
                </p>
              </div>
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
