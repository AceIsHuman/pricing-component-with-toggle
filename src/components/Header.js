import React from 'react';
import styled from 'styled-components';

import ToggleSwitch from './ToggleSwitch';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: true };

    // allow `this` to work in the callback
    this.setToggled = this.setToggled.bind(this);
  }

  setToggled() {
    this.setState(state => ({ toggled: !state.toggled }));
  }

  render() {
    return (
      <>
        <Title>Our Pricing</Title>
        <ToggleContainer>
          <Option>Annually</Option>
          <ToggleSwitch
            toggled={this.state.toggled}
            setToggled={this.setToggled}
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
