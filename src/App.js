import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import PricingCard from './components/PricingCard';

function App() {
  return (
    <AppContainer>
      <Header />
      <CardContainer>
        <PricingCard
          tier="Basic"
          monthlyPrice="19.99"
          annualPrice="199.99"
          storage="500 GB Storage"
          users="2 Users Allowed"
          limit="Send up to 3 GB"
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
        />
        <PricingCard
          tier="Master"
          monthlyPrice="39.99"
          annualPrice="399.99"
          storage="2 TB Storage"
          users="10 Users Allowed"
          limit="Send up to 20 GB"
        />
      </CardContainer>
      <Footer />
    </AppContainer>
  );
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
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export default App;
