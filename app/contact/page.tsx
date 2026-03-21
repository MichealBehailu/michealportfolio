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
import ContactForm from "@/components/form/ContactForm";
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
      <section className=" w-full h-[105vh]  flex flex-col items-center justify-center" id="contact">
        <p className="text-8xl font-bold text-black w-[65%] text-center">
          let your website vision become a reality.
        </p>
        <div className="w-[50%] bg-white flex justify-center p-10 rounded-2xl mt-5">
          <ContactForm />
        </div>
      </section>
    </section>
  );
}
