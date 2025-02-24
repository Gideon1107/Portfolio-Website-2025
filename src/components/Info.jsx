import infodev from "../assets/info.png"

const Info = () => {
  return (
    <div className="py-10 flex flex-col-reverse sm:flex-row items-center lg:gap-20 xl:gap-36 2xl:gap-50 text-white  ">
       <img src={infodev} alt="" className="w-[300px]"/>
       <div className="flex flex-col gap-10">
            <h1 className="text-4xl font-medium text-white lg:pl-10 max-sm:text-center p-1">LET ME <span className="text-[#76d32e]">INTRODUCE</span> MYSELF</h1>
            <div className="flex flex-col gap-5 text-xl">
                <p className="">I fell in love with programming during my University degree and I have taught myself something, I think… 🤷‍♂️</p>
                <p>I am proficient in <span className="text-[#76d32e] font-semibold italic">Python, Javascript and Typescript</span>.</p>
                <p>Passionate about building <span className="text-[#76d32e] font-semibold italic ">Scalable Software Solutions</span> and <span className="text-[#76d32e] font-semibold italic">APIs.</span></p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Info