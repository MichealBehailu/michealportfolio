"use client";
import NavBar from "@/app/NavBar";
import Image from "next/image";
// import background from "@/public/background.png";
import profile from "@/public/profile.png";
import { ReactNode } from "react";
import {
  ChartNoAxesCombined,
  HeartPulse,
  LucideMoveUpRight,
  MoveUpRight,
  SquareArrowOutUpRight,
  TvMinimal,
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
import { projects } from "@/app/page";

export default function Projects() {
  return (
    <section className=" p-10 m-4">
      <NavBar />
      <section className="flex justify-between  flex-col p-10 m-4  w-[95%] h-full" id="projects">
        <div className="mt-8 mb-8 ml-7 flex justify-between items-center">
          <p className="text-5xl font-semibold ">Projects </p>
      
        </div>
        <div className="flex flex-wrap justify-between items-center gap-0">
          {projects.map((item) => (
            <Card
              className="relative mx-auto w-[30%] max-w-sm h-[40%] hover:scale-105 transition-transform duration-300 pt-0"
              key={item.title}
            >
              <Image
                width={500}
                height={100}
                src={item.image}
                alt={item.alt}
                className="relative z-20 aspect-video w-full object-cover "
              />
              <CardHeader>
                <CardAction>
                  <Badge variant="outline" className="text-black bg-yellow-500">
                    {item.label}
                  </Badge>
                </CardAction>
                <CardTitle className="inline-flex items-center gap-2 mb-1">
                  {item.icon} {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="w-full">
                <Link href={item.link} target="_blank" className="w-full">
                  <Button type="button" className="w-[50%] cursor-pointer  ">
                    View Project <SquareArrowOutUpRight />
                  </Button>
                  <Button
                    type="button"
                    className="w-[50%] cursor-pointer  "
                    disabled
                  >
                    {" "}
                    Live Demo <LucideMoveUpRight />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="p-10 m-4 flex justify-center items-center">
          <p className="text-3xl font-semibold inline-block  ">
            Check out other{" "}
            <span className="underline inline-flex items-center">
              {" "}
              <Link href="/projects">projects</Link> <MoveUpRight />
            </span>{" "}
          </p>
        </div>
      </section>
    </section>
  );
}
