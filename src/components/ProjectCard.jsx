import { FaGithub } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import PropTypes from "prop-types"

const ProjectCard = ({image, name, description, gitLink, liveLink, live}) => {
  return (
    <div className="border-[1px] border-[#76d32e] flex flex-col items-center p-4 sm:p-4 lg:p-8 shadow-[0_0_10px_5px_rgba(34,102,41,0.459)] bg-transparent transition duration-500 ease-in-out hover:scale-101 opacity-90 hover:opacity-100 sm:hover:shadow-[0_0_20px_5px_rgba(44,112,51,0.561)] cursor-pointer">
        <img src={image} alt="" className="w-[400px]"/>
        <div className="pt-4">
            <h1 className="text-xl text-center pb-3">{name}</h1>
            <p className="leading-normal text-justify ">{description}</p>
            <div className="flex flex-row gap-5 pt-5">
            <a href={gitLink} target="_blank">
                <button className="p-3 bg-[#406a20] flex items-center gap-2 font-medium  cursor-pointer rounded-sm"><FaGithub/> Github</button>
            </a>

            { live && 
            <a href={liveLink} target="_blank">
                <button className="p-3 bg-[#406a20] flex items-center gap-2 font-medium cursor-pointer rounded-sm"><CgWebsite/> Demo</button>
            </a>
            }
            </div>
        </div>
    </div>
  )
}

// Prop Validation
ProjectCard.propTypes = {
    image: PropTypes.string.isRequired, // image should be a string and is required
    name: PropTypes.string.isRequired, // name should be a string and is required
    description: PropTypes.string.isRequired, // description should be a string and is required
    gitLink: PropTypes.string.isRequired, // gitLink should be a string and is required
    liveLink: PropTypes.string.isRequired, // liveLink should be a string and is required
    live: PropTypes.bool.isRequired // live should be boolean and is required
  };


export default ProjectCard