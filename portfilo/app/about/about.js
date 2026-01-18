import data from "@/data/about/about.json"
export default function AboutMe(){
	return (
		<>
			<div className="m-10 text-gray-300">
				<h1 className="text-5xl font-bold text-[#33a400]">{data.Heading}</h1>
				<div className={data.cls}>
					{data.ds?<div className=" w-2 mr-4 bg-gray-600"></div>:""}
					<p>{data.des}</p>
				</div>
			</div>
		</>
	)
}
