"use client"
import { useState } from "react";
import MeanuIcon from "./meanuicon";
import Menu from "./menu";
import navLinks from "../data/navlinks.json";
import Link from "next/link";

export default function Navbar() {
	const [showmenu, setshowmenu] = useState(false);

	const navcls =
		"fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 " +
		"backdrop-blur-xl bg-gradient-to-r from-white/60 to-white/40 " +
		"border border-white/30 rounded-2xl px-6 py-3 shadow-lg";

	const ulcls =
		"list-none text-sm sm:text-base md:text-lg text-[#0b1120]/70";

	const linkclass =
		"relative transition-all duration-200 hover:text-[#0b1120] " +
		"after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0b1120] " +
		"after:transition-all after:duration-300 hover:after:w-full";

	return (
		<>
			{/* Overlay */}
			<div
				className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-60 flex justify-end
					transition-opacity duration-300
					${showmenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
				`}
				onClick={() => setshowmenu(false)}
			>
				<Menu show={showmenu} />
			</div>

			<nav className={navcls}>
				<div className="flex items-center justify-between">
					{/* Logo */}
					<h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#0b1120]">
						Pramish
					</h1>

					{/* Desktop Nav */}
					<div className="hidden sm:flex gap-6 md:gap-10">
						{navLinks.map((item, index) => (
							<ul className={ulcls} key={index}>
								<li>
									<Link href={item.href} className={linkclass}>
										{item.name}
									</Link>
								</li>
							</ul>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setshowmenu(!showmenu)}
						className="sm:hidden rounded-lg border border-black/10 bg-black/5 px-2 py-1 hover:bg-black/10 active:scale-95 transition"
					>
						<MeanuIcon />
					</button>
				</div>
			</nav>
		</>
	);
}
