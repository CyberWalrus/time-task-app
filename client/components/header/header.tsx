import React, { ReactElement, FunctionComponent } from 'react';
import BoxNotification from '../box-notification/box-notification';

const Header: FunctionComponent = (): ReactElement => (
  <header className="header-box">
    <div className="header-box__back">
      <button type="button" className="header-box__link">
        Back
      </button>
    </div>
    <div className="logo">
      <button type="button" className="logo__link">
        <img
          inline-size="5rem"
          block-size="5rem"
          className="logo__img"
          src="assets/img/walrus-icon-white.png"
          alt="walrus logo"
        />
      </button>
    </div>
    <div className="notification-container">
      <BoxNotification message="hello" />
    </div>
  </header>
);

export default Header;
