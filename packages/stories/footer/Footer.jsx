import * as React from 'react'
import PropTypes from 'prop-types';
import style from './footer.css'
import { Button } from '../button/Button';
import { AccLogo } from '../AccLogo/AccLogo';
import { SchoolList } from '../schoolList/SchoolList';
import { LatestBlogPosts } from '../LatestBlogPosts/LatestBlogPosts';
import Facebook from '../icons/facebook';
import Youtube from '../icons/youtube';
import styled from 'styled-components';

const Heading2 = styled.h2`
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    padding: 0;
    margin-top: 0;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;

    
    li{    
      padding: 0;
      a{
          font-size: inherit;
          margin: 0;
          color: inherit;
        text-decoration: none;
          
          :hover{
          }
      }
    }
`

export const Footer = ({
                           youtubeUrl,
                           facebookUrl,
                           campus,
                           blogFeed,
                           blogPosts,
                           podcastEpisodes,
                           TermDates,
                           ContactInfo,
                           PoliciesList
}) => (
    <>
        <footer id="footer">
            <div id="top">
                <div className="container">
                    <div className="column">
                        <div className="logo">
                            {/*<AccLogo campus={campus} color={'#fff'} />*/}
                        </div>

                        <p><em>Transforming young lives spiritually, academically, socially and physically.</em></p>
                        <div className="contact">
                            <h2>Contact</h2>
                            <ContactInfo />
                        </div>
                        <h2>Term Dates</h2>
                        <TermDates />
                    </div>
                    <div className="column">
                        <SchoolList />

                        <h2>Policies</h2>
                        <PoliciesList />
                    </div>
                    <div className="column">
                        <Heading2><a href="https://www.acc.edu.au/podcast/" target="_blank">ACC Podcast</a></Heading2>
                        <List>
                            {podcastEpisodes.edges.map(({ node }) => {
                                return (
                                    <li key={node.id}>
                                        <a href={node.link}>{node.title}</a>
                                    </li>
                                )
                            })}
                        </List>
                        <p><a href="https://www.acc.edu.au/podcast/" target="_blank">See more episodes</a></p>
                    </div>
                    <div className="column">
                        <LatestBlogPosts blogPosts={blogPosts} />
                    </div>
                </div>
            </div>
            <div id="bottom">
                <div className="container">
                    <div className="colspan2-desktop">
                        <p>&copy;&nbsp;Australian Christian College&nbsp;
                            <script>document.write(new Date().getFullYear())</script>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <a href="https://www.acc.edu.au/singleton/sitemap.html">Sitemap</a>
                        </p>

                    </div>
                    <div className="colspan2-desktop">
                        <div id="social-links" style={{ width: '50px' }}>
                            <div className="social-link facebook">
                                <a href={facebookUrl} target="_blank" rel="noreferrer">
                                    <Facebook />
                                </a>
                            </div>
                            <div className="social-link youtube">
                                <a href={youtubeUrl} target="_blank" rel="noreferrer">
                                    <Youtube />
                                </a>
                            </div>
                        </div>

                        <Button
                            secondary
                            size="medium"
                            position="right"
                            color="white"
                            href="https://www.acc.edu.au/careers/"
                            target="_blank"
                            label="careers"
                        />
                        <Button
                            secondary
                            size="medium"
                            position="right"
                            color="white"
                            href={`https://sites.google.com/acc.edu.au/${campus}-resources/home`}
                            target="_blank"
                            rel="noreferrer"
                            label={<span><span>PARENT</span>&nbsp;<span className="skinny">PORTAL</span></span>}
                        />
                    </div>
                </div>
            </div>
        </footer>

    </>
);
