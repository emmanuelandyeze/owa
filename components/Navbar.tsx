'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
			const handleScroll = () => {
				setScrolled(window.scrollY > 5);
			};
			window.addEventListener('scroll', handleScroll);
			return () =>
				window.removeEventListener('scroll', handleScroll);
		}, []);

	return (
		<header
			className={`fixed top-0 left-0 w-full border-b border-[#E3DCEC] z-100 ${
				scrolled
					? 'bg-[#f4f2f7]/60 backdrop-blur-lg'
					: 'bg-[#f4f2f7]'
			}`}
		>
			<nav className="max-w-[1240px] mx-auto flex justify-between items-center h-[80px] px-4 md:px-0">
				{/* Logo */}
				<Link href="/">
					<Image
						alt="OWA Logo"
						src="/images/logo.png"
						width={62}
						height={62}
						className="h-auto hidden md:block w-auto"
						priority
					/>
					<Image
						alt="OWA Logo"
						src="/images/logo.png"
						width={50}
						height={50}
						className="h-auto block md:hidden w-auto"
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
					{isOpen ? (
						<X size={24} />
					) : (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 15.5V17.5H22V15.5H2ZM2 10.5V12.5H22V10.5H2ZM2 5.5V7.5H22V5.5H2Z"
								fill="#48505E"
							/>
						</svg>
					)}
				</button>
			</nav>

			{/* Slide-out Mobile Menu */}
			<div
				className={`fixed top-0 right-0 h-[100vh] w-64 z-100 overflow-y-auto bg-white p-6 transition-transform duration-300 ease-in-out shadow-xl ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex justify-between items-center mb-6">
					<span className="text-lg font-bold"></span>
					<button onClick={() => setIsOpen(false)}>
						<X size={24} />
					</button>
				</div>

				<div className="flex flex-col z-50 space-y-4">
					<Link
						href="/contact"
						onClick={() => setIsOpen(false)}
					>
						<span className="block px-4 py-2 text-[14px] font-[400] text-[#48505E] border-b-[1px] hover:opacity-90 transition cursor-pointer">
							Contact us
						</span>
					</Link>
					<Link
						href="/agent"
						onClick={() => setIsOpen(false)}
					>
						<span className="block px-4 py-2 text-[14px] font-[400] text-[#48505E] border-b-[1px] hover:opacity-90 transition cursor-pointer">
							Become an agent
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
