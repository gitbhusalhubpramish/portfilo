import navLinks from "../data/navlinks.json";
export default function Menu(){
	return(
		<div className="h-full w-1/3 flex flex-col">
			{navLinks.map(()=>{})}
		</div>
	)
}
