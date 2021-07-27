import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Button } from '../button/Button';
import { AccLogo } from '../AccLogo/AccLogo';

const SiteFooter = styled.footer`
  position: relative;
  padding-top: 3.5em;
  padding-bottom: 60px;
  font-size: 0.9em;
    h2{
      margin-top: 0;
    }
    p{
    font-size: inherit;
    }

    ul{
      list-style-type: none;
      padding: 0;
      font-size: inherit;

      li{
        padding: 0;
        margin: 0.2em 0;

        a{
            font-size: 0.9em;
            margin: 0;
            color: inherit;

            :hover{
                color: #023e88;
            }
        }
      }
    }
    #acc-logo {
    display: block;
    width: 100%;
    height: auto;
    max-width: 230px
}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

    @media (min-width: 768px){
      flex-direction: row;
    }
`;

const Column = styled.div`
  width: 100%;
  padding: 0 1em;
  margin-bottom: 2em;

  @media (min-width: 768px){
    width: 25%;

    :nth-of-type(3){
      width: 50%
    }
  }

  .caption{
    margin-top: 1em;
    text-align: right;
    margin-bottom: 1em;
  }

  /* ------------this is the logo---------- */
  svg{
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;

  height: auto;
  width: 100%;

    :hover {
      text-decoration: none;
    }
  }

`;



const SiteFooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  color: #000;
  font-size: 1.3rem;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
    a {
      color: #023e88;
    }
    a:hover {
      color: #023e88;
      text-decoration: none;
    }

`;

const SiteFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 768px){
     justify-content: center;
    flex-direction: column;
  }

  a {
    position: relative;
    color: #023e88;
    
    &:hover {
      color: #023e88;
      text-decoration: none;
    }
    &:before {
        content: '';
        position: absolute;
        top: 11px;
        left: -11px;
        display: block;
        width: 2px;
        height: 2px;
        background: #fff;
        border-radius: 100%;
    }

    &:first-of-type:before {
      display: none;
    }
  @media (max-width: 650px) {
    a:first-of-type {
      margin-left: 0;
    }
  }
`;

export const Footer = ({ bcampus }) => (
    <div>
        {/*<ExitPopup />*/}
        <SiteFooter>
            <div className="wrapper">
                {/*<Column>*/}
                {/*    <Logo color={white} />*/}
                {/*    <p className="caption">Transforming young lives spiritually, academically, socially and physically.</p>*/}
                {/*</Column>*/}
                <Column>
                    {/*<SiteFooterNav css={[SiteFooterContent]}>*/}
                    {/*    <SchoolList />*/}
                    {/*</SiteFooterNav>*/}
                </Column>
                {/*<Column>*/}
                {/*    <EGuides />*/}
                {/*</Column>*/}
                <Column>
                    <h2>Blog Posts</h2>
                    {/*<LatestBlogPosts />*/}
                    {/*<ul>*/}
                    {/*  {props.latestPosts.edges.map(n => {*/}
                    {/*    return (*/}
                    {/*      <li key={n.node.frontmatter.title}>*/}
                    {/*        <Link to={n.node.fields.slug}>{n.node.frontmatter.title}</Link>*/}
                    {/*      </li>*/}
                    {/*    );*/}
                    {/*  })}*/}
                    {/*</ul>*/}
                </Column>
            </div>
        </SiteFooter>
        {/*<BottomBar />*/}
    </div>
);

// Header.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };
