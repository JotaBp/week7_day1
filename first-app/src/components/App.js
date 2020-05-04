import React from 'react';
import './App.css';

/* --- UI COMPONENTS --- */
import Header from './ui/header/Header'
import Button from './ui/button/Button'
import Footer from './ui/footer/Footer'
import UserCard from './ui/card/Card'


/* --- NPM COMPONENTS --- */
import Player from 'react-player'


const App = () => {

  return (
    <>
      <Header />
      <main>
        <h1>Esto es React (un poquito)</h1>
        <hr />

        <h5>Ejemplo de envío de props a componentes funcionales descendientes</h5>
        <Button text="Soy el primer botón" />
        <Button text="Yo el segundo" />
        <hr />

        <h5>Ejemplo de aplicación de lógica dentro de un componente funcional</h5>
        <UserCard />

        <h5>Este es un componente de clase</h5>
        <Footer year="2020" />


        <h5>Este es un componente prefabricado</h5>
        <Player url="https://www.youtube.com/watch?v=kJQP7kiw5Fk" />
      </main>
    </>
  )
}

export default App;