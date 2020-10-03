import { graphql } from 'gatsby'
import React from 'react'

import { ProfilePageQuery } from '../../types/graphql-types'
import { siteMetadata } from '../../gatsby-config'
import Meta from '../components/meta/meta'
import Layout from '../components/layout/layout'

interface Props {
	data: ProfilePageQuery
    location: Location	
}

const Index: React.FC<Props> = ({data, location }: Props) => {
  return (
    <Layout location={location}>
		<Meta site={siteMetadata} title="Home" />
	  </Layout>
  )
}

export default Index

