"use client"
import {useState} from "react";
import MeanuIcon from "./meanuicon";
import Menu from "./menu";
import navLinks from "../data/navlinks.json";
import Link from "next/link";
export default function Navbar() {
	
  const linkclass = "hover:text-[#0b1120]/60 text-sm sm:text-xs md:text-lg";
  const ulcls = "list-none text-sm sm:text-base md:text-lg text-[#9b9b9b]";
  const navcls = "fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50 backdrop-blur-md bg-white/90 border border-white/20 rounded-xl py-4 px-6 text-[#0b1120]/50 z-3"
  const [showmenu, setshowmenu] = useState(false);
  const menuicnclk = ()=> setshowmenu(!showmenu);
  
  
  return (
  <>
  <div
  className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex justify-end
    transition-opacity duration-500
    ${showmenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
  onClick={() => setshowmenu(false)}
>
  <Menu show={showmenu} />
</div>
    <nav className={navcls}>
      <div className="flex items-center justify-between">
        <h1 className="mr-5 text-lg sm:text-xl md:text-2xl font-semibold">
          Pramish
        </h1>
		
		
        {/* Desktop items – hidden on small screens */}
        <div className="hidden sm:flex md:flex-none md:w-1/2 sm:flex-1 sm:justify-around">
          {navLinks.map((item,index)=>{
			return(
				<ul className={ulcls} key={index}>
					<li>
						<Link href={item.href} className={linkclass}>{item.name}</Link>
					</li>
				</ul>
			)
			})}
        </div>
        <button onClick = {menuicnclk} className="sm:hidden border border-black rounded-md border-solid bg-black/10 cursor-pointer">
			<MeanuIcon/>
        </button>
        
      </div>
    </nav>
    
    </>
  );
}
