import React from 'react';
import './App.scss';
import AppRouter from './AppRouter';
import Navbar from './shared/components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AppRouter />
    </div>
  );
}

export default App;
