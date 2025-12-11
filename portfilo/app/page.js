import Navbar from "../components/navbar";
import image from "../public/homeimg.jpg";
import Image from "next/image";

export default function Home() {
  return (
  <>
	<div>
		<Navbar/>
    </div>
    
    <div className="flex flex-col h-screen text-base"> 
		<div className="w-full h-1/2 relative">
			<Image alt="cover" src={image} className="w-full h-full object-cover"/>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1120]" />
		</div>
		<h1 className="font-mono text-5xl sm:text-7xl text-[#008000] mx-10">prit.py</h1>
    </div>
    </>
  );
}
