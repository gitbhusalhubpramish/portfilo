import data from "@/data/about/achivements.json"
export default function Achivements(){
	return (
		<div className="m-10 text-gray-300">
			<h1 className="text-5xl font-bold text-[#33a400]">{data.Heading}</h1>
			
			<div className="mt-4 flex bg-[#121830] text-[#e0e0e0] overflow-x-auto gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] ">
				{data.des.map((item,index)=>(
					<div key={index} className="bg-[#1f2940] w-full flex flex-wrap gap-2 flex-shrink-0 sm:p-7 p-5 border border-[#3d5afe] rounded-3xl transition-transform hover:bg-[#26314f] shadow-lg shadow-[#0b1120]/50">
						<div className="flex flex-wrap-reverse items-center gap-3">
							<h1 className="flex-1 text-xl font-bold text-white break-words">
								{item.title}
							</h1>
						</div>



						<div className="flex m-1">
							<div className="w-2 mr-1 bg-gray-600"/>
							<p className="text-[#e0e0e0]">{item.des}</p>
						</div>
						
					</div>
				))}
			</div>
		</div>
	)
}
