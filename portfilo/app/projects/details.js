"use client"
import {useEffect, useState} from "react"
export default function Details({project}){
	const [des,setDes] = useState("")
	const rl = project?.link || ""
	useEffect(()=>{
		const [,owner, repo] = new URL(project.link).pathname.split("/")
		fetch(`https://api.github.com/repos/${owner}/${repo}`)
			.then(res=>res.json())
			.then(data=>setDes(data.description || ""))
			.catch(err=>console.error(err))
	},[rl])
	
	return (
		<details className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden group">
			<summary className="list-none mb-15 [&::marker]:hidden mx-5 sm:mx-7 cursor-pointer">
				<div className=" mt-10 flex">
					<h1 className="text-3xl font-bold text-[#33a400]/85 flex-1">{project.title}</h1>
					<div className="w-1/5 flex items-center justify-center">
						<div
							className="h-10 w-10 rotate-45 border-b-2 border-r-2 transition-transform group-open:-rotate-[135deg]"
						/>
					</div>
				</div>
				<div className="flex mt-3">
					<div className="w-2 bg-gray-600"/>
					<p className="ml-2 text-gray-300 text-sm">{des}</p>
					</div>
			</summary>
			<div>hello</div>
		</details>
	)
}
