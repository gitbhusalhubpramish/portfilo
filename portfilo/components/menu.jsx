import navLinks from "../data/navlinks.json";
import Link from 'next/link';
export default function Menu({show}){
	return(
		<div 
			className={`h-full w-2/3 flex flex-col bg-[#1a1918] transition-transform duration-300 ease-out ${show ? "translate-x-0" : "translate-x-full"}`}
			onClick = {(e)=> e.stopPropagation()}
		>
			{navLinks.map((item, index)=>{
				return(
					<button
						key={index}
						className="px-6 py-3 text-lg rounded-lg hover:bg-white/20 cursor-pointer"
					>
						<Link href={item.href} className="block w-full h-full">{item.name}</Link>
					</button>

				)
			})}
		</div>
	)
}
