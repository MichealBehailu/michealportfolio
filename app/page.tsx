"use client";
import NavBar from "./NavBar";
import Image from "next/image";
import profile from "@/public/profile.png";
import { ReactNode } from "react";
import {
  ChartNoAxesCombined,
  HeartPulse,
  LucideMoveUpRight,
  MoveUpRight,
  SquareArrowOutUpRight,
  TvMinimal,
  Github,
  Linkedin,
  Twitter,
  ArrowDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import csharp from "@/public/csharp.svg";
import java from "@/public/java.svg";
import ContactForm from "../components/form/ContactForm";

export const projects: {
  icon: ReactNode;
  title: string;
  label: string;
  description: string;
  link: string;
  image: string;
  alt: string;
}[] = [
  {
    icon: <ChartNoAxesCombined className="w-5 h-5" />,
    title: "Issue-Tracker",
    label: "Full Stack",
    description:
      "Issue Tracker is a system designed to help teams manage, track, and resolve tasks or problems efficiently. It allows users to report issues, assign responsibilities, and monitor progress in an organized way.",
    link: "https://github.com/MichealBehailu/issue-tracker-finalized.git",
    image: "https://screenshots.codesandbox.io/2lx39z/2.png",
    alt: "Issue Tracker",
  },
  {
    icon: <TvMinimal className="w-5 h-5" />,
    title: "Mereb LMS",
    label: "Full Stack",
    description:
      "Mereb LMS is a modern learning management system designed to simplify online education and training. It provides an interactive platform where students can access courses, track progress, and engage with instructors efficiently.",
    link: "https://github.com/MichealBehailu/Mereb-Learning-Platform.git",
    image: "https://prowess.org.uk/wp-content/uploads/2024/08/LMS.webp",
    alt: "Mereb LMS",
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: "WellTalk",
    label: "Full Stack",
    description:
      "WellTalk is a mental health support platform that connects users with licensed therapists for confidential online counseling. It offers flexible scheduling, secure video sessions, and personalized treatment plans.",
    link: "#",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNBzsmHfaAHNm-4dFXbXRy0nlJKhuKO9qKe1jplW8iconfqn2T",
    alt: "WellTalk",
  },
];

// Skill icon component for cleaner code
function SkillIcon({ title, path }: { title: string; path: string }) {
  return (
    <svg
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col min-h-screen p-4 sm:p-6 md:p-10">
        <NavBar />
        <div className="flex-1 flex flex-col text-center items-center justify-center px-4 py-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EAC048] font-bold text-balance">
            Hi, I'm Micheal Behailu
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl max-w-xl lg:max-w-2xl pt-4 text-pretty leading-relaxed">
            I am a senior software engineer student and I build responsive and
            user-friendly websites and desktop applications using modern tools
            and technologies.
          </h2>
          <div className="flex gap-4 mt-8">
            <Link href="#projects">
              <Button className="bg-[#EAC048] text-black hover:bg-[#EAC048]/80 font-semibold px-6 py-2">
                View Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="border-[#EAC048] text-[#EAC048] hover:bg-[#EAC048]/10 font-semibold px-6 py-2">
                Get in Touch
              </Button>
            </Link>
          </div>
          <div className="flex gap-6 mt-8">
            <Link href="https://github.com/MichealBehailu" target="_blank" className="text-[#EAC048] hover:opacity-70 transition-opacity">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-[#EAC048] hover:opacity-70 transition-opacity">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-[#EAC048] hover:opacity-70 transition-opacity">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <Link href="#about" className="mt-12 animate-bounce text-[#EAC048]">
            <ArrowDown className="w-6 h-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </section>

      <div className="w-full h-4 sm:h-6 bg-[#EAC048]"></div>

      {/* About Section */}
      <section className="bg-black w-full py-12 md:py-20" id="about">
        <div className="px-4 sm:px-6 md:px-10 mb-8">
          <p className="text-2xl md:text-3xl font-semibold text-[#EAC048]">About</p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">Micheal Behailu</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-end px-4 sm:px-6 md:px-10">
          <p className="text-[#EAC048] lg:w-1/2 text-xl sm:text-2xl md:text-3xl leading-relaxed">
            Micheal Behailu is a creative web developer and designer who builds
            responsive, user-centered websites with clean code and modern
            aesthetics. He combines design thinking with front-end and back-end
            skills to craft digital experiences that are both functional and
            visually engaging.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 p-4 sm:p-6 md:p-8 mt-8">
          <p className="text-[#EAC048] text-xl sm:text-2xl md:text-3xl leading-relaxed lg:w-1/2">
            Aside from designing and coding, Micheal enjoys books and movies,
            where he finds ideas for future projects.
            <span className="block w-32 sm:w-48 border-b-4 mt-5 border-white"></span>
          </p>
          <Image
            src={profile}
            alt="Micheal Behailu profile photo"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#EAC048] w-full py-12 md:py-20" id="projects">
        <div className="px-4 sm:px-6 md:px-10 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">Featured Projects</p>
          <div className="hidden sm:block flex-1 max-w-xs md:max-w-lg lg:max-w-2xl border-b-4 border-black ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10">
          {projects.map((item) => (
            <Card
              className="relative hover:scale-[1.02] transition-transform duration-300 pt-0 flex flex-col"
              key={item.title}
            >
              <Image
                width={500}
                height={300}
                src={item.image}
                alt={item.alt}
                className="relative z-20 aspect-video w-full object-cover rounded-t-lg"
              />
              <CardHeader className="flex-1">
                <CardAction>
                  <Badge variant="outline" className="text-black bg-yellow-500">
                    {item.label}
                  </Badge>
                </CardAction>
                <CardTitle className="inline-flex items-center gap-2 mb-1">
                  {item.icon} {item.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col sm:flex-row gap-2">
                <Link href={item.link} target="_blank" className="w-full sm:w-1/2">
                  <Button type="button" className="w-full cursor-pointer">
                    View Project <SquareArrowOutUpRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Button
                  type="button"
                  className="w-full sm:w-1/2 cursor-pointer"
                  disabled
                >
                  Live Demo <LucideMoveUpRight className="w-4 h-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="px-4 sm:px-6 md:px-10 mt-12 flex justify-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold inline-flex items-center gap-2 flex-wrap justify-center">
            Check out other{" "}
            <Link href="/projects" className="underline inline-flex items-center hover:opacity-70 transition-opacity">
              projects <MoveUpRight className="w-5 h-5" />
            </Link>
          </p>
        </div>
      </section>

      {/* Skills And Tools Section */}
      <section className="w-full py-12 md:py-20" id="skills">
        <div className="px-4 sm:px-6 md:px-10 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">Skills And Tools</p>
          <div className="hidden sm:block flex-1 max-w-xs md:max-w-lg lg:max-w-2xl border-b-4 border-black ml-4"></div>
        </div>

        {/* Frontend Technologies */}
        <div className="px-4 sm:px-6 md:px-10 mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl mb-4">Frontend Technologies</p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <SkillIcon
              title="React"
              path="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
            />
            <SkillIcon
              title="HTML5"
              path="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
            />
            <SkillIcon
              title="CSS"
              path="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"
            />
            <SkillIcon
              title="Tailwind CSS"
              path="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
            />
            <SkillIcon
              title="Next.js"
              path="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
            />
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="px-4 sm:px-6 md:px-10 mb-12 flex flex-col items-start lg:items-end">
          <p className="text-xl sm:text-2xl md:text-3xl mb-4">Backend Technologies</p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <SkillIcon
              title="Node.js"
              path="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
            />
            <SkillIcon
              title="TypeScript"
              path="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
            <SkillIcon
              title="Next.js"
              path="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
            />
            <SkillIcon
              title="Spring Boot"
              path="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"
            />
            <SkillIcon
              title="Express"
              path="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
            />
          </div>
        </div>

        {/* Database Technologies */}
        <div className="px-4 sm:px-6 md:px-10 mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl mb-4">Database Technologies</p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <SkillIcon
              title="PostgreSQL"
              path="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z"
            />
            <SkillIcon
              title="SQLite"
              path="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"
            />
            <SkillIcon
              title="MySQL"
              path="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622z"
            />
            <SkillIcon
              title="MongoDB"
              path="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
            />
            <SkillIcon
              title="Supabase"
              path="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"
            />
          </div>
        </div>

        {/* Programming Languages */}
        <div className="px-4 sm:px-6 md:px-10 flex flex-col items-start lg:items-end">
          <p className="text-xl sm:text-2xl md:text-3xl mb-4">Programming Languages</p>
          <div className="flex flex-wrap gap-6 sm:gap-8">
            <SkillIcon
              title="Python"
              path="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
            />
            <SkillIcon
              title="C++"
              path="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"
            />
            <Image
              src={csharp}
              alt="C#"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
              width={80}
              height={80}
            />
            <Image
              src={java}
              alt="Java"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 hover:scale-110 transition-transform duration-300"
              width={80}
              height={80}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-20 bg-[#EAC048] flex flex-col items-center justify-center px-4" id="contact">
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black max-w-4xl text-center text-balance leading-tight">
          Let your website vision become a reality.
        </p>
        <div className="w-full max-w-md lg:max-w-lg bg-white flex justify-center p-6 sm:p-8 md:p-10 rounded-2xl mt-8">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-black text-center">
        <p className="text-[#EAC048] text-sm sm:text-base">
          Designed and built by Micheal Behailu
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="https://github.com/MichealBehailu" target="_blank" className="text-[#EAC048] hover:opacity-70 transition-opacity">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-[#EAC048] hover:opacity-70 transition-opacity">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-[#EAC048] hover:opacity-70 transition-opacity">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <p className="text-gray-500 text-xs mt-4">
          {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
