import React from 'react';
import PropTypes from 'prop-types';
import AppleOnBooks from '../icons/appleOnBooks'
import  { Button } from '../button/Button'
import style from './PromotionalWidget.css'

export const PromotionalWidget = ({ url, title, content, buttonText }) => (
    <>
        <a href={url}>
        <span className="PromotionalWidget">
            <button className="close">&#x203A;</button>
            <span className="icon">
                <AppleOnBooks />
            </span>
            <span className="text">
                <h2>{title}</h2>
                <p>{content}</p>
                <Button primary size="large" label={buttonText} />
            </span>
        </span>
        </a>
    </>
);
