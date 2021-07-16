import React from 'react';
import PropTypes from 'prop-types';
import './academicImprovement.css'
import { Button } from '../button/Button'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

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

export const AcademicImprovement = ({ color, campus, bodyCopy, sideImage }) => (
<>
    <section id="academic-improvement" className="first-content-block start-cell inner-container">
        <Columns>
            <div className="text">
                <MDXRenderer>{bodyCopy}</MDXRenderer>
            </div>
            <div className="">
                <div className="side-image">
                    <GatsbyImage image={sideImage} alt="this is alt text in the academicimrovement " />
                </div>
            </div>
        </Columns>
    </section>
</>
);
