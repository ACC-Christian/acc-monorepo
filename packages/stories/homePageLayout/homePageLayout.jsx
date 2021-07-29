/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import "./homePageLayout.css"

export const HomePageLayout = ({ campus, title, children, user, onLogin, onLogout, onCreateAccount, blogPosts, podcastEpisodes, TermDates, ContactInfo, PoliciesList }) => (
    <>
        <Header 
            siteTitle={title}  
            campus={campus}
            buttonLabelOne="click here now" 
            buttonLabelTwo="Dont click this!"
        />
        <div>
            <main>{children}</main>
            <Footer
                campus={campus}
                color="#fff"
                blogPosts={blogPosts}
                podcastEpisodes={podcastEpisodes}
                TermDates={TermDates}
                ContactInfo={ContactInfo}
                PoliciesList={PoliciesList}
            />
        </div>
    </>
);


