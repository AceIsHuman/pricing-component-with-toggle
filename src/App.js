import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import PricingCard from './components/PricingCard';

import bgBottom from './images/bg-bottom.svg';
import bgTop from './images/bg-top.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: true };

    // allow `this` to work in the callback
    this.setToggled = this.setToggled.bind(this);
  }

  setToggled() {
    this.setState((state) => ({ toggled: !state.toggled }));
  }

  render() {
    return (
      <AppContainer>
        <Background />
        <BgBottom src={bgBottom} alt="background-bottom" />
        <BgTop src={bgTop} alt="background-top" />
        <Header toggled={this.state.toggled} setToggled={this.setToggled} />
        <CardContainer>
          <PricingCard
            tier="Basic"
            monthlyPrice="19.99"
            annualPrice="199.99"
            storage="500 GB Storage"
            users="2 Users Allowed"
            limit="Send up to 3 GB"
            toggled={this.state.toggled}
          />
          <PricingCard
            tier="Professional"
            monthlyPrice="24.99"
            annualPrice="249.99"
            storage="1 TB Storage"
            users="5 Users Allowed"
            limit="Send up to 10 GB"
            background="linear-gradient(to bottom, rgb(151,156,237), rgb(101,106,187))"
            centerCard
            toggled={this.state.toggled}
          />
          <PricingCard
            tier="Master"
            monthlyPrice="39.99"
            annualPrice="399.99"
            storage="2 TB Storage"
            users="10 Users Allowed"
            limit="Send up to 20 GB"
            toggled={this.state.toggled}
          />
        </CardContainer>
        <Footer />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  font-family: sans-serif;

  @media (max-width: 700px) {
    justify-content: flex-start;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media (max-width: 1000px) {
    width: 95%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const BgTop = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;

  @media (max-width: 700px) {
    width: 75%;
    height: 75%;
    right: -30%;
  }
`;
const BgBottom = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #e7e7ff;
  z-index: -2;
`;

export default App;
