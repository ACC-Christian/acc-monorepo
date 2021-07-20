import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button } from "@acc-monorepo/stories/button/Button";
import { AccLogo } from "@acc-monorepo/stories/AccLogo/AccLogo";
import { Cta } from "@acc-monorepo/stories/cta/Cta"
import { TwoColSection } from "@acc-monorepo/stories/twoColSection/TwoColSection"


// export default function IndexPage({ data }) {
const IndexPage = ( { data } ) => (
// const pic = data.academicImprovementImage.gatsbyImageData

        <Layout>
            <Seo title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            {/*TODO: <a href={`http://${process.env.OTHERPROJECT_URL}`}>Go to OTHER</a>*/}

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
                <TwoColSection layout="TextOnTheLeft" bodyCopy={data.academicImprovementContent.body} sideImage={data.academicImprovementImage.childImageSharp.gatsbyImageData}/>
                <TwoColSection layout="TextOnTheRight" bodyCopy={data.academicImprovementContent.body} sideImage={data.academicImprovementImage.childImageSharp.gatsbyImageData}/>
                <Cta mainText="this is written in the index.js" buttonLabel="text is defined in index.js"/>
              <Link to="/page-2/">Go to page 2</Link> <br/>
              <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </span>
        </Layout>
)

export default IndexPage



export const query = graphql`
 query {
      academicImprovementContent: mdx(headings: {elemMatch: {value: {eq: "ACADEMIC IMPROVEMENT"}}}) {
        body
      }
      academicImprovementImage: file(name: {eq: "academicImprovementPic"}) {
        childImageSharp {
          gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
         formats: [AUTO, WEBP, AVIF]
         aspectRatio: 0.6666
          )
        }
      }
      characterFormationContent: mdx(headings: {elemMatch: {value: {eq: "CHARACTER FORMATION"}}}) {
        body
      }
      characterFormationImage: file(name: {eq: "characterFormationPic"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
  }
`

IndexPage.defaultProps = {
    user: null,
};