'use client'

import { Button } from "@/components/ui/button"

export default function NavBar(){
    return(
        <div className="flex justify-between ">
            <div className="">
                <h1 className="text-2xl font-bold text-[#00c4cc]">MICHEAL B.</h1>
            </div>
            <div className="flex justify-center gap-8">
                 <p className='text-xl font-semibold text-[#00c4cc]'>Home</p>
                 <p className='text-xl font-semibold text-[#00c4cc]'>Projects</p>
                 <p className='text-xl font-semibold text-[#00c4cc]'>Skills</p>
                 <Button className='text-xl font-semibold text-[#00c4cc] border border-[#00c4cc] bg-transparent hover:bg-[#00c4cc]/30 cursor-pointer' type="button">Contact Me</Button>
               
            </div>
        </div>
    )
}

//button contact me // which sends the user to mailto: micheal@example.com