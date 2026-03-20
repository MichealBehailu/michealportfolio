"use client";
import NavBar from "./NavBar";
import Image from "next/image";
// import background from "@/public/background.png";
import profile from "@/public/profile.png";
export default function Home() {
  
  // const sectionStyle = {
  //   backgroundImage: `url(${background.src})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  // };

  return (
   
      <div className="flex flex-col">
        <section
          className="flex justify-between flex-col p-10 m-4  w-[95%] h-[85vh]"
        >
          <NavBar />
          <div className="flex flex-col text-center items-center justify-center h-[80vh] pt-50 pb-50">
            <h1 className="text-6xl text-[#EAC048] font-bold">Hi, I’m Micheal Behailu</h1>
            <h2 className="text-2xl text w-[45%] pt-2">
              I am a senior software engineer student and I build responsive and
              user-friendly websites and desktop applications using modern tools and
              technologies.{" "}
            </h2>
          </div>
        </section>
        
        <div className="w-full h-6 bg-[#EAC048]"></div>

        {/* About Section */}

        <section className="bg-black w-full h-[107vh]" id="about">
          
          <div className="p-10 m-4">
            <p className="text-7xl font-semibold text-[#EAC048]">About</p>
            <p className="text-7xl font-semibold text-white">Micheal Behailu</p>
          </div>

          <div className="flex justify-end">
            <p className="text-[#EAC048] w-[50%] text-3xl/11 pr-10">Micheal Behailu is a creative web developer and designer who builds responsive, user-centered websites with clean code and modern aesthetics. He combines design thinking with front-end and back-end skills to craft digital experiences that are both functional and visually engaging.</p>
          </div>
          
          <div className="flex items-center gap-50 p-8 w-full">
            <p className="text-[#EAC048] text-3xl/11 w-[50%]">Aside from designing and coding, Micheal enjoys books and movies, where he finds ideas for future projects.<span className="block w-[50%]  border-b-5 mt-5 border-white"></span></p>
            <Image src={profile} alt="Profile" className="w-[20%] h-[20%] rounded-full" />
            
          </div>
        </section>

        {/* <div className="w-full h-8 bg-white"></div> */}
        
        {/* Projects Section */}

        <section className="bg-[#EAC048] w-full h-[107vh]" id="projects">
          
          <div className="p-10 m-4 flex justify-between items-center">
            <p className="text-7xl font-semibold text-white">Featured Projects </p>
            <div className="w-[70%] border-b-5 mt-5 border-black"></div>
          </div>

          <div className="flex justify-end">
            <p className="text-black w-[50%] text-3xl/11 pr-10">Micheal Behailu is a creative web developer and designer who builds responsive, user-centered websites with clean code and modern aesthetics. He combines design thinking with front-end and back-end skills to craft digital experiences that are both functional and visually engaging.</p>
          </div>
          
          <div className="flex items-center gap-50 p-8 w-full">
            <p className="text-black text-3xl/11 w-[50%]">Aside from designing and coding, Micheal enjoys books and movies, where he finds ideas for future projects.<span className="block w-[50%]  border-b-5 mt-5 border-white"></span></p>
            <Image src={profile} alt="Profile" className="w-[20%] h-[20%] rounded-full" />
            
          </div>
        </section>
      </div>
    
  );
}
