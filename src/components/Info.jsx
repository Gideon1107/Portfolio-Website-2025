import infodev from "../assets/info.png"

const Info = () => {
  return (
    <div className="py-10 flex flex-col-reverse sm:flex-row items-center lg:gap-20 xl:gap-36 2xl:gap-50 text-white  ">
       <img src={infodev} alt="" className="w-[300px]"/>
       <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-medium text-white lg:pl-10 max-sm:text-center p-1">LET ME <span className="text-[#76d32e]">INTRODUCE</span> MYSELF</h1>
            <div className="flex flex-col gap-5 text-xl">
              <p className="">I&apos;m a <span className="text-[#76d32e] font-semibold italic">Full-Stack Engineer</span> who thrives on turning complex challenges into intuitive digital experiences.</p>
              <p>My tech toolkit includes <span className="text-[#76d32e] font-semibold italic">React, React-Native, Node.js, Python, and TypeScript</span>, with a focus on building responsive, accessible and scalable applications.</p>
              <p>I&apos;m currently exploring <span className="text-[#76d32e] font-semibold italic">AI integration</span> and <span className="text-[#76d32e] font-semibold italic">real-time collaboration tools</span> that enhance how we work and communicate.</p>
              <p>Let&apos;s connect and discuss how we can build something amazing together!</p>
            </div>
        </div>
    </div>
  )
}

export default Info