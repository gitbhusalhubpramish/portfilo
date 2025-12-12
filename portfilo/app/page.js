import Navbar from "../components/navbar";
import image from "../public/homeimg.jpg";
import Image from "next/image";

export default function Home() {
  return (
  <>
	<div>
		<Navbar/>
    </div>
    
    <div className="flex flex-col h-screen text-base"> 
		<div className="w-full h-2/3 relative">
			<Image alt="cover" src={image} className="w-full h-full object-cover"/>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b1120]" />
		</div>
		<div className=" mx-10">
			<h1 className="font-mono text-5xl sm:text-7xl text-[#008000]">prit.py</h1>
			<p className="m-1">Full-Stack Developer | Python Programmer</p>
		</div>
		<div>
			<div className="flex gap-4 mt-4">
				<a href="https://www.facebook.com/pramish.bhusal.393143/" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1f2b] hover:bg-[#0c0e13] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
						<path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.636h-3.12V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0z"/>
					</svg>
				</a>

				<a href="https://www.instagram.com/prit.py/" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1f2b] hover:bg-[#0c0e13] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
						<path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608C4.516 2.495 5.783 2.225 7.149 2.163 8.415 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.769.127 4.623.397 3.677 1.343 2.73 2.29 2.46 3.436 2.403 4.719.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.057 1.283.327 2.429 1.273 3.376.947.947 2.093 1.217 3.376 1.273 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.283-.057 2.429-.327 3.376-1.273.947-.947 1.217-2.093 1.273-3.376.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.057-1.283-.327-2.429-1.273-3.376-.947-.947-2.093-1.217-3.376-1.273C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
					</svg>
				</a>

				<a href="https://www.linkedin.com/in/pramish-bhusal-a68a05351/" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1c1f2b] hover:bg-[#0c0e13] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24">
						<path d="M22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.208 24 24 23.229 24 22.278V1.723C24 .771 23.208 0 22.225 0zM7.084 20.452H3.558V9h3.526v11.452zM5.321 7.577a2.043 2.043 0 1 1 0-4.086 2.043 2.043 0 0 1 0 4.086zm15.13 12.875h-3.526v-5.568c0-1.328-.027-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.938v5.667h-3.526V9h3.387v1.561h.048c.472-.893 1.627-1.834 3.348-1.834 3.579 0 4.242 2.355 4.242 5.419v6.306z"/>
					</svg>
				</a>
			</div>


		</div>
    </div>
    </>
  );
}
