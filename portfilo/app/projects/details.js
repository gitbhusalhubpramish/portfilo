"use client"
import {useEffect, useState} from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Details({project}){
	const [des,setDes] = useState("")
	const [readme, setReadme] = useState(null)
	const [topics,setTopics] = useState([])
	const rl = project?.link || ""
	
	useEffect(()=>{
		const [,owner, repo] = new URL(project.link).pathname.split("/")
		fetch(`https://api.github.com/repos/${owner}/${repo}`)
			.then(res=>res.json())
			.then(data=>{setDes(data.description || ""); setTopics(data.topics || "")})
			.catch(err=>console.error(err))
			fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`)
    .then(res => {
      if (!res.ok) throw new Error("README not found")
      return res.text()
    })
    .then(data => setReadme(data))
    .catch(() => setReadme("No README available"))
	},[rl])
	
	return (
		<details className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden group">
			<summary className="list-none mb-15 [&::marker]:hidden mx-5 sm:mx-7 cursor-pointer">
				<div className=" mt-10 flex ">
					<h1 className="sm:text-4xl text-3xl font-bold text-[#33a400]/85 flex-1">{project.title}</h1>
					<div className="w-1/5 flex items-center justify-center">
						<div
							className="h-10 w-10 rotate-45 border-b-2 border-r-2 transition-transform group-open:-rotate-[135deg] origin-[75%_75%]"
						/>
					</div>
				</div>
				<div className="flex mt-3 group-open:hidden">
					<div className="w-2 bg-gray-600"/>
					<p className="ml-2 text-gray-300 text-sm">{des}</p>
				</div>
				<div className="group-open:hidden mt-5">
					<hr className="border-t-[#3d5afe]"/>
					<div className="flex gap-3 flex-wrap m-3">
						{topics.map((topic, index)=>(
						<div className=" rounded-xl px-2 m-1 text-[#478be6] bg-[#4184e41a]" key={index}>{topic}</div>
						))}
					</div>
				</div>
				<div className="text-end ">
				<a className="text-gray-500 cursor-pointer underline group-open:hidden decoration-dashed" href={project.link} target="_blank">view on Github{">"}</a>
			</div>
			</summary>
			<div className="mx-5 sm:mx-7 mb-16 prose prose-invert max-w-none [&>h1]:text-3xl [&>h1]:font-bold [&>h2]:text-2xl [&>h3]:text-xl [&>pre]:bg-[#343541] [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:text-white [&_code]:bg-[#343541] [&_code]:rounded-lg [&_code]:p-1 [&_code]:text-white [&>*]:m-1 [&>h1]:mt-4 [&>h2]:mt-3 [&>h3]-mt-2 [&>ul]:list-disc [&>ul]:ml-10 [&>table]:min-w-2/3 [&>table]:text-center [&>table_*]:border-1 [&>table]:border-white [&>table]:overflow-auto [&>pre]:overflow-auto">

				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{readme ?? ""}
				</ReactMarkdown>
			</div>
			<div className=" m-8 ">
					<hr className="border-t-[#3d5afe]"/>
					<div className="flex gap-3 flex-wrap m-3">
						{topics.map((topic, index)=>(
						<div className=" rounded-xl px-1 text-[#478be6] bg-[#4184e41a]" key={index}>{topic}</div>
						))}
					</div>
				</div>
			<div className="text-end m-8 mb-15 decoration-dashed">
				<a className="text-gray-500 cursor-pointer underline" href={project.link} target="_blank">view on Github{">"}</a>
			</div>
		</details>
	)
}
