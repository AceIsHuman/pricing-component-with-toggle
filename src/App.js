import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';

function App() {
  return (
    <AppContainer className="App">
      Our Pricing
      Annually
      Monthly

      Basic
      &dollar;19.99
      &dollar;199.99
      500 GB Storage
      2 Users Allowed
      Send up to 3 GB
      Learn More

      Professional
      &dollar;24.99
      &dollar;249.99
      1 TB Storage
      5 Users Allowed
      Send up to 10 GB
      Learn More

      Master
      &dollar;39.99
      &dollar;399.99
      2 TB Storage
      10 Users Allowed
      Send up to 20 GB
      Learn More

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
`

export default App;
