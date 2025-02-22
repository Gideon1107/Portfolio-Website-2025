import { FaGitAlt } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaSlack } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";


const Tools = () => {
  return (
    <div className="pb-20">
        <div className="flex flex-row items-center justify-center ">
            <h1 className="text-4xl"><span className="text-[#76d32e]">Tools</span> I Use</h1>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap lg:px-60 py-12 gap-8 sm:gap-12 items-center justify-center">
            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1">
                <FaGitAlt size={30} />
                <span>Git</span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1">
                <TbBrandRedux size={30} />
                <span>Redux</span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1">
                <SiPostman size={30} />
                <span>Postman</span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1">
                <DiRedis size={30} />
                <span>Redis</span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer gap-1">
                <FaSlack size={30} />
                <span>Slack</span>
            </div>

            <div className="flex flex-col items-center justify-center py-4 w-32 border-[1px] border-[#76d32e] rounded-md bg-[#1b1a2ea9] backdrop-blur-[15px] transition duration-500 ease-in-out hover:scale-110  cursor-pointer ">
                <FaDocker size={30} />
                <span>Docker</span>
            </div>


        </div>
    </div>
  )
}

export default Tools