import { FaGithub } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";

const FindMe = () => {
    return (
        <div className="flex w-full items-center justify-center py-10 ">
            <div className="text-white flex flex-col gap-8 w-full items-center ">
                <div className="flex flex-col items-center  gap-2">
                    <h1 className="text-4xl font-medium">FIND ME</h1>
                    <h3 className="text-base">Feel free to <span className="text-[#76d32e]">connect</span> with me</h3>
                </div>
                <div className="flex flex-row gap-7  w-full items-center justify-center">
                    <a href="https://github.com/Gideon1107" target="_blank">
                        <div className="bg-white p-3 rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_rgba(118,211,46,0.7)] transition-shadow duration-300"><FaGithub className="text-[#5aa422]" size={20} />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/gideon-ayeni/" target="_blank">
                        <div className="bg-white p-3 rounded-full cursor-pointer hover:shadow-[0_0_10px_5px_rgba(118,211,46,0.7)] transition-shadow duration-300"><ImLinkedin2 className="text-[#5aa422]" size={20} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FindMe