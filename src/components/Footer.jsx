import { FaGithub } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";


const Footer = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white flex gap-2 flex-col sm:flex-row items-center justify-between py-4 bg-[#1b1a2ea9] backdrop-blur-[15px]">
      <p className="md:w-[190px] lg:w-auto">Designed and Developed by Gideon Ayeni</p>
      <p className="lg:pr-50">Copyright &copy; {new Date().getFullYear()}</p>
      <ul className="flex flex-row gap-5 items-center justify-center">
        <a href="https://github.com/Gideon1107" target="_blank">
          <li className="cursor-pointer"><FaGithub size={20}/></li>
        </a>
        <a href="https://www.linkedin.com/in/gideon-ayeni/" target="_blank">
         <li className="cursor-pointer"><ImLinkedin2 size={20}/></li>
        </a>
      </ul>
    </div>
  )
}

export default Footer