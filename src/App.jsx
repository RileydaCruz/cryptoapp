// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import './App.css';
import TIAChecker from './TIAChecker';
import HomePage from './HomePage';
// import WalletInfoPage from './WalletInfoPage'




function App() {
  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white' , width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <header className="App-header"> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/TIAChecker/:tokenAmount" element={<TIAChecker/>}/>
          </Routes>
        </BrowserRouter>      
      </header>
    </div>
  );
}

export default App ;