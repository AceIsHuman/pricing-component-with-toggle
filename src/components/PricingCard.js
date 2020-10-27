import React from 'react';
import styled from 'styled-components';

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
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.background ? props.background : '#ffffff')};
  padding: ${(props) => (props.centerCard ? '2rem 1rem' : '1rem')};
  text-align: center;
  border-radius: 1rem;
  color: ${(props) => (props.centerCard ? '#ffffff' : 'initial')};
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
  font-size: 3rem;
  font-weight: 500;

  &::before {
    content: '$';
    font-size: 2rem;
  }
`;

const Detail = styled.p`
  font-size: 1.2rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  width: 90%;
  &::after {
    ${divider}
  }
`;

export default PricingComponent;
