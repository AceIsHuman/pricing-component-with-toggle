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
            background="rgb(151,156,237)"
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
  height: 100vh;
  text-align: center;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #e7e7ff;
  position: relative;
  z-index: -2;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const BgTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;
const BgBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export default App;
