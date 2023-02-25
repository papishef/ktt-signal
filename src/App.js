import React from "react"
import Landing from './components/Landing/Landing';
import {Routes, Route } from 'react-router-dom';
import KttSignal from "./components/KttSignal/KttSignal";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/ktt-signal'} element={<KttSignal />} />
      </Routes>
    </div>
  );
}

export default App;
