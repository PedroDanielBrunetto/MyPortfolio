'use client';
 
import './Navbar.module.css';
import Menu from '../../public/menu.svg';
import x from '../../public/x.svg';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { useState, useRef } from 'react';// useState = gerenciar o estado de algum valor

export default function Navbar() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    console.log(isActive)

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
            <button onClick={onClick} >
                <Image className={`menu-icon w-10 ${isActive ? "xC" : "xO"}`} src={Menu} alt="Menu Icon" />
                <Image className={`menu-icon w-10 ${isActive ? "xO" : "xC"}`} src={x} alt="X Icon" />
            </button>
            <ul ref={dropDownRef} className={`flex ${isActive ? "active" : "navbar"}`}>
                <li><a href="#inicio" onClick={onClick} className={` ${isActive ? "xC" : "xO"}`}>Inicio</a></li>
                <li><a href="#sobre" onClick={onClick} className={` ${isActive ? "xC" : "xO"}`}>Sobre mim</a></li>
                <li><a href="#habilidades" onClick={onClick} className={`  ${isActive ? "xC" : "xO"}`}>Habilidades</a></li>
                <li><a href="#projetos" onClick={onClick} className={`  ${isActive ? "xC" : "xO"}`}>Projetos</a></li>
                <li><a href="#contato" onClick={onClick} className={`  ${isActive ? "xC" : "xO"}`}>Contato</a></li>
                <li><a href="../../public/curriculo_PedroDanielBrunetto.pdf" type="application/pdf" download="curriculo_PedroDanielBrunetto.pdf" onClick={onClick} className={`  ${isActive ? "xC" : "xO"}`}>Curriculo</a></li>
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