import React from 'react';
import styled from 'styled-components';

class ToggleSwitch extends React.Component {
  toggleChecked(e) {
    e.preventDefault();
    this.props.toggleChecked();
  }

  render() {
    return (
      <Switch>
        <Checkbox type="checkbox" checked={this.props.toggled} onChange={this.props.setToggled} />
        <Slider />
      </Switch>
    )
  }
}

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.1rem;
  height: 1.6rem;
  margin: 0 0.5rem;
`

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  background: linear-gradient(to right, rgb(151,156,237), rgb(101,106,187));
  border-radius: 0.8rem;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transition: 0.4s;

  &:hover {
    opacity: 0.5;
  }
  
  &::before {
    content: "";
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;
    left: 0.2rem;
    top: 0.2rem;
    transition: 0.4s;
  }

  ${Checkbox}:checked + &::before {
    transform: translateX(1.4rem);
  }

`

export default ToggleSwitch;