export default function Navbar(){
	return(
	<nav className="
		fixed top-4 left-1/2 transform -translate-x-1/2
		w-11/12 max-w-4xl z-50
		backdrop-blur-md bg-white/90
		border border-white/20
		rounded-xl py-4 px-6 text-[#0b1120]/50"
	>
     <div className="flex items-center justify-between">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Pramish</h1>

        <div className="flex text-[#9b9b9b] w-1/2 justify-around ">
			<ul className="list-none text-sm sm:text-base md:text-lg hover:text-[#0b1120]/60">
				<li>
					<a href="/" className="hover:text-[#0b1120]/60 text-sm sm:text-base md:text-lg hover:text-[#e4e4e4]">Home</a>
				</li>
			</ul>
			<ul className="list-none text-sm sm:text-base md:text-lg hover:text-[#0b1120]/50">
				<li>
					<a href="/projects" className="hover:text-[#0b1120]/50">Projects</a>
				</li>
			</ul>
			<ul className="list-none text-sm sm:text-base md:text-lg hover:text-[#0b1120]/50">
				<li>
					<a href="/skills" className="hover:text-[#0b1120]/50">Skills</a>
				</li>
			</ul>
			<ul className="list-none text-sm sm:text-base md:text-lg hover:text-[#0b1120]/50">
				<li>
					<a href="/contact" className="hover:text-[#0b1120]/50">Contact</a>
				</li>
			</ul>
		</div>

      </div>
    </nav>
	)
}
