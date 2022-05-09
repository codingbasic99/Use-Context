import React from 'react';
import './style.css';
import First from './First';

export const CounterContext = React.createContext();

export default function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      App
      <h5>{count}</h5>
      <CounterContext.Provider value={{count, setCount}}>

      <First />
      </CounterContext.Provider>
    </div>
  );
}
