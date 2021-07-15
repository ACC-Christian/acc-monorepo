import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import get from 'lodash/get'

import { Button } from "stories/button/Button";
import { AccLogo } from "stories/AccLogo/AccLogo";
import { Cta } from "stories/cta/Cta"
import { AcademicImprovement } from "stories/academic-improvement/AcademicImprovement"
// import Content from "./content.md"

import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

import Layout from "../components/layout"
import Seo from "../components/seo"

// const AcademicContent = data.markdownRemark.html

// const AcademicContent = this.props.data.allMarkdownRemark.edges.node.fileAbsolutePath
// const IndexPage = ( args, { data } ) => (
export default function IndexPage({ data }) {
    return (
        <Layout>
            <Seo title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            <a href={`http://${process.env.OTHERPROJECT_URL}`}>Go to OTHER</a>

            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{marginBottom: `1.45rem`}}
            />
            <span>
            <AccLogo color={'magenta'} campus={'ricky'}/>
            <Button label="this is a button"/>
            <AcademicImprovement bodyCopy={data.markdownRemark.html}/>
            <Cta mainText="this is written in the pages" buttonLabel="click here now"/>
          <Link to="/page-2/">Go to page 2</Link> <br/>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </span>
        </Layout>
    )
}


export const query = graphql`
 query {
      allMarkdownRemark {
        edges {
          node {
            html
          }
        }
      }
      markdownRemark {
        html
      }
  }
`

IndexPage.defaultProps = {
    user: null,
};