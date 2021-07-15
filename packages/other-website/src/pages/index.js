import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Button } from "stories/button/Button";
import { Acclogo } from "stories/acclogo/Acclogo";
import { Cta } from "stories/cta/Cta"
// import Content from "./content.md"

import "fontsource-montserrat/300.css" // All styles included.
import "fontsource-montserrat/400.css" // All styles included.
import "fontsource-montserrat/500.css" // All styles included.
import "fontsource-montserrat/700.css" // All styles included.

import Layout from "../components/layout"
import Seo from "../components/seo"

const Content = "this is manually entered content"

const IndexPage = (args) => (
  <Layout>
    <Seo title="Home" />
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
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
        <Acclogo color={'#000'} campus={'ricky'} />
        <Button />
        <Cta copy={Content}/>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>

)

export default IndexPage