import navLinks from "../data/navlinks.json";
import Link from 'next/link';
export default function Menu(){
	return(
		<div className="h-full w-2/3 flex flex-col bg-[#1a1918]">
			{navLinks.map((item, index)=>{
				return(
					<button
						key={index}
						className="px-6 py-3 text-lg rounded-lg hover:bg-white/10 transition"
					>
						<Link href={item.href}>{item.name}</Link>
					</button>

				)
			})}
		</div>
	)
}
