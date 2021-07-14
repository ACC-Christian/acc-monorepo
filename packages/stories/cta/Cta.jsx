import React from 'react';
import PropTypes from 'prop-types';
import './cta.css'
import { Button } from '../button/Button'

export const Cta = ({ color, campus, copy }) => (
<>
    <div>
        <p className={color} id={campus}></p>
         <div>
             <Button size="small" label="Log in" />
           <p className={copy} style={{backgroundColor: 'pink' }}>{copy}</p>
         </div>
    </div>
    <div className="ctaContainer">
        <div id="expanding_cta" className="cta-highlightable cta-highlight">
            <div id="cta">
                <div className="cta_card_featured">
                    <div className="cta-content">
                        <p className="next-step">NEXT STEP</p>
                        <a id="cta-close" href="#" className="close-banner">X</a>
                        <h2>Discover how we would nurture your child's potential, personality and passion.</h2>
                        <a className="button" href="https://www.acc.edu.au/singleton/principals-tour.html">ATTEND
                            PRINCIPAL'S TOUR</a>
                        <Button size="small" label="PRINCIPAL'S TOUR" />
                        <!-- htmlmin:ignore -->
                        <!-- Begin widget code -->
                        <div className="reviews">
                            <!-- Begin widget code -->
                            <div data-rw-badge1="21608"></div>

                            <!-- End widget code -->
                        </div>
                        <!-- End widget code -->
                        <!-- htmlmin:ignore -->
                    </div>
                </div>
                <div className="cta-highlighted-background"></div>
            </div>
        </div>
    </div>
</>
);
