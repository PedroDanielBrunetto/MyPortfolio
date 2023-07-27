'use client'

import eu from '../img/eu.jpg'
import Image from 'next/image'
import Navbar from '../Components/Navbar.jsx'
import git from '../img/github-logo.svg'

export default function Home() {
  return (
    <main className="m-0 p-0 box-border scroll-pt-8 list-none scroll-smooth flex flex-col">
      <Navbar/>
      <section className="flex bg-[#eadbc9] w-full justify-between items-center md:flex-col">
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[--second-color]">
              Bem-vindo ao meu portifólio! 
            </h3>
            <h1 className="text-6xl text-[--main-color]">
              Pedro Daniel<br/>Brunetto Martinez
            </h1>
            <h2 className="uppercase text-4xl text-[--second-color]">
              Software Developer
            </h2>
            <a href="https://github.com/PedroDanielBrunetto">
              <Image src={git} alt="GitHub" className='w-9'/>
            </a>
        </div>
        <div className="">
          <Image src={eu} alt="Pedro Daniel" className='rounded-full'/>
        </div>
      </section>
    </main>
  )
}
