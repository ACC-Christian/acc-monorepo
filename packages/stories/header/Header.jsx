import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../button/Button';
import { AccLogo } from '../AccLogo/AccLogo';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount, buttonLabelOne, buttonLabelTwo }) => (
  <header>
    <div className="wrapper">
      <AccLogo campus={'Singleton'} />
      <div>
        <Button primary size="large" label={buttonLabelOne} />
        <Button secondary size="large" label={buttonLabelTwo} />
        {/*<Button secondary size="large" href={`https://www.acc.edu.au/${campus}/principals-tour.html`} label={buttonLabel} />*/}
      </div>
    </div>
  </header>
);

// Header.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

Header.defaultProps = {
  buttonLabelOne: 'Dont forget to set the label on the page where the component us being used',
  buttonLabelTwo: 'Dont forget to set the label on the page where the component us being used',
};
