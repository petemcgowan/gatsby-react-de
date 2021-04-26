import * as React from "react"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.google.com/share?selection.family=Source%20Sans%20Pro|Playfair+Display:400,700');

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 18px;
  }
/*
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  } */
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <GlobalStyle />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
