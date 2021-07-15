import React from 'react';
import PropTypes from 'prop-types';
import './academicImprovement.css'
import { Button } from '../button/Button'

export const AcademicImprovement = ({ color, campus, bodyCopy }) => (
<>
    <section id="academic-improvement" className="first-content-block start-cell inner-container">
        <div className="row">
            <div className="col-12 col-lg-6">
                <div className="title" dangerouslySetInnerHTML={{ __html: `${bodyCopy}` }} />
            </div>
            <div className="col-12 col-lg-6">
                <div className="side-image">
                </div>
            </div>
        </div>
        <div id="contact-destination"></div>
    </section>
</>
);
