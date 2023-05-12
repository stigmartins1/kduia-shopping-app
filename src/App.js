import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
/* import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location'; */

import A from './components/A';
import Abbr from './components/Abbr';
import Address from './components/Address';
import Area from './components/Area';
import Article from './components/Article';
import Aside from './components/Aside';
import ArrayMap from './components/ArrayMap';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">HTML Elements</a></h1>
      <A url="https:/url.com" email="me@email.com" phone="+555 123 456"/>
      <Abbr />
      <Address email="another@email.com" phone="+555 987 654"/>
      <Area />
      <Article />
      <Aside />
      <ArrayMap />
      <Button />
    </div>
  );
}

export default App;
