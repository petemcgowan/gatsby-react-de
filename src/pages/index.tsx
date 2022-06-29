

import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import Social from "../components/Social"
import NavbarDE from "../components/NavbarDE"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"


interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const BlogIndex = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const imageWidth = 280


  if (posts.length === 0) {
    return (
      <Layout  title={siteTitle}>
        <SEO title="Diplomatic Enjoy" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout  title={siteTitle}>
      <SEO title="Diplomatic Enjoy" />
      <NavbarDE />
      <div className="container">
        <div className="row">
          <div className="Pages col-md-3 text-center">
            <Link to="/house">
              <StaticImage
                src="../images/Housev4-(fish-eye,_noTitle500x500).jpg"
                alt="Fisheye view of people at a house festival"
                width={imageWidth}
              />
              <h3 className="mt-2 underline">house</h3>
            </Link>
          </div>
          <div className="Pages col-md-3 text-center">
            <Link to="/techno">
              <StaticImage
                src="../images/ECPodCrowdControlv2500x500.jpg"
                alt="Techno ravers at a festival"
                width={imageWidth}
              />
              <h3 className="mt-2 underline">techno</h3>
            </Link>
          </div>
          <div className="Pages col-md-3 text-center">
            <Link to="/funk">
              <StaticImage
                src="../images/funk400hi.jpg"
                alt="Funk drummer playing funk drums"
                width={imageWidth}
              />
              <h3 className="mt-2 underline">funk</h3>
            </Link>
          </div>
          <div className="Pages col-md-3 text-center">
            <Link to="/downloads">
              <StaticImage
                src="../images/SushiDog400vhsfw.jpg"
                alt="Mini Doggos picked up by chopsticks"
                width={imageWidth}
              />
              <h3 className="mt-2 underline">downloads</h3>
            </Link>
          </div>
        </div>
        <div className="footer">
          <div className="col-md">
            <Social />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          name
          img
          imgAlt
          path
          src
        }
      }
    }
  }
`


