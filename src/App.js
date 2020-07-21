import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        Sarasa
      </Layout>
      <BurgerBuilder/>
    </div>
  );
}

export default App;
