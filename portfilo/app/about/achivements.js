import data from "@/data/about/achivements.json";
import Image from "next/image";

export default function Achivements() {
	return (
		<div className="m-10 text-gray-300">
			<h1 className="text-5xl font-bold text-[#33a400]">
				{data.Heading}
			</h1>

			<div className="mt-4 flex bg-[#121830] text-[#e0e0e0] gap-5 sm:gap-10 pt-4 pb-7 px-7 rounded-2xl relative shadow-[inset_0_8px_15px_#0b1120,inset_0_-8px_15px_#0b1120,inset_0_0_30px_#0b1120] flex">
				{data.des.map((item, index) => (
					<div
						key={index}
						className="bg-[#1f2940] w-full flex flex-col gap-3 flex-shrink-0  border border-[#3d5afe] rounded-3xl transition-transform min-h-screen shadow-lg shadow-[#0b1120]/50 overflow-hidden "
					>
						{/* Background Image */}
						{/*{item.bgimg && (*/}
							<div className="w-full flex-1 relative  overflow-hidden min-h-[200px] sm:min-h-[300px]">
								<Image
									src={item.bgimg}
									alt="achievement cover"
									fill
									sizes="100%, 100%"
									className="object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f2940]" />
							</div>
						{/*)}*/}

						{/* Title */}
						<div className="mx-5 sm:mx-7 mt-10 mb-15">
						<div className="flex items-center gap-3">
							<h2 className="text-3xl font-bold text-white break-words">
								{item.title}
							</h2>
						</div>

						{/* Description */}
						<div className="flex mt-1 ml-1">
							<div className="w-1 mr-2 bg-gray-600 rounded-full" />
							<div>
							{item.des.map((par,idx)=>(
							<p key={idx} className="text-[#e0e0e0] mt-2 text-sm leading-relaxed">
								{par}
							</p>
							))}
							</div>
						</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
