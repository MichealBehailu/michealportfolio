'use client'

import { Button } from "@/components/ui/button"

export default function NavBar(){
    return(
        <div className="flex justify-between ">
            <div className="">
                <h1 className="text-2xl font-bold">MICHEAL B.</h1>
            </div>
            <div className="flex justify-center gap-8">
                 <p className='text-xl font-semibold text-[#EAC048]'>Home</p>
                 <p className='text-xl font-semibold text-[#EAC048]'>Projects</p>
                 <p className='text-xl font-semibold text-[#EAC048]'>Skills</p>
                 <p className='text-xl font-semibold text-[#EAC048]'>About</p>
                 <Button className='text-xl font-semibold text-[#EAC048] border border-[#EAC048] bg-transparent hover:bg-[#EAC048]/30 cursor-pointer' type="button">Contact Me</Button>
               
            </div>
        </div>
    )
}

//button contact me // which sends the user to mailto: micheal@example.com