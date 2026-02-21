import data from "@/data/project.json"
import Details from "./details.js"
export const metadata = {
  title: "Projects – Pramish Bhusal | Next.js Portfolio",
  description:
    "Browse projects by Pramish Bhusal including Next.js web apps, React projects, API integrations, and real-world portfolio builds with live demos.",
  openGraph: {
    title: "Projects by Pramish Bhusal",
    description:
      "Next.js, React, and JavaScript projects with demos and source code.",
    type: "website",
  },
};
export default function Project(){
	return (
		<div className="min-h-screen sm:m-[15%] mx-0 m-30">
			{data.projects.map((project,index)=>(
				<div id={project.id} key={index} className="sm:m-10 m-5 text-gray-300">
					<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
						<Details project={project}/>
					</div>
				</div>
			))}
		</div>
		
	)
}
