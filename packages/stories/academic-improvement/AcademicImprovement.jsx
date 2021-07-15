import React from 'react';
import PropTypes from 'prop-types';
import './academicImprovement.css'
import { Button } from '../button/Button'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  
  @media(min-width: 768px){
    flex-direction: row;
  }
`

export const AcademicImprovement = ({ color, campus, bodyCopy, sideImage }) => (
<>
    <section id="academic-improvement" className="first-content-block start-cell inner-container">
        <div className="row">
            <div className="col-12 col-lg-6">
                <div className="title" dangerouslySetInnerHTML={{ __html: `${bodyCopy}` }} />
            </div>
            <div className="col-12 col-lg-6">
                <div className="side-image">
                    <GatsbyImage image={sideImage} alt="this is alt text in the academicimrovement " />
                </div>
            </div>
        </div>
        <div id="contact-destination"></div>
    </section>
</>
);
