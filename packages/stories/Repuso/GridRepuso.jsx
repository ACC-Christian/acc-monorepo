// https://widgets.thereviewsplace.com/2.0/rw-widget-grid.js
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet"

export const GridRepuso = ({ repusoReference }) => {
    return (
        <div>
            <Helmet>
                <script type="module" src="//widgets.thereviewsplace.com/2.0/rw-widget-grid.js"></script>
            </Helmet>
            <rw-widget-grid data-rw-grid={repusoReference}></rw-widget-grid>
        </div>
    );
}