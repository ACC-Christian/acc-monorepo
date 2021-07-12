import { lighten } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import SubscribeForm from 'SubscribeForm';

const SubscribeWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 6.5vw 7vw 7vw;

  @media(min-width: 768px){
    flex-direction: row;
      max-width: 1040px;

        > svg{
        position:relative;
        }
  }
`

const SubscribeImage = styled.div`
display: none;
visibility: hidden;
  @media(min-width: 768px){
    display: block;
    visibility: visible;
    width: 20%;
    margin-right: 4rem;

    .st0{fill:#e8ebec}
    .st1{fill:#fff}
    .st2{fill:#bdc3d8}
    .st3{fill:#21365f}
  }
`


const SubscribeFormSection = styled.section`
  margin: 1.5em 0;
  /* border: color(var(--whitegrey) l(+2%)) 1px solid; */
  border: ${lighten('0.02', colors.whitegrey)} 1px solid;
  text-align: left;
  /* background: color(var(--whitegrey) l(+4%)); */
  background: ${lighten('0.04', colors.whitegrey)};
  border-radius: 7px;

  p {
    margin-bottom: 1em;
    color: #414b56;
    font-size: 1.6rem;
    line-height: 1.55em;
    letter-spacing: 0.2px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;


  }

  .form-group {
    flex-grow: 1;
  }

  @media(min-width: 768px){
    display: block;
    visibility: visible;
    width: 80%;
    p {
      font-size: 2.2rem;
    }
  }
`;

const SubscribeFormTitle = css`
  margin: 0 0 1rem 0;
  padding: 0;
  color: ${colors.darkgrey};
  font-size: 3.5rem;
  line-height: 2.5rem;
  text-align: center;
  font-weight: 700;
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 3.6rem;
    text-align: left;
  }
`;

export interface SubscribeProps {
  title: string;
}

const Subscribe: React.FC<SubscribeProps> = props => {
  return (
      <SubscribeWrapper>
        <SubscribeImage>
          <svg xmlns="http://www.w3.org/2000/svg" width="153.03" height="150">
            <circle className="st0" cx="126.47" cy="90.24" r="26.56"/>
            <circle className="st0" cx="71.92" cy="22.77" r="22.77"/>
            <circle className="st0" cx="37.94" cy="112.06" r="37.94"/>
            <g>
              <path className="st1" d="M134.05 133.35v-6.59h-18.97v7.59h17.97c.56 0 1-.45 1-1z"/>
              <path className="st2"
                    d="M126.47 16.72l-11.38 18.97V136.14c0 1.1.9 2 2 2h18.77c1.1 0 2-.9 2-2V35.69l-11.39-18.97z"/>
              <path className="st1"
                    d="M134.05 29.37l-7.58-12.65-7.59 12.65 7.59 2.53zM134.05 36.96l-7.59 2.53v81.58h5.69a1.9 1.9 0 001.9-1.9V36.96zM115.08 35.69v85.38h5.69a1.9 1.9 0 001.9-1.9V38.22l-7.59-2.53z"/>
              <path className="st3"
                    d="M139.26 35.63c0-.06-.01-.12-.02-.18l-.03-.15c-.02-.05-.04-.11-.06-.16-.02-.05-.04-.1-.07-.14-.01-.01-.01-.03-.02-.04l-11.38-18.97c-.51-.86-1.93-.86-2.44 0l-11.38 18.97c-.01.01-.01.03-.02.04-.03.05-.04.09-.07.14-.02.05-.04.11-.06.16l-.03.14c-.01.06-.02.12-.02.18 0 .02-.01.04-.01.06v98.66c0 2.88 2.34 5.22 5.22 5.22h15.18c2.88 0 5.22-2.34 5.22-5.22V35.69c0-.02-.01-.04-.01-.06zm-22.76 89.71V37.67l8.54 2.85v84.82h-8.54zm11.39-84.83l8.54-2.85v87.67h-8.54V40.51zm-1.43-21.02l9.25 15.42-9.25 3.08-9.25-3.08 9.25-15.42zm9.96 114.86c0 1.31-1.06 2.37-2.37 2.37h-15.18c-1.31 0-2.37-1.06-2.37-2.37v-6.17h19.92v6.17z"/>
            </g>
            <g>
              <path className="st2"
                    d="M103.7 35.69H16.43v87.27c0 2.1 1.7 3.79 3.79 3.79h10.07v11.38l26.56-11.38H99.9c2.1 0 3.79-1.7 3.79-3.79V35.69z"/>
              <path className="st1" d="M92.31 35.69H16.43v83.47h73.88c1.1 0 2-.9 2-2V35.69z"/>
              <path className="st2" d="M103.7 35.69H16.43V18.72c0-1.1.9-2 2-2h83.27c1.1 0 2 .9 2 2v16.97z"/>
              <path className="st1" d="M94.11 30H16.43V18.72c0-1.1.9-2 2-2h77.68V28c0 1.1-.9 2-2 2z"/>
              <path className="st3"
                    d="M92.32 28.11c-.49 0-.99-.21-1.35-.57-.36-.34-.55-.84-.55-1.33 0-.51.19-.99.55-1.35.7-.7 1.99-.7 2.69 0 .34.36.55.83.55 1.35 0 .49-.21.97-.55 1.33-.36.36-.85.57-1.34.57zM79.04 26.21c0-1.06.83-1.9 1.9-1.9 1.04 0 1.9.83 1.9 1.9 0 1.04-.85 1.9-1.9 1.9-1.07 0-1.9-.85-1.9-1.9zM69.55 28.11c-.51 0-.99-.21-1.35-.57-.36-.36-.55-.84-.55-1.33 0-.51.19-.99.55-1.35.7-.72 1.97-.7 2.68 0 .36.36.57.83.57 1.35 0 .49-.21.99-.55 1.33-.36.36-.86.57-1.35.57z"/>
              <path className="st3"
                    d="M99.9 15.3H20.23c-2.88 0-5.22 2.34-5.22 5.22V122.97c0 2.88 2.34 5.22 5.22 5.22h8.64v9.96a1.432 1.432 0 001.98 1.32l26.29-11.27H99.9c2.88 0 5.22-2.34 5.22-5.22V20.51c0-2.87-2.34-5.21-5.22-5.21zm-82.05 5.21c0-1.31 1.06-2.37 2.37-2.37H99.9c1.31 0 2.37 1.06 2.37 2.37v13.75H17.85V20.51zm84.42 102.45c0 1.31-1.06 2.37-2.37 2.37H56.85c-.19 0-.38.04-.56.11l-24.58 10.53v-9.23c0-.79-.64-1.42-1.42-1.42H20.22c-1.31 0-2.37-1.06-2.37-2.37V37.11h84.42v85.85z"/>
              <path className="st2" d="M25.91 45.18h36.04v28.46H25.91z"/>
              <path className="st1" d="M47.26 67.95H25.91V45.18h30.35v13.77c0 4.97-4.02 9-9 9z"/>
              <path className="st3"
                    d="M61.96 75.06H25.91c-.79 0-1.42-.64-1.42-1.42V45.18c0-.79.64-1.42 1.42-1.42h36.04c.79 0 1.42.64 1.42 1.42v28.46c.01.78-.63 1.42-1.41 1.42zm-34.62-2.84h33.2V46.6h-33.2v25.62zM94.21 75.06H69.55a1.419 1.419 0 110-2.84h24.66a1.419 1.419 0 110 2.84zM77.14 84.55H47.37a1.419 1.419 0 110-2.84h29.77a1.419 1.419 0 110 2.84zM39.78 84.55H25.91a1.419 1.419 0 110-2.84h13.86c.79 0 1.42.64 1.42 1.42s-.63 1.42-1.41 1.42zM94.21 94.04H63.97a1.419 1.419 0 110-2.84h30.25c.79 0 1.42.64 1.42 1.42-.01.78-.64 1.42-1.43 1.42zM56.38 94.04H25.91a1.419 1.419 0 110-2.84h30.46c.79 0 1.42.64 1.42 1.42.01.78-.63 1.42-1.41 1.42zM94.21 46.6H69.55a1.419 1.419 0 110-2.84h24.66c.79 0 1.42.64 1.42 1.42.01.78-.63 1.42-1.42 1.42zM86.62 56.09H69.55a1.419 1.419 0 110-2.84h17.07c.79 0 1.42.64 1.42 1.42.01.78-.63 1.42-1.42 1.42zM94.21 65.57H84.06a1.419 1.419 0 110-2.84h10.16a1.419 1.419 0 11-.01 2.84zM76.47 65.57h-6.91a1.419 1.419 0 110-2.84h6.91a1.419 1.419 0 110 2.84zM94.21 103.52H53.77a1.419 1.419 0 110-2.84h40.44a1.419 1.419 0 110 2.84zM46.18 103.52H25.91a1.419 1.419 0 110-2.84h20.26c.79 0 1.42.64 1.42 1.42.01.78-.63 1.42-1.41 1.42zM82.83 113.01H69.19a1.419 1.419 0 110-2.84h13.64a1.419 1.419 0 110 2.84zM61.6 113.01H25.91a1.419 1.419 0 110-2.84H61.6a1.419 1.419 0 110 2.84z"/>
              <path className="st3"
                    d="M39.19 53.24h-2.37v-2.37a1.419 1.419 0 10-2.84 0v2.37h-2.37a1.419 1.419 0 100 2.84h2.37v2.37a1.419 1.419 0 102.84 0v-2.37h2.37c.79 0 1.42-.64 1.42-1.42.01-.78-.63-1.42-1.42-1.42zM52.48 62.73H50.1v-2.37a1.419 1.419 0 10-2.84 0v2.37h-2.37a1.419 1.419 0 100 2.84h2.37v2.37a1.419 1.419 0 102.84 0v-2.37h2.37c.79 0 1.42-.64 1.42-1.42a1.41 1.41 0 00-1.41-1.42z"/>
            </g>
          </svg>
        </SubscribeImage>
        <SubscribeFormSection>
          <h3 css={SubscribeFormTitle}>Did you enjoy this blog post?</h3>
          <p>Don't risk missing the next one.</p>
          <SubscribeForm />
        </SubscribeFormSection>
      </SubscribeWrapper>
  );
};

export default Subscribe;
