
import NavBar from "@/app/container/nav_bar";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import ServiceSection from "./container/services";
import Approach from "./container/Approach";
import Footer from "./container/footer";
import Image from "next/image";





export default function Home() {
  return (
    <div >
     
      <NavBar/>
      <main className=" bg-cover bg-yellow-100 w-full ">

        <div className=" container mx-auto w-full md:h-[450px] grid grid-cols-12   ">
            
           
           <div className=" col-span-12 p-3 mb-8 md:col-span-7">
           <p className="md:pt-10 text-orange-600 capitalize font-bold text-xl">open to fix</p>
            <p className=" text-3xl md:text-6xl pt-1 font-black uppercase">
            <span className="text-amber-600">Unlock </span> Your Industry
            <span className="text-amber-600 pl-2">Potential</span>
            
            </p>
            <p className="pt-1 text-xl font-medium  text-justify tracking-tight md:w-[600]">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit atque ratione amet minus enim nihil consequatur soluta ex tempora suscipit, non quos? Cumque, quae quibusdam? Dicta corporis dolores nemo?
            </p>
            
            
            <Link href="projects" >
            <div className="bg-black rounded-md p-3  text-white mt-5 w-full  md:w-[220px] flex items-center justify-around space-x-8">
              
              Estimate Project
              <ArrowRight/>

            </div>
             
             </Link>

            
            
           </div>
           
          
        </div> 


      
      </main>
      <section className="mt-4 p-3">

          <ServiceSection/>
       </section> 
        

     


      <section className="  bg-neutral-950 md:p-20 mt-10">

      
        <div className="container mx-auto text-amber-200 p-3 ">
        <p className="text-2xl font-bold mt-5">How it work </p>
           <p>Our approach make problems essay for our clients and bring the project ideas to reality </p>
         
            
            <Approach/>
        </div>
      </section>


      <section className="container mx-auto p-3 md:p-0" >

        <div className=" mt-20 mb-10 bg-gradient-to-tr from-amber-600 to-amber-200 rounded-lg p-5 ">

          <div className="flex flex-col md:flex-row space-x-4 items-start justify-between ">
            <div>
            <p className=" text-4xl font-bold text-white text-pretty capitalize p-3"> 
              You have a <span className=" md:px-3 font-extrabold text-indigo-800"> project Idea</span>  and {"don't"} know where to start
            </p>
            <p className="text-pretty pl-3 font-normal text-xl"> No worries we have your back, you send your project idea and we will give you  <em> <b>free project proposal</b></em> tailored to your project idea.  </p>

            </div>
           
            <div className=" ml-3 mt-4 bg-black text-white text-center p-3 rounded-md font-medium w-[200px]">
              Get Started
            </div>
          </div>
          <div className="text-center">
            {/* Image for call action */}
          </div>
          

        </div>
        </section>
      

        <section className="containe mx-auto mt-5 md:mt-20">

         
        <div className=" container mx-auto  flex flex-col-reverse md:flex-row  space-x-4">
           <Image width={600} height={500} src="/World Map.svg" alt=" world map " className=" object-cover"/>
         
         <div>
         <p className="text-7xl text-black font-bold uppercase"> it {"don't"} matter where you are </p>
          <p className=" text-2xl">We are happy to work with all clients around the world </p>
         </div>
         </div>
        </section>
        <br />
        <br />
      <Footer/>
    </div>
  );
}
