import React, { Suspense } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import './app.css';
import Router from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading">
        <h1>
          <Link to="/">
            Orchestrator
          </Link>
        </h1>
        <h2>Choose your app:</h2>
        <ul>
          <li>
            <Link to="/module-1">Módulo 1</Link>
          </li>
          <li>
            <Link to="/module-2">Módulo 2</Link>
          </li>
        </ul>
        <div>
          <Router />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
