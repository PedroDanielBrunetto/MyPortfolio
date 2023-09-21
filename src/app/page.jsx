'use client'

import Image from 'next/image'
import Navbar from '../Components/Navbar.jsx'
import CarouselLoop from '../Components/CarouselLoop.jsx'
import CardProjects from '../Components/CardProjects/CardProjects.jsx'

import Marimex from '../img/marimex.jpg'
import eu from '../img/euarrumado.jpg'
import git from '../img/github-logo.svg'
import email from '../img/microsoft-outlook-logo.svg'
import wpp from '../img/chats.svg'
import unisantos from '../img/WhatsApp Image 2023-07-27 at 20.40.58.jpeg'
import escolaSantos from '../img/Vectary texture.svg'
import CRUD from '../img/image 1.png'
import CaoAmigo from '../img/Vectary texture (2).svg'
import vite from '../img/skillsIcons/vite-icon.png'
import react from '../img/skillsIcons/icons8-react-js-80.png'
import tailwind from '../img/skillsIcons/icons8-tailwindcss-96.png'
import csharp from '../img/skillsIcons/icons8-c-96.png'
import dotnet from '../img/skillsIcons/icons8-.net-framework-96.png'
import php from '../img/skillsIcons/icons8-php-80.png'
import mysql from '../img/skillsIcons/icons8-mysql-96.png'
import js from '../img/skillsIcons/icons8-javascript-96.png'
import css from '../img/skillsIcons/icons8-css3-96.png'
import guna from '../img/skillsIcons/gunaui.png'
import { LinkedinLogo, Phone, Chats, DiscordLogo, Copyright, InstagramLogo, FileArrowDown } from 'phosphor-react'
import { useState } from 'react'

