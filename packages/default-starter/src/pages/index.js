import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import get from 'lodash/get'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import Content from "./content.md"

import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button } from "stories/button/Button";
import { AccLogo } from "stories/AccLogo/AccLogo";
import { Cta } from "stories/cta/Cta"
import { AcademicImprovement } from "stories/academic-improvement/AcademicImprovement"


// export default function IndexPage({ data }) {
const IndexPage = ( { data } ) => (
// const pic = data.academicImprovementImage.gatsbyImageData

        <Layout>
            <Seo title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            <a href={`http://${process.env.OTHERPROJECT_URL}`}>Go to OTHER</a>

            <StaticImage
                src="../content/images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{marginBottom: `1.45rem`}}
            />
            <span>
                <AccLogo color={'magenta'} campus={'ricky'}/>
                <Button label="this is a button"/>
                {/*<AcademicImprovement bodyCopy={data.markdownRemark.html}/>*/}
                <AcademicImprovement bodyCopy={data.academicImprovementContent.html} sideImage={data.academicImprovementImage.childImageSharp.gatsbyImageData}/>
                <Cta mainText="this is written in the pages" buttonLabel="click here now"/>
              <Link to="/page-2/">Go to page 2</Link> <br/>
              <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </span>
        </Layout>
)

export default IndexPage



export const query = graphql`
 query {
      academicImprovementContent: markdownRemark(headings: {elemMatch: {value: {in: "ACADEMIC IMPROVEMENT"}}}) {
        html
        fileAbsolutePath
      }
      academicImprovementImage: file(name: {eq: "academicImprovementPic"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
  }
`

IndexPage.defaultProps = {
    user: null,
};