"use client";
import NavBar from "./NavBar";
import Image from "next/image";
// import background from "@/public/background.png";
import profile from "@/public/profile.png";
import { ReactNode } from "react";
import { ChartNoAxesCombined, HeartPulse, SquareArrowOutUpRight, TvMinimal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Home() {
  const projects: {
    icon: ReactNode;
    title: string;
    label: string;
    description: string;
    link: string;
    image: string;
    alt: string;
  }[] = [
    {
      icon: <ChartNoAxesCombined />,
      title: "Issue-Tracker",
      label: "Full Stack",
      description:
        "Issue Tracker is a system designed to help teams manage, track, and resolve tasks or problems efficiently. It allows users to report issues, assign responsibilities, and monitor progress in an organized way.",
      link: "https://github.com/MichealBehailu/issue-tracker-finalized.git",
      image:"https://screenshots.codesandbox.io/2lx39z/2.png",
      alt:"Issue Tracker"
    },
    {
      icon: <TvMinimal />,
      title: "Mereb LMS",
      label: "Full Stack",
      description:
        "Mereb LMS is a modern learning management system designed to simplify online education and training. It provides an interactive platform where students can access courses, track progress, and engage with instructors efficiently.",
      link: "https://github.com/MichealBehailu/Mereb-Learning-Platform.git",
      image:"https://prowess.org.uk/wp-content/uploads/2024/08/LMS.webp",
      alt:"Mereb LMS"
    },
    {
      icon: <HeartPulse />,
      title: "WellTalk",
      label: "Full Stack",
      description:
        "WellTalk is a mental health support platform that connects users with licensed therapists for confidential online counseling. It offers flexible scheduling, secure video sessions, and personalized treatment plans.",
      link: "",
      image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNBzsmHfaAHNm-4dFXbXRy0nlJKhuKO9qKe1jplW8iconfqn2T",
      alt:"WellTalk"
    },
  ];

  // const sectionStyle = {
  //   backgroundImage: `url(${background.src})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  // };

  return (
    <div className="flex flex-col">
      <section className="flex justify-between  flex-col p-10 m-4  w-[95%] h-[85vh]">
        <NavBar />
        <div className="flex flex-col text-center items-center justify-center h-[80vh] pt-50 pb-50">
          <h1 className="text-6xl text-[#EAC048] font-bold">
            Hi, I’m Micheal Behailu
          </h1>
          <h2 className="text-2xl text w-[45%] pt-2">
            I am a senior software engineer student and I build responsive and
            user-friendly websites and desktop applications using modern tools
            and technologies.{" "}
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
          <p className="text-[#EAC048] w-[50%] text-3xl/11 pr-10">
            Micheal Behailu is a creative web developer and designer who builds
            responsive, user-centered websites with clean code and modern
            aesthetics. He combines design thinking with front-end and back-end
            skills to craft digital experiences that are both functional and
            visually engaging.
          </p>
        </div>

        <div className="flex items-center gap-50 p-8 w-full">
          <p className="text-[#EAC048] text-3xl/11 w-[50%]">
            Aside from designing and coding, Micheal enjoys books and movies,
            where he finds ideas for future projects.
            <span className="block w-[50%]  border-b-5 mt-5 border-white"></span>
          </p>
          <Image
            src={profile}
            alt="Profile"
            className="w-[20%] h-[20%] rounded-full"
          />
        </div>
      </section>

      {/* <div className="w-full h-8 bg-white"></div> */}

      {/* Projects Section */}

      <section className="bg-[#EAC048] w-full h-[107vh]" id="projects">
        <div className="p-10 m-4 flex justify-between items-center">
          <p className="text-5xl font-semibold ">
            Featured Projects{" "}
          </p>
          <div className="w-[70%] border-b-5 mt-5 border-black"></div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-0">
          {projects.map((item)=>(

          <Card className="relative mx-auto w-[30%] max-w-sm h-[40%] pt-0" key={item.title}>
            <Image
              width={500}
              height={100}
              src={item.image}
              alt={item.alt}
              className="relative z-20 aspect-video w-full object-cover "
            />
            <CardHeader>
              <CardAction>
                <Badge variant="outline" className="text-black bg-yellow-500" >{item.label}</Badge>
              </CardAction>
              <CardTitle className="inline-flex items-center gap-2 mb-1">
                {item.icon} {item.title}
              </CardTitle>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button type='button'className="w-full cursor-pointer  " ><SquareArrowOutUpRight /> View Project</Button>
            </CardFooter>
          </Card>
          ))}
          
        </div>
      </section>
    </div>
  );
}
