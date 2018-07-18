import React from 'react';
import { css } from 'emotion';

import Container from './components/container';

const App = () => (
  <div
    className={css`
      text-align: center;
    `}
  >
    <header
      className={css`
        height: 40px;
        padding: 6px 0;
        background: #354044;
        text-align: right;
      `}
    >
      <div
        className={css`
          height: 28px;
          max-width: 1252px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          padding: 0 5%;
          line-height: 28px;
        `}
      >
        <img
          src="https://www.home24.com/homevierundzwanzig/dist-production/images/home24_logo.svg"
          className={css`
            max-height: 100%;
          `}
          alt="logo"
        />
      </div>
    </header>
    <Container />
  </div>
);

export default App;
