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

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const imageWidth = 280

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
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
    <Layout location={location}>
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

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

// const ProductWrapper = styled.div`
// `
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductImg = styled(StaticImage)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

// const TextWrap = styled.div`
//   display: flex;
//   align-items: center;
//   position: absolute;
//   top: 375px;
// `

// const ProductTitle = styled.div`
//   font-weight: 400;
//   font-size: 1rem;
//   margin-left: 0.5rem;
// `
