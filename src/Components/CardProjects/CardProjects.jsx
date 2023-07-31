import Image from "next/image";
import { GitBranch } from 'phosphor-react'

export default function CardProjects(props){
  return(
    <div className="flex flex-col justify-between bg-[#1e3932] rounded-lg w-4/12 items-center p-4 max-h-[600px] md:flex md:flex-col md:h-auto md:w-full">
      <div className="-mt-10">
        <Image src={props.imagem} alt="Project" />
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="text-2xl text-[#ebdbc8] text-center">{props.nome}</h1>
        </div>
        <div className="flex">
          <p className="text-center text-lg text-[#ebdbc8] md:text-base">
            {props.about}
          </p>
        </div>
        <div className="flex justify-center gap-2 md:gap-1">
          <p className="text-base text-[#ebdbc8]">
            Tecnologias usadas:
          </p>
          <div className="w-6 md:w-6 md:h-6">
            <Image src={props.tecnologias} alt="Tecnologies" />
          </div>
          <div className="w-6 md:w-6 md:h-6">
            <Image src={props.tecnologias2} alt="Tecnologies" />
          </div>
          <div className="w-6 md:w-6 md:h-6">
            <Image src={props.tecnologias3} alt="Tecnologies" />
          </div>
          <div className="w-6 md:w-6 md:h-6">
            <Image src={props.tecnologias4} alt="Tecnologies"/>
          </div>
        </div>
        <div className="flex">
          <a href={props.url} className="flex justify-center items-center text-base text-[#ebdbc8] gap-4">
            Veja mais: <GitBranch size={32} color="#00adc2"/>
          </a>
        </div>
      </div>
    </div>
  )
}
