import React from 'react';
import './App.css';
import { BudgetLists } from './components/BudgetLists/BudgetLists';
import { Header } from './components/Header/Header';
import { PriceContextProvider } from './components/Contexts/PriceContextProvider';

function App() {

  return (
    <div className="App">
      <PriceContextProvider>
        <Header />
        <BudgetLists />
      </PriceContextProvider>
    </div>
  );
}

export default App;
