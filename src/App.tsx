import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
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
