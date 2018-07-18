import React from 'react';
import { css, keyframes } from 'emotion';

const animation = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
`;

const LoadingSpinner = () => (
  <div
    className={css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  >
    <div
      className={css`
        width: 40px;
        height: 40px;

        .sk-cube {
          width: 33%;
          height: 33%;
          background-color: #445257;
          float: left;
          animation: ${animation} 1.3s infinite ease-in-out;
        }

        .sk-cube7 {
          animation-delay: 0s;
        }
        .sk-cube4,
        .sk-cube8 {
          animation-delay: 0.1s;
        }
        .sk-cube1,
        .sk-cube5,
        .sk-cube9 {
          animation-delay: 0.2s;
        }
        .sk-cube2,
        .sk-cube6 {
          animation-delay: 0.3s;
        }
        .sk-cube3 {
          animation-delay: 0.4s;
        }
      `}
    >
      <div className="sk-cube sk-cube1" />
      <div className="sk-cube sk-cube2" />
      <div className="sk-cube sk-cube3" />
      <div className="sk-cube sk-cube4" />
      <div className="sk-cube sk-cube5" />
      <div className="sk-cube sk-cube6" />
      <div className="sk-cube sk-cube7" />
      <div className="sk-cube sk-cube8" />
      <div className="sk-cube sk-cube9" />
    </div>
  </div>
);

export default LoadingSpinner;
