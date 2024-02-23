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
import pawsy from '../img/pawsy.png'
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
              <a href="https://github.com/PedroDanielBrunetto/Curriculo">
                <FileArrowDown size={36} />
              </a>
            </div>
        </div>
        <div className="md:pt-4">
          <Image src={eu} alt="Pedro Daniel" className='rounded-full w-96 md:w-72'/>
        </div>
      </section>
      <section className="flex w-full justify-between items-center md:flex-col" id="sobre">
      <p className="p-1 text-[--second-color] text-lg">
        Olá! Sou um profissional apaixonado por tecnologia, contando com sólida experiência em desenvolvimento de software. Sou formado como Técnico em Desenvolvimento de Sistemas na Etec Dra. Ruth Cardoso e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Universidade Católica de Santos, enquanto atuo como estagiário de desenvolvimento de software na Marimex.
        <br/>
        Possuo habilidades avançadas em programação, abrangendo tanto aplicações web quanto para dispositivos móveis, utilizando diversas linguagens, frameworks e bibliotecas. Destaco-me pela eficácia na colaboração com equipes multidisciplinares, contribuindo ativamente com ideias e conhecimentos para atingir objetivos compartilhados. Minhas competências interpessoais incluem trabalho colaborativo e organização eficaz de projetos.
        <br/>
        Tenho expertise em planejar e gerenciar projetos de forma eficiente, assegurando o cumprimento de prazos e a entrega de resultados de alta qualidade. Mantenho-me constantemente atualizado e aprimorando minhas habilidades para atender às demandas do mercado, proporcionando soluções inovadoras e eficientes.
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
        Atualmente, ocupo a posição de Estagiário na Marimex, uma empresa renomada no setor portuário. Como parte integrante da equipe de desenvolvimento, tenho a oportunidade de contribuir para a melhoria contínua dos nossos softwares e participar ativamente de diversos projetos.<br/>

        No meu dia a dia, trabalho predominantemente com C#/.NET, ASP .NET MVC na maior parte das aplicações web, e crio Web APIs também com ASP .NET. Além disso, faço uso frequente do SQL Server para analisar e corrigir procedures e views, bem como para praticar diversos tipos de queries.<br/>

        {showFullContent ? (
          <>
            Embora a maior parte do meu trabalho envolva as tecnologias mencionadas acima, também tenho experiência com Web Forms/ Windows Forms em aplicações legadas e estou constantemente fazendo ajustes e criando WebServices.<br/>
            Essa diversidade de experiências e habilidades me permite ser um profissional versátil e adaptável, sempre pronto para enfrentar novos desafios e aprender novas tecnologias. Estou animado para continuar crescendo e evoluindo na minha carreira.<br/>
            <button onClick={() => setShowFullContent(false)}><p className='text-gray-500 underline'>Ver menos...</p></button>
          </>
        ) : (
          <button onClick={() => setShowFullContent(true)}><p className='text-gray-500 underline'>Ver mais...</p></button>
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
          <CardProjects nome="Sistema De Agendamento PetShop - Cão Amigo" imagem={CaoAmigo} url="https://github.com/PedroDanielBrunetto/PetShopSchedulingSystem" tecnologias={csharp} tecnologias2={dotnet} tecnologias3={mysql} tecnologias4={guna} about="O projeto é um software baseado em Windows Forms, desenvolvido em C# e utilizando a estrutura .NET. Projetado como uma ferramenta de estudo, ele se concentra na criação de um Software de Gestão para PetShop. Esta aplicação permite que o pet shop registre clientes, armazene detalhes dos animais e gerencie consultas de forma eficiente."/>
        </div>
        <div className="flex justify-center mt-20 md:mt-40">
          <CardProjects marbor="-mt-24" martoprespon="md:-mt-24" martop="-mt-40" nome="CRUD - Gestão de Cursos" imagem={CRUD} url="https://github.com/PedroDanielBrunetto/CoursesManagementCRUD" tecnologias={php} tecnologias2={mysql} tecnologias3={css} tecnologias4={js} about="Projeto desenvolvido em PHP, utilizando MySQL em conjunto com o phpMyAdmin, para praticar operações CRUD. O site está apenas disponível para Desktop."/>
        </div>
      </section>
      <section id="principal-projeto" className="w-full items-center">
        <div className="flex flex-col mb-24 text-center -mt-8">
          <h2 className="text-lg text-[--second-color] font-semibold">
            Meu principal projeto
          </h2>
          <h1 className="text-3xl text-[--main-color] font-bold">
            PAWSY
          </h1>
        </div>
        <div className="flex justify-between items-center md:flex-col gap-24">
          <p className='w-4/12 md:w-full p-1 text-[--second-color] text-lg'>
            O projeto PAWSY é fruto de um TCC muito bem desenvolvido por uma equipe que se impôs 100% dentro do que foi prometido e ultrapassando expectativas.<br/>
            Sendo o líder da equipe, fui o responsável com ajuda da equipe a definir o escopo em que desenvolveríamos, fazendo um trabalho completo com uma documentação rica e uma organização, com separações de funções, que foi muito importante para o aperfeiçoamento de todos.<br/>
            A plataforma foi desenvolvida 100% Web em ReactJS e NodeJS, utilizando a base de dados MySQL.
            <br/><a href='https://github.com/pawsy-oficial' className='underline italic'>Quer conhecer mais? Clique na imagem!</a>
          </p>
          <div className="relative w-2/4 h-96 md:w-full">
            <Image src={pawsy} className="rounded-2xl border-4 border-[--second-color]"/>
            <div className="absolute rounded-2xl h-96 inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <a className="text-white" href="https://github.com/pawsy-oficial">Clique e veja mais</a>
            </div>
          </div>  
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
