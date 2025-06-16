import Image from 'next/image';
import React from 'react';

const Landing = () => {
	return (
		<div className="bg-[#EDEAF1] relative h-[60vh] md:min-h-[90vh] overflow-hidden flex flex-col justify-center items-center">
			<div className="absolute block md:hidden top-24 md:top-10 left-[50%] transform -translate-x-1/2">
				<svg
					width="220"
					height="220"
					viewBox="0 0 220 220"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.3">
						<circle
							cx="110"
							cy="110"
							r="109.5"
							stroke="#C8BDD4"
						/>
						<circle
							cx="110"
							cy="110"
							r="89.7564"
							stroke="#C8BDD4"
						/>
						<circle
							cx="110.244"
							cy="109.756"
							r="70.7195"
							stroke="#C8BDD4"
						/>
					</g>
				</svg>
			</div>
			<div className="absolute hidden md:block top-40 md:top-10 left-[50%] transform -translate-x-1/2">
				<svg
					width="451"
					height="451"
					viewBox="0 0 451 451"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.3">
						<circle
							cx="225.5"
							cy="225.5"
							r="225"
							stroke="#C8BDD4"
						/>
						<circle
							cx="225.5"
							cy="225.5"
							r="184.526"
							stroke="#C8BDD4"
						/>
						<circle
							cx="226"
							cy="225"
							r="145.5"
							stroke="#C8BDD4"
						/>
					</g>
				</svg>
			</div>
			<div className="w-full md:w-[807px] px-4 md:px-0 z-20 md:h-[451px] pt-28 md:mt-20 md:mb-10 flex flex-col justify-center items-center gap-[8px]">
				<h1 className="text-[#4D2A73] font-[600] md:font-[700] text-[24px] md:text-[56px] leading-[28px] md:leading-[64px] text-left md:text-center">
					Smart Bookkeeping for Every Market Woman
				</h1>
				<p className="text-[14px] md:text-[20px] leading-[18px] md:leading-[24px] font-[400] text-[#323C49] text-left md:text-center">
					OWA by Pepcode helps market women track sales,
					manage stock, and grow their businesses with
					support from trained agents who visit you in your
					market
				</p>
				<a
					href="/contact"
					className="py-[10px] px-[16px] mt-4 font-[400] w-full md:w-[250px] text-center text-[14px] border-[1px] bg-[#4D2A73] text-[#FFF] cursor-pointer border-[#4D2A73] rounded-[4px] transition"
				>
					Contact us today
				</a>
			</div>
			<div className="absolute top-[63%] md:top-[50%] right-0 z-0">
				<svg
					width="1545"
					height="1760"
					viewBox="0 0 1545 1760"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1543.65 2.75513C914.717 335.949 -275.568 -141.757 61.9053 1759.05"
						stroke="#4D2A73"
						strokeWidth="4"
					/>
				</svg>
			</div>
			<div className="relative z-10 w-[966px] h-[318px] flex flex-row gap-[12px] justify-center items-center">
				<div className="relative hidden md:block w-[314px] h-[318px] rounded-t-[12px] border border-[#E3DCEC] bg-white overflow-hidden">
					<Image
						src="/images/1.png"
						alt="Landing Image 1"
						fill
						className="object-cover"
					/>
				</div>
				<div className="relative w-[355px] h-[192px] md:w-[314px] md:h-[318px] mt-8 md:mt-0 rounded-t-[12px] border border-[#E3DCEC] bg-white overflow-hidden">
					<Image
						src="/images/2.png"
						alt="Landing Image 1"
						fill
						className="object-cover"
					/>
				</div>
				<div className="relative hidden md:block w-[314px] h-[318px] rounded-t-[12px] border border-[#E3DCEC] bg-white overflow-hidden">
					<Image
						src="/images/3.png"
						alt="Landing Image 1"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="absolute hidden md:block -bottom-60 -left-48 z-0">
				<svg
					width="396"
					height="441"
					viewBox="0 0 396 441"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="64.3743"
						width="336"
						height="391"
						rx="24"
						transform="rotate(9.47632 64.3743 0)"
						fill="#4D2A73"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Landing;
