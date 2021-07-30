import React from 'react';
import PropTypes from 'prop-types';
import './HomeTopSection.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const HomeTopSection = ({ bodyCopy, backgroundImage }) => (
    <>
        <section className="homeTopSection">
            {/*<AnimatedTitle />*/}
            <div className="content">
                <MDXRenderer>{bodyCopy}</MDXRenderer>
            </div>
            <GatsbyImage className="background-image" image={backgroundImage} alt="ACC Image" />
        </section>
    </>
);

