'use client';
 
import './Navbar.css';
import Menu from '../../public/menu.svg';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="w-full">
            <div className="logo">
               <h1 className="typewriter">
                <TypeAnimation
                    sequence={[
                        'Olá mundo, Eu sou o Pedro Daniel', 
                        1500, 
                        '<HelloWorld/>',
                        1000,
                        'Olá mundo, Eu sou o Pedro Daniel',
                        1500
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    />
               </h1>
            </div>
            <Image id="menu-icon" className='w-10' src={Menu} alt="Menu Icon" />
            <ul className="navbar flex">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#curriculo">Curriculo</a></li>
            </ul>
        </header>
    )
}

/*
Efeito maquina de escrever
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  } 
  .
*/