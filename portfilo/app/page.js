"use client";
import Navbar from "../components/navbar";
import image from "../public/homeimg.jpg";
import Image from "next/image";
import timeline from "../data/timeline.json";

export default function Home() {
	function Marker ({cls}){
		return (
			<div className={cls.par}>
				<div className={cls.dot}/>
				<div className="flex justify-center grow">
				{cls.linevr && <div className={cls.linevr} />}
				{cls.linehr && <div className={cls.linehr} />}
				</div>
			</div>
		)
	}
	const topdotcls = {
		par:"flex flex-col m-4 mb-0 justify-center sm:w-32 w-24", 
		dot:"rounded-full sm:size-32 size-24 bg-[#00bf00]", 
		linevr:"h-30 w-2 bg-[#00bf00] relative"
		}
	const dotcls = {
		par:"flex flex-col sm:ml-8 ml-10 sm:w-24 w-12", 
		dot:"rounded-full sm:size-24 size-12 bg-[#00bf00] relative ", 
		linehr: "h-1 w-30 bg-[#00bf00] relative sm:bottom-12 bottom-6 left-9/10", // horizontal
		linevr: "grow w-1 bg-[#00bf00] relative left-1/2",
		
		last:{
			par:"flex flex-col sm:ml-8 ml-10 sm:w-24 w-12", 
			dot:"rounded-full sm:size-24 size-12 bg-[#00bf00] relative ",
			linehr: "h-1 w-30 bg-[#00bf00] relative sm:bottom-12 bottom-6 left-9/10"
		}
		}
  return (
  <>
	<div>
		<Navbar/>
    </div>
    
    <div className="flex flex-col h-screen text-base"> 
		<div className="w-full h-2/3 relative">
			<Image alt="cover" src={image} className="w-full h-full object-cover"/>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1120]" />
		</div>
		<div className=" mx-10">
			<h1 className="font-mono text-5xl sm:text-7xl text-[#008000]">prit.py</h1>
			<p className="m-1">Full-Stack Developer | Python Programmer</p>
		</div>
		<div className="mb-4 flex justify-end flex-1 flex-col">
			<div className="flex-1"/>
			<div className="flex gap-4 justify-end mr-4">
				<a href="https://www.facebook.com/pramish.bhusal.393143/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1f2b] hover:bg-[#0c0e13] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
						<path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.636h-3.12V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0z"/>
					</svg>
				</a>

				<a href="https://www.github.com/gitbhusalhubpramish/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1f2b] hover:bg-[#0c0e13] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998 .108-.776.418-1.305.762-1.605 -2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221 -.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23 .653 1.653.241 2.873.118 3.176 .77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921 .43.371.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.216.694.825.576 C20.565 22.092 24 17.592 24 12.297 c0-6.627-5.373-12-12-12z"/>
					</svg>
				</a>

				<a href="https://www.linkedin.com/in/pramish-bhusal-a68a05351/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1f2b] hover:bg-[#0c0e13] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
						<path d="M22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.208 24 24 23.229 24 22.278V1.723C24 .771 23.208 0 22.225 0zM7.084 20.452H3.558V9h3.526v11.452zM5.321 7.577a2.043 2.043 0 1 1 0-4.086 2.043 2.043 0 0 1 0 4.086zm15.13 12.875h-3.526v-5.568c0-1.328-.027-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.938v5.667h-3.526V9h3.387v1.561h.048c.472-.893 1.627-1.834 3.348-1.834 3.579 0 4.242 2.355 4.242 5.419v6.306z"/>
					</svg>
				</a>
			</div>
		</div>
    </div>
    <div className="min-h-screen w-full h-full">
		<div className=" sm:py-30 h-full w-full py-8 sm:px-[15%] px-[7%] flex flex-col">
			<div>
				<div>
					<h3 className="sm:w-32 w-24 text-[#008000] text-5xl text-center my-20 relative ">{timeline.started}</h3>
					<Marker cls={topdotcls}/>
				</div>
			</div>
			{timeline.achievements.map((item,index)=>(
				<div key={index} className="grid sm:grid-cols-[190px_1fr] grid-cols-[107px_1fr] gap-6 p">
						<Marker cls={index<timeline.achievements.length-1 ? dotcls : dotcls.last}/>
					<div className="mb-10 bg-[#0c0e13] border border-[#1c1f2b] rounded-xl p-4">
						<h4 className="text-lg font-semibold text-[#00bf00]">
							{item.title}
						</h4>
						<p className="text-gray-400 mt-1">
							{item.description}
						</p>
					</div>
				</div>
			))}
			</div>
		</div>
	</>
  );
}
