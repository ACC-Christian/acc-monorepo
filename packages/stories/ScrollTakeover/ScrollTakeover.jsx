// TODO : need to make this expand and animate on scroll
// TODO : make it so that the text can be changed in the storybook UI, like the logo

import React from 'react';
import PropTypes from 'prop-types';
import './ScrollTakeover.css'
import { Button } from '../button/Button'
import { FloatingRepuso } from "../Repuso/FloatingRepuso"

export const ScrollTakeover = ({ color, campus, mainText, label, buttonLabel, repusoReference }) => (
<>
    <div className="ctaContainer" id="CTA">
        <div id="expanding_cta" className="cta-highlightable cta-highlight">
            <div id="cta">
                <div className="cta_card_featured">
                    <div className="cta-content">
                        <p className="next-step">NEXT STEP</p>
                        <a id="cta-close" href="#" className="close-banner">X</a>
                        <h2>{mainText}</h2>
                        <br />
                        <Button primary size="large" href={`https://www.acc.edu.au/${campus}/principals-tour.html`} label={buttonLabel} />

                        <div className="reviews">
                            <FloatingRepuso repusoReference={repusoReference} />
                        </div>
                    </div>
                </div>
                <div className="cta-highlighted-background"></div>
            </div>
        </div>
    </div>
</>
);

ScrollTakeover.defaultProps = {
    user: null,
    mainText: 'Discover how we would nurture your child\'s potential, personality and passion.',
    buttonLabel: 'this is the default label'
};


