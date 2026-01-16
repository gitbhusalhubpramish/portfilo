import data from "@/data/about/skills.json"
export default function Skills(){
	return (
		<div className="m-10 text-gray-300">
			<h1 className="text-5xl font-bold text-[#33a400]">{data.Heading}</h1>
			
			<div className="mt-4 flex bg-[#121830] text-[#e0e0e0] overflow-x-auto gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] [&>*]:bg-[#1f2940] [&>*]:sm:w-3/7 [&>*]:w-2/3 [&>*]:flex [&>*]:flex-wrap [&>*]:gap-2 [&>*]:justify-center [&>*]:flex-shrink-0 [&>*]:sm:p-7 [&>*]:p-5 [&>*]:border [&>*]:border-[#3d5afe] [&>*]:rounded-3xl [&>*]:transition-transform [&>*]:hover:bg-[#26314f] [&>*]:hover:-translate-y-1 [&>*]:shadow-lg [&>*]:shadow-[#0b1120]/50 ">
				{data.des.map((item,index)=>(
					<div key={index}>
						<div className="flex flex-wrap items-center gap-3">
	<img
		className="flex-shrink-0 sm:w-[45%] w-4/5 h-25 object-contain"
		src={item.img}
		alt={item.alt}
	/>

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
