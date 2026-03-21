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

export default function About() {
  return (
    <section className=" p-10 m-4">
      <NavBar />
      <section className="w-full h-[107vh]" id="about">
        <div className="p-10 m-4">
          <p className="text-3xl font-semibold text-[#EAC048]">About</p>
          <p className="text-5xl font-semibold text-black">Micheal Behailu</p>
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
    </section>
  );
}
