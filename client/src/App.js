import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Rotas from './routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;
