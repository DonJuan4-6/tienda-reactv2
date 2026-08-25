import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App(){
  const nombre = 'Diego';
  const ficha = 3409609;

  return (
    <main>
      <h1>Hola {nombre}</h1>
      <p>Ficha {ficha}</p>
    </main>
  );
}

export default App;