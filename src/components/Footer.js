import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return (
      <Attribution>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="https://acielochoa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aciel Ochoa
        </a>
        .
      </Attribution>
    );
  }
}

const Attribution = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 11px;
  text-align: center;

  & a {
    color: hsl(228, 45%, 44%);
  }
`;

export default Footer;