export default function Home() {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <main className="m-0 p-0 box-border scroll-pt-8 list-none scroll-smooth flex flex-col">
      <Navbar/>
      <section className="flex bg-[#eadbc9] w-full justify-between items-center md:flex-col" id="inicio">
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[--second-color] md:text-base">
              Bem-vindo ao meu portifólio! 
            </h3>
            <h1 className="text-6xl text-[--main-color] md:text-5xl">
              Pedro Daniel<br/>Brunetto Martinez
            </h1>
            <h2 className="uppercase text-4xl text-[--second-color] md:text-3xl">
              Software Developer
            </h2>
            <div className='flex gap-1'>
              <a href="https://github.com/PedroDanielBrunetto">
                <Image src={git} alt="GitHub" className='w-9'/>
              </a>
              <a href="https://linkedin.com/in/pedrodanielbrunetto">
                <LinkedinLogo size={36} />
              </a>
              <a href="mailto:pedrodanielbm@hotmail.com">
                <Image src={email} alt="Email" className='w-9'/>
              </a>
              <a href="https://wa.me/qr/7INTSQLCXNABD1">
                <Image src={wpp} alt="whatsapp" className='w-9'/>
              </a>
              <a href="../../public/curriculo_PedroDanielBrunetto.pdf" type="application/pdf" download="curriculo_PedroDanielBrunetto.pdf">
                <FileArrowDown size={36} />
              </a>
            </div>
        </div>
        <div className="md:pt-4">
          <Image src={eu} alt="Pedro Daniel" className='rounded-full w-96 md:w-72'/>
        </div>
      </section>
      <section className="flex w-full justify-between items-center md:flex-col" id="sobre">
        <div className='flex flex-col gap-4'>
          <Image src={unisantos} alt="Pedro Daniel" className=""/>
        </div>
          <p className="w-4/12 p-1 text-[--second-color] text-lg md:pt-9 md:w-full">
            Sou um estudante de 18 anos, atualmente cursando Técnico de Desenvolvimento de Sistemas na Etec Dra. Ruth Cardoso e graduando em Análise e Desenvolvimento de Sistemas na Universidade Católica de Santos.<br/>Possuo habilidades sólidas em desenvolvimento de software, tanto para web quanto para aplicativos, utilizando diversas linguagens de programação e frameworks.
          </p>
      </section>
        <h1 className="text-3xl text-[--main-color] text-center">
          Experiências profissionais
        </h1>
        <section id="Experiência" className="flex w-full justify-around items-center md:flex-col">
          <div className='flex flex-col'>
            <Image src={Marimex} alt="Pedro Daniel" className="w-96"/>
          </div>
          <p className="w-4/12 p-1 text-[--second-color] text-lg md:pt-9 md:w-full">
            Atualmente, ocupo a posição de Aprendiz de TI na Marimex, uma empresa renomada no setor portuário. Como parte integrante da equipe de desenvolvimento, tenho a oportunidade de contribuir para a melhoria contínua dos nossos softwares e participar ativamente de diversos projetos.<br/>

            No meu dia a dia, trabalho predominantemente com o .NET Framework. No front-end, utilizo ASP .NET MVC, enquanto no back-end, crio Web APIs também com ASP .NET. Além disso, faço uso frequente do SQL Server para analisar e corrigir procedures e views, bem como para praticar diversos tipos de queries.<br/>

            {showFullContent ? (
              <>
                Embora a maior parte do meu trabalho envolva as tecnologias mencionadas acima, também tenho experiência com Web Forms em aplicações legadas e estou atualmente envolvido em um novo projeto que utiliza React.JS.<br/>
                Essa diversidade de experiências e habilidades me permite ser um profissional versátil e adaptável, sempre pronto para enfrentar novos desafios e aprender novas tecnologias. Estou ansioso para continuar crescendo e evoluindo na minha carreira em TI.<br/>
              </>
            ) : (
              <button onClick={() => setShowFullContent(true)} ><p className='text-gray-500 underline'>Ver mais...</p></button>
            )}
          </p>
        </section>

      <section id="habilidades" className="flex flex-col text-center ">
        <h1 className="text-3xl text-[--main-color]">
          Tecnologias que eu utilizo e estudo:
        </h1>
        <div>
          <CarouselLoop/> 
        </div>
      </section>
      <section id="projetos" className="w-full items-center">
        <div className="flex flex-col mb-48 text-center -mt-8">
          <h2 className="text-lg text-[--second-color] font-semibold">
            Conheça agora
          </h2>
          <h1 className="text-3xl text-[--main-color] font-bold">
            ALGUNS PROJETOS
          </h1>
        </div>
        <div className="flex justify-between gap-6  md:flex-col md:gap-40">
          <CardProjects nome="Quiz App - Escola Santos" imagem={escolaSantos} url="https://github.com/PedroDanielBrunetto/FirstMobile-QuizApp" tecnologias={js} tecnologias2={react} tecnologias3={vite} tecnologias4={tailwind} about="Um website mobile desenvolvido com React para o curso de Programação Mobile na Etec Dra. Ruth Cardoso. Ele proporciona uma experiência otimizada para usuários de dispositivos móveis, contando com uma interface intuitiva e uma navegação fluida."/>
          <CardProjects marbor="-mt-32" martoprespon="md:-mt-8" martop="-mt-60" nome="CRUD - Gestão de Cursos" imagem={CRUD} url="https://github.com/PedroDanielBrunetto/CoursesManagementCRUD" tecnologias={php} tecnologias2={mysql} tecnologias3={css} tecnologias4={js} about="Projeto desenvolvido em PHP, utilizando MySQL em conjunto com o phpMyAdmin, para praticar operações CRUD. O site está apenas disponível para Desktop."/>
          <CardProjects nome="Sistema De Agendamento PetShop - Cão Amigo" imagem={CaoAmigo} url="https://github.com/PedroDanielBrunetto/PetShopSchedulingSystem" tecnologias={csharp} tecnologias2={dotnet} tecnologias3={mysql} tecnologias4={guna} about="O projeto é um software baseado em Windows Forms, desenvolvido em C# e utilizando a estrutura .NET. Projetado como uma ferramenta de estudo, ele se concentra na criação de um Software de Gestão para PetShop. Esta aplicação permite que o pet shop registre clientes, armazene detalhes dos animais e gerencie consultas de forma eficiente."/>
        </div>
      </section>
      <section id="contato" className="flex flex-col bg-[#eadbc9] w-full ">
        <h1 className="text-2xl text-[--main-color] text-center pb-5 font-bold">ENTRE EM CONTATO:</h1>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/pedrodanielbrunetto/">
            <LinkedinLogo size={32} />
          </a>
          <a href="tel:+5513992043766">
            <Phone size={32} />
          </a>
          <a href="https://wa.me/qr/7INTSQLCXNABD1">
            <Chats size={32} />
          </a>
          <a href="https://discord.gg/bXMHB48Q">
            <DiscordLogo size={32} /> 
          </a>
          <a href="mailto:pedrodanielbm@hotmail.com">
                  <Image src={email} alt="Email" className='w-8'/>
                </a>
          <a href="https://www.instagram.com/pedrodanielbrunetto/">
            <InstagramLogo size={32} />
          </a>
        </div>
        <div className="flex justify-center items-center pt-5 text-lg gap-2"><Copyright size={32} />Pedro Daniel Brunetto</div>
      </section>
    </main>
  )
}
