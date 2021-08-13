// https://widgets.thereviewsplace.com/2.0/rw-widget-badge1.js
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet"

export const FloatingRepuso = ({ repusoReference }) => {
    return (
        <>
            <Helmet>
                <script type="module" src="https://widgets.thereviewsplace.com/2.0/rw-widget-badge1.js"></script>
            </Helmet>
            <rw-widget-badge1 data-rw-badge1={repusoReference}></rw-widget-badge1>
        </>
    );
}
