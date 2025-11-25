export default function Navbar(){
	return(
	<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-50 backdrop-blur-md bg-white border border-white/20 rounded-xl py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold w-1/2">Pramish</h1>

        <div className="flex text-[#9b9b9b] w-1/2 justify-around">
			<ul className="list-none">
				<li>
					<a href="/" className="hover:text-[#e4e4e4]">Home</a>
				</li>
			</ul>
			<ul className="list-none">
				<li>
					<a href="/projects" className="hover:text-[#e4e4e4]">Projects</a>
				</li>
			</ul>
			<ul className="list-none">
				<li>
					<a href="/skills" className="hover:text-[#e4e4e4]">Skills</a>
				</li>
			</ul>
			<ul className="list-none">
				<li>
					<a href="/contact" className="hover:text-[#e4e4e4]">Contact</a>
				</li>
			</ul>
		</div>

      </div>
    </nav>
	)
}
