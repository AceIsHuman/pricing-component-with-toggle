import React from 'react';
import styled from 'styled-components';

import ToggleSwitch from './ToggleSwitch';

class Header extends React.Component {
  render() {
    return (
      <>
        <Title>Our Pricing</Title>
        <ToggleContainer>
          <Option>Annually</Option>
          <ToggleSwitch
            toggled={this.props.toggled}
            setToggled={this.props.setToggled}
          />
          <Option>Monthly</Option>
        </ToggleContainer>
      </>
    );
  }
}

const Title = styled.h2`
  color: #5f5f5f;
  font-size: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    margin-top: 2rem;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  margin-bottom: 2rem;
`;

const Option = styled.span`
  font-size: 1rem;
  color: #aaaaaa;
`;

export default Header;
