import React from "react"
import Landing from './components/Landing/Landing';
import {Routes, Route } from 'react-router-dom';
import KttSignal from "./components/KttSignal/KttSignal";
import Tirobs from "./components/Tirobs/Tirobs";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/ktt-signal'} element={<KttSignal />} />
        <Route path={'/tirobs'} element={<Tirobs />} />
      </Routes>
    </div>
  );
}

export default App;
