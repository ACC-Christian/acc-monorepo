import React from 'react';
import { TwoColSection } from './TwoColSection';
import { GatsbyImage } from "gatsby-plugin-image";

import styled from "styled-components";

// import content from './placeholder.md';
import photo from './characterFormation.jpg';
import content from './placeholder.md';

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  
  @media(min-width: 768px){
    flex-direction: row;
    > div{
      width: 50%;
    }
    
    .text{
      padding: 2rem;
    }
  }
  
  > div{
    width: 100%;
  }
`

export default {
    //Component name needs to align with import above and the Component below
    component: TwoColSection,
    // Title below can be anything, this is what appears in the Storybook UI
    title: 'Sections/TwoColSection',
    layout: 'TextOnTheRight'
}

export const Primary = () => <>
    <section id="TwoColSection" className="first-content-block start-cell inner-container `${layout}`">
        <Columns>
            <div className="text">
                <p>{content}</p>
            </div>
            <div className="image">
                <div className="side-image">
                    <img src={photo} style={{ height: "100%", width: "100%" }} />
                    {/*<StaticImage style={{ height: "100%", width: "100%" }} imgStyle={{ objectFit: "contain" }} src="./characterFormation.jpg" alt="this is alt text in the academicimrovement" />*/}
                </div>
            </div>
        </Columns>
    </section>
</>;
