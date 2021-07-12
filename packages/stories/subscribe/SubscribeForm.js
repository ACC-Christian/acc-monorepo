import { darken, desaturate } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import config from 'website-config';

const SubscribeFormStyles = css`
    -ms-flex-direction: column;
    flex-direction: column;
  display: flex;
  margin-bottom: 3rem;

    @media (min-width: 768px) {
      -ms-flex-direction: row;
      flex-direction: row;
    }
`;

const FormGroup = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 66.66%;
    flex-direction: row;
  }
`;

const TextInput = styled.input`
  display: block;
  padding: 15px;
  width: 100%;
  margin: 0 0 1rem 0;
  color: #0a0c0d;
  font-size: 1.5rem;
  line-height: 1em;
  font-weight: normal;
  user-select: text;
  border: 1px solid #C8C8C8;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;
  :focus {
    outline: 0;
    /* border-color: color(var(--lightgrey) l(-2%)); */
    border-color: ${darken('0.02', colors.lightgrey)};
  }

  @media(min-width: 768px){
    width: calc(50% - 1rem);
    margin: 0;

    :nth-of-type(1){margin-right: 1rem;}
    :nth-of-type(2){margin-right: 1rem;}
  }
`;

const SubscribeFormButton = styled.button`
      outline: 0;
      display: inline-flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      border: 0;
      border-radius: .4rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      padding: 1.3rem 3rem;
      color: #fff;
      font-family: montserrat, sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      overflow: hidden;
      cursor: pointer;
      background-color: #0069b4;

      :active,
      :focus {
        /* background: color(var(--blue) lightness(-9%) saturation(-10%)); */
        background: ${desaturate('0.1', darken('0.09', colors.blue))};
      }
      @media (min-width: 768px) {
        margin: 0;
        width: calc(33.333% - 1rem);
      }

      > span{
        margin: auto;
      }
    `;



const SubscribeForm: React.FC = () => {
  return (
    <form
      css={SubscribeFormStyles}
      action={config.mailchimpAction}
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      rel="noopener noreferrer"
      noValidate
    >
      {/* This is required for the form to work correctly  */}
      <FormGroup className="form-group">
        <TextInput
          className="subscribe-email"
          type="email"
          name={config.mailchimpEmailFieldName}
          id={config.mailchimpEmailFieldName}
          placeholder="Enter your email"
          tabIndex={1}
        />

        <TextInput type="text" name={config.mailchimpPostcode} id={config.mailchimpPostcode} tabIndex={2} placeholder="Enter your postcode" />

      </FormGroup>

      <div style={{ position: 'absolute', left: '-5000px', visibility: 'hidden' }} aria-hidden="true">
        <input type="text" name={config.mailchimpName} tabIndex={-1} />
        <input type="radio" checked value="Yes" name={config.mailchimpSubscribe} id={config.mailchimpSubscribe} />
      </div>

      <div className="mc-field-group input-group" style={{ display: 'none' }}>
        <input checked type="checkbox" value="131072" name="group[5972][131072]" id="mce-group[5972]-5972-4" />
        <label htmlFor="mce-group[5972]-5972-4">accBlog</label>
      </div>
      <SubscribeFormButton type="submit"  tabIndex={3}>
        <span>Subscribe</span>
      </SubscribeFormButton>
    </form>
  );
};

export default SubscribeForm;
