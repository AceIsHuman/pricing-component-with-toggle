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
          <Price dataPlan="monthly">{this.props.monthlyPrice}</Price>
          <Price dataPlan="annually">{this.props.annualPrice}</Price>
        </Header>
        <Detail>{this.props.storage}</Detail>
        <Detail>{this.props.users}</Detail>
        <Detail>{this.props.limit}</Detail>
      </Card>
    );
  }
}

const divider = `content: "";
width: 100%;
height: 0.1rem;
background-color: #aaaaaa;`;

const Card = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.background ? props.background : '#ffffff')};
  padding: ${(props) => (props.centerCard ? '2rem 1rem' : '1rem')};
  text-align: center;
`;

const Header = styled.div`
  &::after {
    ${divider}
  }
`;

const Title = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
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
  font-size: 1.4rem;
  &::after {
    ${divider}
  }
`;

export default PricingComponent;
