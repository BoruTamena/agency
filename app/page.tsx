import NavBar from "@/app/container/nav_bar";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ServiceSection from "./container/services";

export default function Home() {
  return (
    <div >
     
      <NavBar/>
      <main className=" bg-cover bg-yellow-100 w-full  ">

        <div className=" container mx-auto w-full md:h-[450px] grid grid-cols-12 ">
            
           
           <div className=" col-span-12 p-3 md:col-span-7">
           <p className="pt-10 text-orange-600 capitalize">open to fix</p>
            <p className="md:text-6xl pt-1 font-bold">
            <span className="text-amber-600">Unlock </span> Your Industry
            <span className="text-amber-600 pl-2">Potential</span>
            
            </p>
            <p className="pt-1 text-justify md:w-[550]">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit atque ratione amet minus enim nihil consequatur soluta ex tempora suscipit, non quos? Cumque, quae quibusdam? Dicta corporis dolores nemo?
            </p>
            
            <div className="bg-black rounded-md p-3 text-white mt-5 w-[220px] flex space-x-8">
            <Link href="estimate" > Estimate Project</Link>

            <ArrowRight/>
            </div>
           </div>
        </div> 


      
      </main>
      <section className="mt-4">
          
          <ServiceSection/>
       </section> 
        
    </div>
  );
}
