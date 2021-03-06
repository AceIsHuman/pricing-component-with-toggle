import React from 'react';
import styled from 'styled-components';
import Button from './forms/Button';

class PricingComponent extends React.Component {
  render() {
    return (
      <Card
        background={this.props.background}
        centerCard={this.props.centerCard}
      >
        <Header>
          <Title>{this.props.tier}</Title>
          <Price dataPlan="monthly" hidden={!this.props.toggled}>
            {this.props.monthlyPrice}
          </Price>
          <Price dataPlan="annually" hidden={this.props.toggled}>
            {this.props.annualPrice}
          </Price>
        </Header>
        <Detail>{this.props.storage}</Detail>
        <Detail>{this.props.users}</Detail>
        <Detail>{this.props.limit}</Detail>
        <Button
          background={this.props.centerCard ? '#fff' : null}
          color={this.props.centerCard ? 'rgb(151,156,237)' : null}
          width="90%"
        >
          Learn More
        </Button>
      </Card>
    );
  }
}

const divider = `
  content: "";
  width: 100%;
  height: 1px;
  background-color: #bbbbbb;
  margin-top: 1rem;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => (props.background ? props.background : '#ffffff')};
  padding: ${props => (props.centerCard ? '2rem 1rem' : '1rem')};
  text-align: center;
  border-radius: 1rem;
  color: ${props => (props.centerCard ? '#ffffff' : 'initial')};

  @media (min-width: 700px) {
    &:nth-child(1) {
      border-radius: 1rem 0 0 1rem;
    }

    &:nth-child(3) {
      border-radius: 0 1rem 1rem 0;
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;

const Header = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 90%;
  &::after {
    ${divider}
  }
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 1rem;
`;

const Price = styled.span`
  font-size: 3.4rem;
  font-weight: 600;

  &:not([hidden]) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::before {
    content: '$';
    font-size: 2rem;
    margin-right: 0.4rem;
  }
`;

const Detail = styled.p`
  font-size: 1rem;
  font-weight: 600;
  font-kerning: none;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 1rem;
  &::after {
    ${divider}
  }
`;

export default PricingComponent;
