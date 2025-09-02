// rfec + Enter

// --->Hoja de Estilos
import './Layouts.css'
// --->Variable , ---> ubicacion
import LogoTipo from '../assets/Logo/logo.png'
import { useState } from 'react';
import Tarjetas from './Tarjetas';

function Layouts() {
  const[Carrito, setCarrito]=useState(0)

  let Condicional= true;

  function agregaralcarrito(){
    setCarrito(Carrito+1)
    console.log(Carrito)
  }
  return (
    <div>
        <header className="encabezado">
            {/* {} --> Para cargar variable */}
            <img src={LogoTipo} alt="Logo" />
            <nav className="menu">
                <a href="">Nosotros</a>
                <a href="">Productos</a>
                <a href="">Contactos</a>
                {/* Condicional && <h1> */}
                {Condicional ? <a href="">Logouts</a> :<a href="">Login</a>}
                
            </nav>
            {/* Ternario   ? (si)  :(no) */}
            {/* 
              Carrito llegue 10: Carrito Complete
              Sume el Carrito
            */}
            <p className="carrito">🛒{Carrito >=10 ? 'Carrito Completo' : Carrito}</p>
        </header>
        <section className="intermedio"></section>
        <main>
          <Tarjetas props={agregaralcarrito} />
        </main>
    </div>
  )
}

export default Layouts

