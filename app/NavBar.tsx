"use client";

import { Button } from "@/components/ui/button";
import { House, Layers, Sparkles, User, Mail } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between ">
      <div className="">
        <h1 className="text-2xl font-bold">MICHEAL B.</h1>
      </div>
      <div className="flex justify-center gap-8">
        <Link
          href={"/"}
          className="text-xl font-semibold text-[#EAC048] flex items-center gap-2"
        >
          <House /> Home
        </Link>
        <Link
          href={"/projects"}
          className="text-xl font-semibold text-[#EAC048] flex items-center gap-2"
        >
          <Layers /> Projects
        </Link>
        <Link
          href="/skills"
          className="text-xl font-semibold text-[#EAC048] flex items-center gap-2"
        >
          <Sparkles /> Skills
        </Link>
        <Link
          href='/about'
          className="text-xl font-semibold text-[#EAC048] flex items-center gap-2"
        >
          <User /> About
        </Link>
        <Link href='/contact'
        >
          <Button
            className="text-xl font-semibold text-[#EAC048] border border-[#EAC048] bg-transparent hover:bg-[#EAC048]/30 hover:text-black cursor-pointer"
            type="button"
          >
            <Mail /> Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
}

//button contact me // which sends the user to mailto: micheal@example.com
