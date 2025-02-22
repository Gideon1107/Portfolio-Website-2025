
import { motion } from "framer-motion";
import dev from "../assets/about.svg"

const AboutMe = () => {
    return (
        <div>

            <motion.div
                initial={{ opacity: 0, y: 50 }} // Start invisible and move up
                animate={{ opacity: 1, y: 35 }} // Fade in and slide into place
                transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                className="flex flex-col-reverse lg:flex-row items-center justify-between pt-2 lg:pt-10 pb-10 max-sm:gap-10"
            >
                <div className="flex flex-col gap-9">
                    <div className="flex w-full items-center justify-center">
                        <h1 className="text-4xl">Know Who <span className="text-[#76d32e]">I AM</span></h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-[20px] font-medium leading-loose">
                            Hi again! <span className="text-[#76d32e] font-bold">I&apos;m Gideon Ayeni</span>, a software engineer based in <span className="text-[#76d32e] font-bold">England, UK</span> with a passion for building <span className="text-[#76d32e]">scalable software solutions</span> that solve real-world problems.
                        </p>
                        <p className="leading-normal text-[20px] font-medium">
                            My journey into Tech started with a <span className="text-[#76d32e] italic">Bachelor&apos;s</span> degree in <span className="text-[#76d32e] italic">Electrical and Electronics Engineering</span>, followed by a <span className="text-[#76d32e] italic">Master&apos;s</span> in <span className="text-[#76d32e] italic">Robotics </span>and Smart Technologies. This background has given me a strong foundation in both hardware and software systems, allowing me to approach software engineering with a <span className="text-[#76d32e]">unique perspective</span>—focusing on building <span className="text-[#76d32e]">intelligent, efficient, and scalable applications</span>.
                        </p>

                        <p className="leading-normal text-[20px] font-medium">
                            Currently, I specialize in <span className="text-[#76d32e] italic">full-stack web development</span>, working with modern technologies. I&apos;m always looking for opportunities to contribute to impactful projects, continuously learning new technologies, and <span className="text-[#76d32e]">collaborating</span> with like-minded developers.
                        </p>

                        <p className="leading-normal text-[20px] font-medium pt-10 pb-10">
                            When I&apos;m not coding, you&apos;ll find me on the football pitch ⚽, playing games 🎮, or exploring the latest in tech innovations
                        </p>

                        <p className="leading-normal text-[20px] font-medium pb-5">
                            I believe in <span className="text-[#76d32e]">turning ideas into reality</span> through code, and I&apos;m excited about working on projects that challenge me and push my skills to the next level. <span className="text-[#76d32e] italic">Let&apos;s connect</span> and build something amazing together!
                        </p>

                        <a target="_blank" href="https://www.linkedin.com/in/gideon-ayeni/"><button className="text-white cursor-pointer p-4 border w-[185px] bg-transparent transition-all duration-300 ease-in hover:bg-white hover:text-black">Connect with me</button></a>

                    </div>
                </div>

                <img src={dev} alt="" className='w-[300px] sm:w-[400px] lg:w-[500px] h-auto lg:-mt-55 ' />
            </motion.div>


        </div>
    )
}

export default AboutMe