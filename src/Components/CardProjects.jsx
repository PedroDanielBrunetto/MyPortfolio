import Image from "next/image";
import { GitBranch } from 'phosphor-react'

export default function CardProjects(props){
  return(
    <div className="flex flex-col bg-[#1e3932] rounded-lg w-4/12  items-center p-4 gap-3 h-[600px] md:flex md:flex-col md:h-auto md:w-full">
      <Image src={props.imagem} alt="Project" className={`-mt-36 ${props.size}`}/>
      <div className={`flex flex-col gap-5 -mt-10 ${props.estilo}`}>
        <h1 className="text-2xl text-[#ebdbc8] text-center">{props.nome}</h1>
        <p className="text-center text-lg text-[#ebdbc8]">
          {props.about}
        </p>
        <div className="flex justify-center gap-2 md:gap-1">
          <p className="text-base text-[#ebdbc8]">
            Tecnologias usadas:
          </p>
          <Image src={props.tecnologias} alt="Tecnologies" className="w-6 md:w-6 md:h-6"/>
          <Image src={props.tecnologias2} alt="Tecnologies" className="w-6 md:w-6 md:h-6"/>
          <Image src={props.tecnologias3} alt="Tecnologies" className="w-6 md:w-6 md:h-6"/>
          <Image src={props.tecnologias4} alt="Tecnologies" className="w-6 md:w-6 md:h-6 "/>
        </div>
        <a href={props.url} className="flex justify-center items-center text-base text-[#ebdbc8] gap-4">
        Veja mais: <GitBranch size={32} color="#00adc2"/>
        </a>
      </div>
    </div>
  )
}