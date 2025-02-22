import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";



const Skills = () => {
  return (
    <div className="py-14">
        <div className="flex flex-row items-center justify-center ">
            <h1 className="text-4xl">Professional <span className="text-[#76d32e]">Skillset</span></h1>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap lg:px-30 py-16 gap-8 sm:gap-12 items-center justify-center ">
            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1 ">
                <FaReact size={30} />
                <span>React</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <IoLogoJavascript size={30} />
                <span>Javascript</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <IoLogoPython size={30} />
                <span>Python</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <SiTypescript size={30} />
                <span>Typescript</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <DiNodejs size={30} />
                <span>NodeJS</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <RiNextjsFill size={30} />
                <span>NextJS</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <SiFlask size={30} />
                <span>Flask</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <SiMongodb size={30} />
                <span>MongoDB</span>
            </div>

            <div
            className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110 cursor-pointer gap-1">
                <BiLogoPostgresql size={30} />
                <span>PostgreSQL</span>
            </div>

        </div>
    </div>
  )
}

export default Skills