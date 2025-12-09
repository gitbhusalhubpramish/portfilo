import Navbar from "../components/navbar";
import image from "../public/homeimg.jpg";
import Image from "next/image";

export default function Home() {
  return (
  <>
	<div>
		<Navbar/>
    </div>
    
    <div className="flex flex-row h-screen"> 
		<div className="w-full h-full relative">
			<Image alt="cover" src={image} className="w-full h-full object-cover object-[50%_60%]"/>
		</div>
    </div>
    </>
  );
}
