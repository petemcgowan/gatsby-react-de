import React from "react"
import Hero from "../components/Hero"
import Pages from "../components/Pages"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Pages heading="Our Favorite Pages" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
