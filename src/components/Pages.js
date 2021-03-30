import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"

/* original images for pages.json, I'm commenting out for now, to just use pexels that may not have "inefficiencies"

    "img": "../assets/images/ECPodCrowdControlv2500x500.jpg",
    "img": "../assets/images/funk400hi.jpg",
    "img": "../assets/images/SushiDog400vhsfw.jpg",
    "img": "../assets/images/Housev4-(fish-eye,_noTitle500x500).jpg",

Alt:
    "img": "../assets/images/rockycliff.jpg",

*/

const Pages = ({ heading }) => {
  // Note: PagesQuery is used somewhere and gives an error if I use that, so I'm using PagesPeteQuery instead
  const data = useStaticQuery(graphql`
    query PagesPeteQuery {
      allPagesJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  /* Note that the name of the buttons will affect the structure of the CSS, if they're different length names, it will make the images askew (currently)*/

  function getPages(data) {
    const pagesArray = []
    data.allPagesJson.edges.forEach((item, index) => {
      pagesArray.push(
        <ProductCard key={index}>
          <ProductImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <Button
              to="/pages"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return pagesArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>{getPages(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

export default Pages

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

const ProductImg = styled(Img)`
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
