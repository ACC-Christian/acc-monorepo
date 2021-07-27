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

export const HomePageLayout = ({ acampus, title, children, user, onLogin, onLogout, onCreateAccount }) => (
    <>
        <Header siteTitle={title}  bcampus={acampus} buttonLabelOne="click here now" buttonLabelTwo="Dont click this!"/>
        <div
        style={{
         margin: `0 auto`,
        }}
        >
            <main>{children}</main>
        <Footer />
    </div>
</>
);
// --
// const HomePageLayout = ({ title, children, user, onLogin, onLogout, onCreateAccount }) => {
//
//     return (
//         <>
//             <Header siteTitle={title}  buttonLabelOne="click here now" buttonLabelTwo="Dont click this!"/>
//             <div
//                 style={{
//                     margin: `0 auto`,
//                 }}
//             >
//                 <main>{children}</main>
//                 <footer
//                     style={{
//                         marginTop: `2rem`,
//                     }}
//                 >
//                     © {new Date().getFullYear()}, Built with
//                     {` `}
//                     <a href="https://www.gatsbyjs.com">Gatsby</a>
//                 </footer>
//             </div>
//         </>
//     )
// }
//
// // Layout.propTypes = {
// //     children: PropTypes.node.isRequired,
// // }
//
// export default HomePageLayout

