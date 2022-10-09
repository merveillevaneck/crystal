import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
