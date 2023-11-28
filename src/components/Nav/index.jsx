import { BiSolidHomeAlt2 } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import {FaCode} from 'react-icons/fa'
import './styles.css'

const Nav = () => {
  return (
    <div className="z-50 h-16 flex justify-center fixed w-screen bottom-0">

      <img className='fixed bottom-0 h-14 sm:h-16 left-0 ml-2 opacity-70' src="../img/moonHero.svg" alt="moonHero" />

      <div className="my-control flex items-center justify-center gap-3 sm:gap-10 bg-zinc-800 rounded-t-full border-gray-700 border-x-2 border-t-1 px-10 sm:px-16 pt-2 h-full">
        <a href="#contact"><AiFillPhone className="text-zinc-400 text-2xl sm:text-4xl" /> </a>
        <a href="#hero"><BiSolidHomeAlt2 className="text-zinc-400 text-2xl sm:text-4xl" /> </a>
        <a href="#myCode"><FaCode className="text-zinc-400 text-2xl sm:text-4xl"/> </a>
      </div>
    </div>
  )
}

export default Nav