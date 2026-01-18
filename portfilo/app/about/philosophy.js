import data from "@/data/about/philosophy.json"
export default function Philosophy(){
	return (
	<div className="m-10 text-gray-300">
		<h1 className="text-5xl font-bold text-[#33a400]">
			{data.heading}
		</h1>
		<div className="mt-4 flex flex-wrap bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
				{data.des.map((item, index) => (
					<div
						key={index}
						className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform  shadow-lg shadow-[#0b1120]/50 overflow-hidden "
					>

						{/* Title */}
						<div className="mx-5 sm:mx-7 mt-10 mb-15">
							<div className="bg-black text-green-400 font-mono p-6 rounded-lg  shadow-inner">
								<h3 className="">
									{item.quote}
								</h3>
								<p className="text-end">-{item.speaker}</p>
							</div>

							{/* Description */}
							<div className="flex mt-3 ml-1">
								<div className="w-1 mr-2 bg-gray-600 rounded-full" />
									<div className="text-sm">
										{item.des}
									</div>
								
								</div>
							</div>
							
							
					</div>
				))}
			</div>
	</div>
	)
}
