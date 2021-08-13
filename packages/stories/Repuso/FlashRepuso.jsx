// https://widgets.thereviewsplace.com/2.0/rw-widget-flash.js
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet"


export const FlashRepuso = ({ repusoReference }) => {
    return (
        <>
            <Helmet>
                <script type="module" src="https://widgets.thereviewsplace.com/2.0/rw-widget-flash.js"></script>
            </Helmet>
            <rw-widget-flash data-rw-flash={repusoReference}></rw-widget-flash>
        </>
    );
}
