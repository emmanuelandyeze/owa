'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full bg-[#f4f2f7]/60 border-b border-[#E3DCEC] z-50">
			<nav className="max-w-[1240px] mx-auto flex justify-between items-center h-[80px] px-0">
				{/* Logo */}
				<Link href="/">
					<Image
						alt="OWA Logo"
						src="/images/logo.png"
						width={70}
						height={100}
						className="h-auto w-auto"
						priority
					/>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex space-x-4">
					<Link href="/agent">
						<button className="px-4 py-2 text-sm border border-[#4D2A73] text-[#4D2A73] bg-white rounded hover:bg-[#4D2A73] hover:text-white transition">
							Become an Agent
						</button>
					</Link>
					<Link href="/contact">
						<button className="px-4 py-2 text-sm bg-[#4D2A73] text-white rounded hover:opacity-90 transition">
							Contact Us
						</button>
					</Link>
				</div>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Slide-out Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50 transition-transform duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex justify-between items-center mb-6">
					<span className="text-lg font-bold">Menu</span>
					<button onClick={() => setIsOpen(false)}>
						<X size={24} />
					</button>
				</div>

				<div className="flex flex-col space-y-4">
					<Link
						href="/become-agent"
						onClick={() => setIsOpen(false)}
					>
						<span className="block px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition cursor-pointer">
							Become an Agent
						</span>
					</Link>
					<Link
						href="/contact"
						onClick={() => setIsOpen(false)}
					>
						<span className="block px-4 py-2 bg-black text-white rounded hover:opacity-90 transition cursor-pointer">
							Contact Us
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
