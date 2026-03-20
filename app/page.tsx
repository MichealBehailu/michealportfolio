"use client";
import NavBar from "./NavBar";
import Image from "next/image";
// import background from "@/public/background.png";
import profile from "@/public/profile.png";
import { ReactNode } from "react";
import { ChartNoAxesCombined, HeartPulse, TvMinimal } from "lucide-react";

const projects:{icon:ReactNode,title:string, description:string,link:string}[] = [
  {
    icon: <ChartNoAxesCombined />,
    title: "Issue-Tracker",
    description: "Issue Tracker is a system designed to help teams manage, track, and resolve tasks or problems efficiently. It allows users to report issues, assign responsibilities, and monitor progress in an organized way. With its structured workflow and collaboration features, Issue Tracker improves productivity and ensures timely resolution of problems.",
    link:"https://github.com/MichealBehailu/issue-tracker-finalized.git"
  },
  {
    icon: <TvMinimal />,
    title: "Mereb LMS",
    description: "Mereb LMS is a modern learning management system designed to simplify online education and training. It provides an interactive platform where students can access courses, track progress, and engage with instructors efficiently. With its user-friendly design and smart features, Mereb LMS enhances the overall learning experience for both educators and learners.",
    link:"https://github.com/MichealBehailu/Mereb-Learning-Platform.git"
  },
  {
    icon: <HeartPulse />,
    title: "WellTalk",
    description: "WellTalk is a mental health support platform that connects users with licensed therapists for confidential online counseling. It offers flexible scheduling, secure video sessions, and personalized treatment plans to help individuals manage stress, anxiety, and other mental health concerns from the comfort of their home.",
    link:""
  },
];

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
            <p className="text-3xl font-semibold text-[#EAC048]">About</p>
            <p className="text-5xl font-semibold text-white">Micheal Behailu</p>
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
            <p className="text-5xl font-semibold text-white">Featured Projects </p>
            <div className="w-[70%] border-b-5 mt-5 border-black"></div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-[80%] h-[400px] bg-black rounded-lg">

            </div>
          </div>

        </section>
      </div>
    
  );
}
