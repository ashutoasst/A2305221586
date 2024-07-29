import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default App;