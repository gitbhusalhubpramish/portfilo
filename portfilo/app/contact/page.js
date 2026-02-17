"use client"
import {useState} from "react"
import info from "@/data/info.json"
export default function Contact(){
	return (
	<>
		<div className="min-h-screen sm:m-[15%] mx-0 m-30">
				<div className="sm:m-10 m-5 text-gray-300">
					<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
						<div className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden p-8">
							<h1 className="sm:text-5xl text-3xl font-bold text-[#33a400]">Info</h1>
							<div className="flex flex-wrap sm:flex-row flex-col">
								<div className="justify-center items-center flex flex-col flex-1">
									<div className="rounded-full border-1 border-[#3d5afe] overflow-hidden aspect-square w-7/10">
										<img className="object-cover w-full h-full" src={info.pic}/>
									</div>
									<div className="w-7/10">
									<h2 className="text-3xl text-[#33a400]">{info.display_name}</h2>
									<p className="font-thin text-gray-300">{info.real_name}</p>
									</div>
								</div>
								<div className="flex flex-col w-1/2 flex-wrap gap-3 mt-4">
									{/* Location */}
									<div className="flex items-center gap-2">
										<div className="h-5 w-5">
											<img src={info.locaionpic} className="h-full w-full object-contain" />
										</div>
										<p className="text-sm text-[#cbd5e1]">{info.location}</p>
									</div>
									<div className="flex-col flex gap-2 flex-wrap  justify-around">
									{/* Schools */}
									{info.scl.map((scl, index) => (
										<div key={index} className="flex items-center gap-2 flex-1">
											<div className="h-5 w-5">
												<img src={info.sclimg} className="h-full w-full object-contain" />
											</div>
											<p className="text-sm text-[#cbd5e1]">{scl.name}</p>
										</div>
									))}
									</div>
									<div className="flex-col flex gap-2 justify-around">
										{/* Social Media */}
										{info.social.map((media, index) => (
											<div key={index} className="flex w-full items-center gap-2">
												<div className="h-5 w-5">
													<img src={`/${media.img}`} className="h-full w-full object-contain opacity-80" />
												</div>
												<a
													href={media.href}
													className="text-sm text-[#4fd1ff] hover:text-[#00c4ff] underline transition-colors duration-200"
												>
													{media.name}
												</a>
											</div>
										))}
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="sm:m-10 m-5 text-gray-300">
					<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
						<div className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden p-8">
							<h1 className="sm:text-5xl text-3xl font-bold text-[#33a400]">Message me</h1>
							<form className="m-10">
								<div className="flex w-full justify-center items-center">
									<label for="subject" className="text-xl">Subject:</label>
									<input id ="subject" className= "m-5 bg-[#0b1120] text-[#e5e7eb] placeholder-[#94a3b8] border border-[#334155] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] flex-1" placeholder="Subject"/>
								</div> 
								<div className=" w-full justify-center items-center">
									<label for="message" className="text-xl">Message:</label>
									<textarea id ="message" className= "m-5 mb-0 bg-[#0b1120] text-[#e5e7eb] placeholder-[#94a3b8] border border-[#334155] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] w-full h-40 justify-start" placeholder="Your Message"/>
									<div className="flex">
									<label for="attachment" className="flex m-2 mx-5 cursor-pointer">Attach a file: <img src="linkicon.svg" alt="" className="border-1 border-black rounded-md bg-[#0b1120] ml-2 "/></label>
									<input id="attachment" type="file" className="hidden" />
									</div>
								</div>
							</form>
						</div>
						
					</div>
				</div>
		</div>
	</>
	)
}
