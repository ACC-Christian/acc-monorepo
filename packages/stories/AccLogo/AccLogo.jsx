import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: montserrat,arial,sans-serif;
  a{
    max-width: 210px;
    top: 0;
    left: 0;
    z-index: 600;
    padding: 0;
    min-width: 200px;
    height: 70px;
    
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }
`;


const Shield = styled.svg`
  flex-shrink: 0;
  display: block;
  margin-right: 5px;
  padding: 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;
  
  height: auto;
  width: 30%;
`;

const TextWrapper = styled.span`
    font-size: 18px;
    text-decoration: none;
    width: 70%;
    height: 33px;
    padding-left: 0;
    margin: 5% 0 0 0 ;
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    font-size: .85vw;


    
      >.australian {
        font-weight: 500;
        font-size: 1.725em;
        line-height: 100%;
        letter-spacing: 0px;
      }

      >.christian-college {
        font-weight: 500;
        font-size: 1.07em;
        /* letter-spacing: 0px; */
        line-height: 100%;
      }

      >.campus {
        font-weight: 400;
        font-size: .6em;
        align-self: flex-end;
        justify-self: self-end;
        line-height: 100%;
        text-transform: uppercase;
      }
  
`;

export const AccLogo = ({ primary, campus, color, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
    <Wrapper>
        <a title="{`Australian Christian College ${campus} logo`}" className="animate-link" href="https://www.acc.edu.au/singleton/index.html">
            <Shield {...props}  className={`Logo`} id="acc-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 300">
                <g>
                    <g>
                        <g>
                            <g>
                                <path fill="#FFFFFF" d="M258.4,28.6C232.9,14.9,196.7,1.9,130.9,1.9C67.3,1.9,34.1,13.4,3.3,28.6C0.4,30-0.6,138.4,28.9,195.9
					c31.1,60.7,73.6,77,101.9,89c28.3-12,70.8-28.3,101.9-89C262.3,138.4,261.3,30.1,258.4,28.6z"/>
                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="50.0098" y1="-9.1108"
                                                x2="227.4855" y2="225.7032">
                                    <stop offset="0" stopColor="#3265AD"/>
                                    <stop offset="0.1524" stopColor="#2F5EA3"/>
                                    <stop offset="1" stopColor="#1D3561" />
                                </linearGradient>
                                <path fill="url(#SVGID_1_)" d="M130.9,287l-3.8-1.6c-27.7-11.7-69.5-29.4-99.9-88.6C-1.7,140.4-1.6,37.1,1.2,28.5
					c0.1-0.3,0.4-1.2,1.2-1.6C36.1,10.3,69.3,0,130.9,0c69.3,0,105.1,14.4,128.5,26.9l0,0c1,0.5,2.3,1.2,2.3,20.4
					c0,7.7-0.2,23.6-2.1,44.1c-2.8,31.1-9.4,74.6-25.2,105.4c-30.3,59.2-72.2,76.9-99.9,88.6L130.9,287z M4.7,30
					C2.7,38.3,2,139.1,30.6,195.1c29.7,58,69.2,74.7,98,86.9l2.3,1l2.3-1c28.8-12.2,68.2-28.8,98-86.9
					C259.7,139.3,258.9,38.2,257,30C234,17.7,198.8,3.8,130.9,3.8C70.4,3.8,37.7,13.8,4.7,30z M257.5,30.3
					C257.5,30.3,257.5,30.3,257.5,30.3L257.5,30.3C257.5,30.3,257.5,30.3,257.5,30.3z M4.8,29.6 M256.9,29.6L256.9,29.6L256.9,29.6z
					"/>
                            </g>
                            <g>
                                <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="61.3794" y1="8.2816"
                                                x2="219.0117" y2="216.8413">
                                    <stop offset="0" stopColor="#3265AD"/>
                                    <stop offset="0.1524" stopColor="#2F5EA3"/>
                                    <stop offset="1" stopColor="#1D3561"/>
                                </linearGradient>
                                <path fill="url(#SVGID_2_)" d="M251.9,34.4c-24.2-13-58.6-25.3-121.1-25.3C70.5,9.1,39,20,9.8,34.4C7,35.8,6.1,138.6,34.1,193.2
					c29.5,57.7,69.9,73.1,96.7,84.5c26.9-11.4,67.2-26.8,96.7-84.5C255.6,138.6,254.6,35.9,251.9,34.4z M69.8,158.1
					c0,0-1.9-20.9-1.2-24.2c4.8-24,117.1-33.6,152.1-35.1C220.6,98.8,83.5,121.1,69.8,158.1z M67.3,121.4c0,0-2.4-18.2,2.9-21.4
					c10.2-6.1,100.7-13.8,159.9-4.6C230,95.4,82.1,97.1,67.3,121.4z M61.3,91.6c0.1,33.8,4.1,81.8,19.1,146.4
					c0,0-22.6-49.2-25.2-142.8c0-0.9,0-1.7-0.1-2.6c-17.1,2.9-25.4,5.3-26.7,3.6c-2.9-3.9-18.1-9.6,26.4-13.4
					c-1.6-79.1,4.7-59.5,9.5-56.6c2.6,1.6-2.5,19-3.1,56.1c9.3-0.7,20.8-1.3,34.9-1.8c91-3.3,144.5,11.6,144.5,11.6
					C150.4,81.2,93.3,86.6,61.3,91.6z"/>
                            </g>
                        </g>
                        <path fill="#A1A2A1"
                              d="M69.8,158.1c0,0-0.7-7.9-1.1-14.7c-0.2-4.3,21.4-25.1,152-44.6C220.6,98.8,83.5,121.1,69.8,158.1z"/>
                        <path fill="#A1A2A1"
                              d="M67.3,121.4c0,0-0.4-2.8-0.5-6.4c-0.2-5.6,50.3-20.5,163.3-19.6C230,95.4,82.1,97.1,67.3,121.4z"/>
                    </g>
                </g>
            </Shield>

            <TextWrapper id="logo-title" className="">
                <span className="australian" style={{ color: `${color}`}}>AUSTRALIAN</span>
                <span className="christian-college" style={{ color: `${color}`}}>CHRISTIAN COLLEGE</span>
                <span className="campus" style={{ color: `${color}`}}>{campus}</span>
            </TextWrapper>
        </a>
    </Wrapper>
    );
};

AccLogo.defaultProps = {
    primary: false,
    color: '#000',
    campus: undefined,
};
