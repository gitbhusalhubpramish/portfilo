"useclient"
import Link from "next/link";
import navlink from "../data/navlinks.json";
export default function Footer(){
	return (
		<>
			<div className="p-3 bg-[#070a13] flex flex-col justify-center">
				<div className="flex justify-center">
					<p>© 2025 Pramish Bhusal. All rights reserved.</p>
				</div>
				<div>
					<div className="flex justify-around">
						<div>
						<h1 className="m-1">Quick navigation</h1>
						<ul>
							{navlink.map((item,index)=>(
								<li key={index}><Link className="m-1 underline text-blue-500 hover:text-blue-600" href={item.href}>{item.name}</Link></li>
							))}
						</ul>
						</div>
						<div>
						
						</div>
						<div>
							<h1 className="m-1">Contact</h1>
							<ul>
								<li><a className="m-1 underline text-blue-500 hover:text-blue-600" href="mailto:bpramish71@gmail.com">bpramish71@gmail.com</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div>
					<h1 className="text-xl ">Tech stack</h1>
					<p>Built with Next.js · Tailwind CSS · React</p>
					</div>
				</div>
				<div className="flex justify-center m-2">
					<p>Source available on <a className="underline text-blue-500 hover:text-blue-600" href="https://github.com/gitbhusalhubpramish/portfilo">GitHub</a></p>
				</div>
			</div>
		</>
	)
}
