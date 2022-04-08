import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dragon } from "./components/spacex/dragons/dragons";
import {getDragon} from "./service/service";
import { Ships } from "./components/spacex/ships/ships";
import {getShips} from "./service/service";
import { Rockets } from "./components/spacex/rockets/rockets";
import {getRockets} from "./service/service";

export const App: FC = () => {
  const [show, setShow] = useState<boolean>(false);


  return (
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
      <div><a>
      <Dragon />
      <Ships />
     < Rockets/></a>
    </div>
  );
}

export default App;

