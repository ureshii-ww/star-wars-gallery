import React from 'react';
import AppRouter from './components/router/AppRouter';
import Navbar from './components/containers/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
