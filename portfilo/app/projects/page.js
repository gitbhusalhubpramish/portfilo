import data from "@/data/project.json"
export const metadata = {
  title: "My projects",
  description: "Portfolio of Pramish Bhusal, a Nepali developer skilled in JavaScript, Python, C++, and more. Projects, blogs, and contact.",
  keywords: [
      "Pramish Bhusal",
      "Nepal developer",
      "13 years old prodigi",
      "Pygame chess",
      "JavaScript developer Nepal",
      "Python projects",
      "Next.js portfolio"
  ]
};
export default function Project(){
	return (
		<div className="min-h-screen sm:m-[15%] mx-0 m-30">
			{data.projects.map((item,index)=>(
				<div key={index} className="m-10 text-gray-300">
					<h1 className="text-5xl font-bold text-[#33a400]">{item.topic} Project</h1>
					<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
						{item.list.map((project,index)=>(
							<details className="bg-[#1f2940] w-full group flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden " key={index}>
								<summary className="list-none [&::marker]:hidden flex cursor-pointer">
									<h1 className="mx-5 sm:mx-7 mt-10 mb-15 text-3xl font-bold text-[#33a400]/85">{project.title}</h1>
									<div
										className="h-10 w-10 rotate-45 border-b-2 border-r-2 transition-transform group-open:rotate-[225deg]"
									/>
								</summary>
							</details>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
