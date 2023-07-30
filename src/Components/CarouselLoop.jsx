import './CarouselLoop.module.css'

import insomnia from '../img/skillsIcons/apps-insomnia.svg'
import express from '../img/skillsIcons/express.svg'
import fastify from '../img/skillsIcons/fastify.svg'
import dotnet from '../img/skillsIcons/icons8-.net-framework-96.png'
import bootstrap from '../img/skillsIcons/icons8-bootstrap-96.png'
import csharp from '../img/skillsIcons/icons8-c-96.png'
import css3 from '../img/skillsIcons/icons8-css3-96.png'
import git from '../img/skillsIcons/icons8-git-96.png'
import js from '../img/skillsIcons/icons8-javascript-96.png'
import ts from '../img/skillsIcons/icons8-typescript-96.png'
import jwt from '../img/skillsIcons/icons8-jwt-96.png'
import mysql from '../img/skillsIcons/icons8-mysql-96.png'
import node from '../img/skillsIcons/icons8-node-js-96.png'
import react from '../img/skillsIcons/icons8-react-js-80.png'
import php from '../img/skillsIcons/icons8-php-80.png'
import tailwind from '../img/skillsIcons/icons8-tailwindcss-96.png'
import next from '../img/skillsIcons/next-js.svg'
import reactnative from '../img/skillsIcons/sdk-react-native.svg'
import figma from '../img/skillsIcons/icons8-figma-96.png'
import Image from 'next/image'

export default function CarouselLoop(){
  return(
    <div class="slider">
      <div class="slide-track">
          <div className='slide'><Image src={js} alt="tecnologies"/></div>
          <div className='slide'><Image src={ts} alt="tecnologies"/></div>
          <div className='slide'><Image src={react} alt="tecnologies"/></div>
          <div className='slide'><Image src={reactnative} alt="tecnologies"/></div>
          <div className='slide'><Image src={next} alt="tecnologies"/></div>
          <div className='slide'><Image src={node} alt="tecnologies"/></div>
          <div className='slide'><Image src={fastify} alt="tecnologies"/></div>
          <div className='slide'><Image src={express} alt="tecnologies"/></div>
          <div className='slide'><Image src={jwt} alt="tecnologies"/></div>
          <div className='slide'><Image src={css3} alt="tecnologies"/></div>
          <div className='slide'><Image src={tailwind} alt="tecnologies"/></div>
          <div className='slide'><Image src={bootstrap} alt="tecnologies"/></div>
          <div className='slide'><Image src={php} alt="tecnologies"/></div>
          <div className='slide'><Image src={mysql} alt="tecnologies"/></div>
          <div className='slide'><Image src={csharp} alt="tecnologies"/></div>
         <div className='slide'><Image src={dotnet} alt="tecnologies"/></div>
          <div className='slide'><Image src={git} alt="tecnologies"/></div>
          <div className='slide'><Image src={insomnia} alt="tecnologies"/></div>
          <div className='slide'><Image src={figma} alt="tecnologies"/></div>
          {/*DOUBLED*/}
          <div className='slide'><Image src={js} alt="tecnologies"/></div>
          <div className='slide'><Image src={ts} alt="tecnologies"/></div>
          <div className='slide'><Image src={react} alt="tecnologies"/></div>
          <div className='slide'><Image src={reactnative} alt="tecnologies"/></div>
          <div className='slide'><Image src={next} alt="tecnologies"/></div>
          <div className='slide'><Image src={node} alt="tecnologies"/></div>
          <div className='slide'><Image src={fastify} alt="tecnologies"/></div>
          <div className='slide'><Image src={express} alt="tecnologies"/></div>
          <div className='slide'><Image src={jwt} alt="tecnologies"/></div>
          <div className='slide'><Image src={css3} alt="tecnologies"/></div>
          <div className='slide'><Image src={tailwind} alt="tecnologies"/></div>
          <div className='slide'><Image src={bootstrap} alt="tecnologies"/></div>
          <div className='slide'><Image src={php} alt="tecnologies"/></div>
          <div className='slide'><Image src={mysql} alt="tecnologies"/></div>
          <div className='slide'><Image src={csharp} alt="tecnologies"/></div>
         <div className='slide'><Image src={dotnet} alt="tecnologies"/></div>
          <div className='slide'><Image src={git} alt="tecnologies"/></div>
          <div className='slide'><Image src={insomnia} alt="tecnologies"/></div>
          <div className='slide'><Image src={figma} alt="tecnologies"/></div>
      </div>
    </div>
  )
}