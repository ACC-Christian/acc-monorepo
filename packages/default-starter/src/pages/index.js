import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
// import PropTypes from "prop-types"

import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

// import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button } from "@acc-monorepo/stories/button/Button";
import { Cta } from "@acc-monorepo/stories/cta/Cta"
import { TwoColSection } from "@acc-monorepo/stories/twoColSection/TwoColSection"
import { HomePageLayout } from "@acc-monorepo/stories/homePageLayout/homePageLayout"

// export default function IndexPage({ data }) {
const IndexPage = ( { data } ) => (
    
// const pic = data.academicImprovementImage.gatsbyImageData
        <HomePageLayout acampus={data.site.siteMetadata?.campus} title={data.site.siteMetadata?.title || `This is manually written on index page`}>
            <div className="wrapper">
                <Seo title="XYZa"/>
            </div>
            <span>
                {/*<AcademicImprovement bodyCopy={data.markdownRemark.html}/>*/}
                <TwoColSection layout="TextOnTheLeft" bodyCopy={data.academicImprovementContent.body} sideImage={data.academicImprovementImage.childImageSharp.gatsbyImageData}/>
                <TwoColSection layout="TextOnTheRight" bodyCopy={data.characterFormationContent.body} sideImage={data.characterFormationImage.childImageSharp.gatsbyImageData}/>
                <section className="FullWidthSection">
                    <div  className="wrapper padding2">
                        <div className="col-12"><h2>TEACHING TEAM</h2><h3>Our teachers engage</h3><p className="intro">Our teachers value relationships with parents and students.</p><p
                            className="intro">They are highly professional and seek to continually improve their teaching.</p>
                            <Button
                                primary
                                size="large"
                                href="https://www.acc.edu.au/singleton/meet-our-teachers.html"
                                label="MEET OUR TEACHERS" />
                        </div>
                    </div>
                    <GatsbyImage style={{paddingTop: `-3erm`}} image={data.teachingTeamImage.childImageSharp.gatsbyImageData} alt="ACC Image" />
                </section>
                <Cta mainText="this is written in the index.js" buttonLabel="text is defined in index.js"/>
              <Link to="/page-2/">Go to page 2</Link> <br/>
              <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            </span>
        </HomePageLayout>
)

export default IndexPage



export const query = graphql`
 query {
      site {
        siteMetadata {
          title
          campus
        }
      }
      academicImprovementContent: mdx(headings: {elemMatch: {value: {eq: "ACADEMIC IMPROVEMENT"}}}) {
        body
      }
      academicImprovementImage:  file(publicURL: {regex: "/academicImprovement.jpg/"}) {
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
      characterFormationImage: file(publicURL: {regex: "/characterFormation.jpg/"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            aspectRatio: 0.6666
          )
        }
      }
      teachingTeamImage: file(publicURL: {regex: "/teachingTeam.jpg/"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            aspectRatio: 2.333
          )
        }
      }
  }
`

IndexPage.defaultProps = {
    user: null,
};
