import * as React from "react"
import { Link, graphql } from "gatsby"
import "./blog-post.css"
import Podcast from "../components/Podcast.js"
import DownloadsPage from "../components/DownloadsPage"
import PodcastTechno from "../components/PodcastTechno.js"
import Social from "../components/Social"
import NavbarDE from "../components/NavbarDE"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  let Page = post.frontmatter

  return (
    <Layout location={location} title={siteTitle}>
      <NavbarDE />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        {/* <header>
          <h1 itemProp="headline">{Page.title}</h1>
          <p>{Page.date}</p>
        </header> */}
        {/* <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        /> */}
        <section>
          {/* <div className="blog-post row justify-content-center mt-5 "> */}
          {/* <div className="col-11 col-lg-5">
              <div className="blog-post-card card">
                <div className="card-body">
                  <h2 className="card-title">{Page.name}</h2>
                </div>
              </div>
            </div> */}

          <h1>{Page.title}</h1>
          <ul className="list-group list-group-flush">
            {Page.facts.map((fact, i) => (
              <li className="list-group-item" key={i}>
                <iframe
                  src={fact.source}
                  width="100%"
                  height={fact.height}
                  title={fact.name}
                  name={fact.name}
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </li>
            ))}
          </ul>
          <div className="Downloads">
            {Page.remixDownloads ? <DownloadsPage /> : ""}
          </div>
          <div className="Podcast">{!Page.techno && <Podcast />}</div>
          <div className="Podcast">{Page.techno && <PodcastTechno />}</div>

          {/* </div> */}
        </section>
        <hr />
        {/* <footer></footer> */}
      </article>
      <nav className="blog-post-nav">
        <Social />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        name
        path
        date(formatString: "MMMM DD, YYYY")
        description
        title
        src
        remixDownloads
        djMixDownloads
        techno
        facts {
          source
          name
          height
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
