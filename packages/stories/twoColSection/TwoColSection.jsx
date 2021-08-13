import React from 'react';
import PropTypes from 'prop-types';
import './TwoColSection.css'
import { Button } from '../button/Button'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ColumnsA = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem);
  max-width: 1000px;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;

  > div{
    width: 100%;
    flex: 1;
  }
  
  @media(min-width: 768px){
    flex-direction: row;
    padding: 0;
    
    > div{
      width: 50%;
    }
    
    .text{
      padding: 2rem;
    }

    .side-image{
      padding: 2rem 0;
      height: 100%;
    }
  }
`

const TwoColSection = ({ color, campus, bodyCopy, sideImage, layout }) => {
    return(
        <>
            <section className={['TwoColSection first-content-block start-cell inner-container', `${layout}`].join(' ')}>
                <ColumnsA>
                    <div className="text">
                        <MDXRenderer>{bodyCopy}</MDXRenderer>
                    </div>
                    <div className="side-image">
                        <GatsbyImage image={sideImage} alt="ACC Image" />
                    </div>
                </ColumnsA>
            </section>
        </>
    )

}
export default TwoColSection
