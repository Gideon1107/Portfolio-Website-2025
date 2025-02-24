import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaSlack } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";


const skills = [
    {
        name: "React",
        icon: <FaReact size={30}/>
    },
    {
        name: "Javascript",
        icon: <IoLogoJavascript size={30} />
    },
    {
        name: "Python",
        icon: <IoLogoPython size={30} />
    },
    {
        name: "Typescript",
        icon:  <SiTypescript size={30} />
    },
    {
        name: "NodeJS",
        icon: <DiNodejs size={30} />
    },
    {
        name: "NextJS",
        icon: <RiNextjsFill size={30} />
    },
    {
        name: "Flask",
        icon: <SiFlask size={30} />
    },
    {
        name: "MongoDB",
        icon: <SiMongodb size={30} />
    },
    {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql size={30} />
    }
]

const tools = [
    {
        name: "Git",
        icon: <FaGitAlt size={30} />
    },
    {
        name: "Redux",
        icon: <TbBrandRedux size={30} />
    },
    {
        name: "Postman",
        icon: <SiPostman size={30} />
    },
    {
        name: "Redis",
        icon: <DiRedis size={30} />
    },
    {
        name: "Slack",
        icon: <FaSlack size={30} />
    },
    {
        name: "Docker",
        icon: <FaDocker size={30} />
    }

]




export default skills;
export {tools}