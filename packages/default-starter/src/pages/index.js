import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import PropTypes from "prop-types"

import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

// import Layout from "../components/layout"
import Seo from "../components/seo"

import { Button } from "@acc-monorepo/stories/button/Button";
import { ScrollTakeover } from "@acc-monorepo/stories/ScrollTakeover/ScrollTakeover"
import { TwoColSection } from "@acc-monorepo/stories/twoColSection/TwoColSection"
import { HomePageLayout } from "@acc-monorepo/stories/homePageLayout/homePageLayout"
import { PromotionalWidget } from "@acc-monorepo/stories/promotionalWidget/PromotionalWidget"
import { HomeTopSection } from "@acc-monorepo/stories/homeTopSection/HomeTopSection"
import { FlashRepuso } from "@acc-monorepo/stories/Repuso/FlashRepuso"
import { GridRepuso } from "@acc-monorepo/stories/Repuso/GridRepuso"
import TermDates from '../content/termDates'
import ContactInfo from '../content/contactInfo'
import PoliciesList from '../content/policiesList'

// export default function IndexPage({ data }) {
// const IndexPage = ( { data } ) => (
class IndexPage extends React.Component {
    
    render() {

        const { data } = this.props

        return (
// const pic = data.academicImprovementImage.gatsbyImageData
            <HomePageLayout
                campus={data.site.siteMetadata?.campus}
                title={data.site.siteMetadata?.title || `This is manually written on index page`}
                blogPosts={data.blogPosts}
                podcastEpisodes={data.podcastEpisodes}
                TermDates={TermDates}
                ContactInfo={ContactInfo}
                PoliciesList={PoliciesList}
            >
                <div className="wrapper">
                    <Seo title="XYZa"/>
                </div>
                <PromotionalWidget
                    url="https://www.acc.edu.au/singleton/kindergarten.html"
                    title={<>Kindy Explore<br /> Morning 2022</>}
                    content="Please attend out Kindy Explore Morning on Wednesday 4th August"
                    buttonText="REGISTER NOW"
                />
                <HomeTopSection
                    bodyCopy={data.topSectionContent.body}
                    backgroundImage={data.topSectionImage.childImageSharp.gatsbyImageData}
                />
                <TwoColSection
                    layout="TextOnTheLeft"
                    bodyCopy={data.academicImprovementContent.body}
                    sideImage={data.academicImprovementImage.childImageSharp.gatsbyImageData}
                />
                <section className="FullWidthSection">
                    <h2>Parent Reviews</h2>
                    <GridRepuso repusoReference="11241" />
                </section>
                <TwoColSection
                    layout="TextOnTheRight"
                    bodyCopy={data.characterFormationContent.body}
                    sideImage={data.characterFormationImage.childImageSharp.gatsbyImageData}
                />

                <FlashRepuso repusoReference="20699" />
                <section className="FullWidthSection">
                    <div className="wrapper padding2">
                        <div className="col-12"><h2>TEACHING TEAM</h2><h3>Our teachers engage</h3><p className="intro">Our teachers value relationships with parents and students.</p><p
                            className="intro">They are highly professional and seek to continually improve their teaching.</p>
                            <Button
                                primary
                                size="large"
                                href="https://www.acc.edu.au/singleton/meet-our-teachers.html"
                                label="MEET OUR TEACHERS"/>
                        </div>
                    </div>
                    <GatsbyImage
                        style={{paddingTop: `-3erm`}}
                        image={data.teachingTeamImage.childImageSharp.gatsbyImageData}
                        alt="ACC Image"
                    />
                </section>
                <ScrollTakeover
                    mainText="this is written in the index.js"
                    buttonLabel="text is defined in index.js"
                    repusoReference="21608"
                />
            </HomePageLayout>
        )
    }
}

export default IndexPage

export const query = graphql`
 query {
      site {
        siteMetadata {
          title
          campus
        }
      }
      topSectionImage:  file(publicURL: {regex: "/singleton-feature-section.jpg/"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      topSectionContent: mdx(fileAbsolutePath: {regex: "/homeTopSection.mdx/"}) {
        body
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
        blogPosts: allFeedAccBlog(limit: 9) {
            edges {
              node {
                title
                link
                id
              }
            }
        }
        podcastEpisodes: allFeedAccPodcast(limit: 9) {
            edges {
              node {
                title
                link
                id
              }
            }
        }
  }
`

IndexPage.defaultProps = {
    user: null,
};
