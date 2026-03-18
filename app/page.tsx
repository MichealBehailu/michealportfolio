"use client";
import NavBar from "./NavBar";
import Image from "next/image";
// import background from "@/public/background.png";

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
            <h1 className="text-5xl ">Hi, I’m Micheal Behailu</h1>
            <h2 className="text-2xl text-[#00c4cc] w-[45%] pt-2">
              I am a senior software engineer student and I build responsive and
              user-friendly websites and desktop applications using modern tools and
              technologies.{" "}
            </h2>
          </div>
        </section>
        
        <div className="w-full h-8 bg-[#00c4cc]"></div>

        <section className="bg-[#00c4cc] w-full h-[85vh]" id="about">
          
          <div className="p-10 m-4">
            <p className="text-7xl font-semibold text-white">About</p>
            <p className="text-7xl font-semibold text-white">Micheal Behailu</p>
          </div>

          <div className="flex justify-end">
            <p className="text-white w-[50%] text-3xl pr-10">Micheal Behailu is a creative web developer and designer who builds responsive, user-centered websites with clean code and modern aesthetics. He combines design thinking with front-end and back-end skills to craft digital experiences that are both functional and visually engaging.</p>
          </div>
          
          <div className="p-10 m-4 w-[50%]">
            <p className="text-white text-3xl">Aside from designing and coding, Micheal enjoys books and movies, where he finds ideas for future projects.</p>
            <Image />
          </div>
        </section>
      </div>
    
  );
}
