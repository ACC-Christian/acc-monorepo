import React from 'react';
import PropTypes from 'prop-types';
import style from './footer.css'
import { Button } from '../button/Button';
import { AccLogo } from '../AccLogo/AccLogo';
import { SchoolList } from '../schoolList/SchoolList';
import { LatestBlogPosts } from '../LatestBlogPosts/LatestBlogPosts';


export const Footer = ({ bcampus, blogFeed, blogItems }) => (
    <>
        <footer id="footer">
            <div id="top">
                <div className="container">
                    <div className="column">
                        <div className="logo">
                            <AccLogo campus={bcampus} color={'#fff'} />
                        </div>

                        <p><em>Transforming young lives spiritually, academically, socially and physically.</em></p>
                        <div className="contact">
                            <h2>Contact</h2>
                            <p>Phone: <span itemProp="telephone">(02) 6572 6600</span><br/>
                                <a itemProp="email" href="mailto:singleton@acc.edu.au">singleton@acc.edu.au</a><br/>
                                <a href="https://www.google.com.au/maps/place/23+Maitland+Rd,+Singleton+NSW+2330/@-32.5718648,151.1786855,15z/data=!4m2!3m1!1s0x6b0cb02dd08f29eb:0x63380353f830befe?hl=en"
                                   target="_blank">
                    <span itemProp="address" itemScope="" itemType="//schema.org/PostalAddress">
                        <span itemProp="streetAddress">23 Maitland Road</span>,
                        <span itemProp="addressLocality">Singleton</span>
                        <span itemProp="addressRegion">NSW</span>
                    </span>
                                </a>
                            </p>
                        </div>
                        <h2>Term Dates</h2>
                        <ul className="term-dates">
                            <li><strong>Term 1:</strong> 27 January - 1 April</li>
                            <li><strong>Term 2:</strong> 19 April - 25 June</li>
                            <li><strong>Term 3:</strong> 19 July - 17 September</li>
                            <li><strong>Term 4:</strong> 5 October - 8 December</li>
                        </ul>
                    </div>
                    <div className="column">
                        <SchoolList />

                        <h2>Policies</h2>
                        <ul>
                            <li><a
                                href="https://drive.google.com/file/d/1MsmsolaDk5OBghwUnyOAK93E2QoczMKK/view?usp=sharing"
                                target="_blank">Annual Report</a></li>
                            <li><a href="https://drive.google.com/open?id=1dJBkex2ITZy6aJdJoM0QU6_B7EwcxnRx"
                                   target="_blank">Privacy Policy</a></li>
                            <li><a href="https://drive.google.com/open?id=1rU_0PhKbP4dRdMxj0qT_aCxHXP-bSxzT"
                                   target="_blank">Child Protection Policy</a></li>
                            <li><a href="https://drive.google.com/open?id=1jRrLq_XioLCMxFvZsqPCquS1MJXpAXNT"
                                   target="_blank">Enrolment Policy</a></li>
                            <li><a href="https://drive.google.com/open?id=1NIdN7qK0es2P5Wvx-q06pZBuLux7UM7c"
                                   target="_blank">Complaint Policy</a></li>
                            <li><a href="https://drive.google.com/file/d/1sHwotiC_r0VIeuOGSw4APXq5z2YsrpIG/view"
                                   target="_blank" rel="nofollow noopener">Position on Marriage & Sexuality</a></li>
                            <li><a href="https://drive.google.com/file/d/14crL7SRRr_DvyiQnvM1b45Jhkbl-P1UO/edit"
                                   target="_blank" rel="nofollow noopener">Statement of Faith</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h2><a href="https://www.acc.edu.au/podcast/" target="_blank">ACC Podcast</a></h2>
                        <script src="https://feeds.feedburner.com/acc/podcast?format=sigpro"
                                type="text/javascript"></script>
                        <p><a href="https://www.acc.edu.au/podcast/">See more episodes</a></p>
                    </div>
                    <div className="column">
                        <LatestBlogPosts blogs={blogItems} />
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
                                <a href="https://www.facebook.com/ACCSingleton/" target="_blank" rel="noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.4" height="20">
                                        <path className="social-icon"
                                              d="M6.7 20v-9.1h3.1l.5-3.6H6.8V5c0-1 .3-1.7 1.8-1.7h1.9V.1C10.2.1 9.1 0 7.8 0 5.1 0 3.2 1.7 3.2 4.7v2.6H0v3.6h3.1V20h3.6z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="social-link facebook">
                                <a href="https://www.youtube.com/user/WatchACCSING" target="_blank" rel="noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.6" height="16.8">
                                        <path className="social-icon"
                                              d="M9.4 11.5V4.8l6.4 3.4-6.4 3.3zm14-7.9s-.2-1.6-.9-2.4c-.9-.9-1.9-1-2.4-1-3.3-.2-8.3-.2-8.3-.2s-5 0-8.3.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S0 5.5 0 7.5v1.8c0 1.9.2 3.9.2 3.9s.2 1.6.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 8 .2 8 .2s5 0 8.3-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.2-1.9.2-3.9V7.5c.1-2-.1-3.9-.1-3.9z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <a href="https://www.acc.edu.au/careers/" target="_blank">
                            <div className="resources-link">
                                <p><strong>CAREERS</strong></p>
                            </div>
                        </a>
                        <a href="https://sites.google.com/acc.edu.au/singleton-resources/home" target="_blank"
                           rel="noopener noreferrer">
                            <div className="resources-link">
                                <p><strong>PARENT</strong> PORTAL</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    </>
);
