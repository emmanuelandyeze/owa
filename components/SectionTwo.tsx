// app/components/OwaHelpSection.tsx
import Image from 'next/image';
import React from 'react';

const SectionTwo = () => {
	return (
		<section className="w-full mx-auto py-12 md:px-20">
			{/* Top Section */}
			<div className="bg-[#EDEAF1] w-[1240px] mx-auto rounded-[24px] p-12 md:pl-34 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-8 relative">
				<div className="w-[457px] space-y-[20px]">
					<h2 className="text-[#4D2A73] leading-[40px] text-[40px] md:text-[40px] font-[700]">
						OWA is created to help your business
					</h2>
					<p className="text-[#323C49] text-[20px] md:text-[20px] leading-[24px] font-[400]">
						We send friendly, trained agents to your market
						to help you record your stock and set up your
						books
					</p>
				</div>

				{/* Image with annotations */}
				<div className="relative w-full max-w-sm mx-auto h-[300px] rounded-xl">
					<Image
						src="/images/4.png"
						alt="OWA Market Support"
						fill
						className="object-cover rounded-xl"
					/>
					{/* Labels */}
					<div className="absolute flex gap-1 top-4 -left-40 bg-white border border-[#4D2A73] h-[41px] w-[200px] justify-left items-center rounded-[4px] px-2 py-1 text-sm shadow-sm">
						<svg
							width="22"
							height="21"
							viewBox="0 0 22 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="21"
								height="20"
								rx="3.5"
								stroke="#EDEEF0"
							/>
							<path
								d="M8.99993 13.8L6.19993 11L5.2666 11.9333L8.99993 15.6667L16.9999 7.66667L16.0666 6.73334L8.99993 13.8Z"
								fill="#006707"
							/>
						</svg>
						<p className="text-[#323C49] text-[12px] font-[500]">
							No smartphone required
						</p>
					</div>
					<div className="absolute flex gap-1 bottom-4 -left-40 bg-white border border-[#4D2A73] h-[41px] w-[200px] justify-left items-center rounded-[4px] px-2 py-1 text-sm shadow-sm">
						<svg
							width="22"
							height="21"
							viewBox="0 0 22 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="21"
								height="20"
								rx="3.5"
								stroke="#EDEEF0"
							/>
							<path
								d="M8.99993 13.8L6.19993 11L5.2666 11.9333L8.99993 15.6667L16.9999 7.66667L16.0666 6.73334L8.99993 13.8Z"
								fill="#006707"
							/>
						</svg>
						<p className="text-[#323C49] text-[12px] font-[500]">
							We meet you where you are
						</p>
					</div>
					<div className="absolute flex gap-1 top-40 -right-20 bg-white border border-[#4D2A73] h-[41px] w-[200px] justify-left items-center rounded-[4px] px-2 py-1 text-sm shadow-sm">
						<svg
							width="22"
							height="21"
							viewBox="0 0 22 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="21"
								height="20"
								rx="3.5"
								stroke="#EDEEF0"
							/>
							<path
								d="M8.99993 13.8L6.19993 11L5.2666 11.9333L8.99993 15.6667L16.9999 7.66667L16.0666 6.73334L8.99993 13.8Z"
								fill="#006707"
							/>
						</svg>
						<p className="text-[#323C49] text-[12px] font-[500]">
							We speak your language
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0">
					<svg
						width="134"
						height="134"
						viewBox="0 0 134 134"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M81.1014 15.2949C89.9645 6.43163 94.3961 2 99.903 2C105.41 2 109.842 6.43163 118.705 15.2949C127.568 24.1582 132 28.5898 132 34.0968C132 39.6037 127.568 44.0354 118.705 52.8986M52.8986 118.705C44.0354 127.568 39.6037 132 34.0968 132C28.5898 132 24.1582 127.568 15.295 118.705C6.43163 109.842 2 105.41 2 99.903C2 94.3961 6.43163 89.9645 15.295 81.1014"
							stroke="#4D2A73"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M29.3963 67L15.295 52.8986C6.43163 44.0354 2 39.6037 2 34.0968C2 28.5898 6.43163 24.1582 15.295 15.2949C24.1582 6.43163 28.5898 2 34.0968 2C39.6037 2 44.0354 6.43163 52.8986 15.2949L67 29.3963M29.3963 67L67 29.3963M29.3963 67L67 104.604M67 29.3963L104.604 67M67 104.604L81.1014 118.705C89.9645 127.568 94.3961 132 99.903 132C105.41 132 109.842 127.568 118.705 118.705C127.568 109.842 132 105.41 132 99.903C132 94.3961 127.568 89.9645 118.705 81.1014L104.604 67M67 104.604L104.604 67"
							stroke="#4D2A73"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
				{/* Left Box */}
				<div className="bg-[#F3F6FC] overflow-hidden flex flex-col justify-center pr-8 pl-28 py-8 w-[606px] h-[466px] rounded-[24px] space-y-6 relative">
					<div className="flex items-start gap-4">
						<div className="border border-[#C6CAD0] rounded-[8px] p-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 5H7V8H17V5H19V10H21V5C21 3.9 20.1 3 19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19H5V5ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3Z"
									fill="#323C49"
								/>
								<path
									d="M21 11.5L15.51 17L12.5 14L11 15.5L15.51 20L22.5 13L21 11.5Z"
									fill="#323C49"
								/>
							</svg>
						</div>
						<div className="flex flex-col gap-[8px]">
							<h3 className="text-[24px] font-[600] text-[#323C49]">
								Inventory management
							</h3>
							<p className="text-[16px] font-[400] text-[#323C49]">
								Know exactly what you have in stock
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="border border-[#C6CAD0] rounded-[8px] p-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM6 7H11V8.5H6V7ZM19 19H5L19 5V19ZM14.5 16V18H16V16H18V14.5H16V12.5H14.5V14.5H12.5V16H14.5Z"
									fill="#323C49"
								/>
							</svg>
						</div>
						<div className="flex flex-col gap-[8px]">
							<h3 className="text-[24px] font-[600] text-[#323C49]">
								Sales & Expense Tracking
							</h3>
							<p className="text-[16px] font-[400] text-[#323C49]">
								Record what you sell and what you spend
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="border border-[#C6CAD0] rounded-[8px] p-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 4V20H22V4H2ZM20 8.67H17.5V6H20V8.67ZM17.5 10.67H20V13.34H17.5V10.67ZM4 6H15.5V18H4V6ZM17.5 18V15.33H20V18H17.5Z"
									fill="#323C49"
								/>
							</svg>
						</div>
						<div className="flex flex-col gap-[8px]">
							<h3 className="text-[24px] font-[600] text-[#323C49]">
								Debt Management
							</h3>
							<p className="text-[16px] font-[400] text-[#323C49]">
								Keep track of who owes you and how much
							</p>
						</div>
					</div>

					{/* Decorative line bottom-left */}
					<div className="absolute -bottom-3 -left-4">
						<svg
							width="134"
							height="124"
							viewBox="0 0 134 124"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 75.3091V45.319C2 39.798 6.85023 35.3223 12.8333 35.3223C18.8164 35.3223 23.6667 39.798 23.6667 45.319V91.9703C23.6667 97.4911 28.5169 101.967 34.5 101.967C40.4831 101.967 45.3333 97.4911 45.3333 91.9703V11.9967C45.3333 6.47566 50.1836 2 56.1667 2C62.1496 2 67 6.47566 67 11.9967V111.964C67 117.485 71.8504 121.96 77.8333 121.96C83.8162 121.96 88.6667 117.485 88.6667 111.964V38.6546C88.6667 33.1335 93.5171 28.6579 99.5 28.6579C105.483 28.6579 110.333 33.1335 110.333 38.6546V85.3058C110.333 90.8267 115.184 95.3025 121.167 95.3025C127.15 95.3025 132 90.8267 132 85.3058V61.9802"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>

				{/* Right Box */}
				<div className="bg-[#FFFEEF] overflow-hidden flex flex-col justify-center pr-8 pl-28 py-8 w-[606px] h-[466px] rounded-[24px] space-y-6 relative">
					<div className="flex items-start gap-4">
						<div className="border border-[#C6CAD0] rounded-[8px] p-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 4.99 21H19C20.1 21 21 20.1 21 19V9L15 3ZM5 19V5H14V10H19V19H5ZM9 8C9 8.55 8.55 9 8 9C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7C8.55 7 9 7.45 9 8ZM9 12C9 12.55 8.55 13 8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12ZM9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16Z"
									fill="#323C49"
								/>
							</svg>
						</div>
						<div className="flex flex-col gap-[8px]">
							<h3 className="text-[24px] font-[600] text-[#323C49]">
								Weekly Summaries
							</h3>
							<p className="text-[16px] font-[400] text-[#323C49]">
								Understand your profit in simple terms
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="border border-[#C6CAD0] rounded-[8px] p-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.6 10.26V11.57L17 9.33L14.6 7.1V8.38C12.27 8.7 11.34 10.3 11 11.9C11.83 10.77 12.93 10.26 14.6 10.26ZM16 23H6C4.9 23 4 22.1 4 21V5H6V21H16V23ZM18 1H10C8.9 1 8 1.9 8 3V17C8 18.1 8.9 19 10 19H18C19.1 19 20 18.1 20 17V3C20 1.9 19.1 1 18 1ZM18 16H10V4H18V16Z"
									fill="#323C49"
								/>
							</svg>
						</div>
						<div className="flex flex-col gap-[8px]">
							<h3 className="text-[24px] font-[600] text-[#323C49]">
								Offline & Agent Support
							</h3>
							<p className="text-[16px] font-[400] text-[#323C49]">
								No internet? No problem, we come to you
							</p>
						</div>
					</div>
					<div className="flex items-start gap-4">
						<div className="border border-[#C6CAD0] rounded-[8px] p-2">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"
									fill="#323C49"
								/>
								<path
									d="M17.5 10.5C18.38 10.5 19.23 10.59 20 10.76V9.24C19.21 9.09 18.36 9 17.5 9C15.8 9 14.26 9.29 13 9.83V11.49C14.13 10.85 15.7 10.5 17.5 10.5ZM13 12.49V14.15C14.13 13.51 15.7 13.16 17.5 13.16C18.38 13.16 19.23 13.25 20 13.42V11.9C19.21 11.75 18.36 11.66 17.5 11.66C15.8 11.66 14.26 11.96 13 12.49ZM17.5 14.33C15.8 14.33 14.26 14.62 13 15.16V16.82C14.13 16.18 15.7 15.83 17.5 15.83C18.38 15.83 19.23 15.92 20 16.09V14.57C19.21 14.41 18.36 14.33 17.5 14.33Z"
									fill="black"
								/>
							</svg>
						</div>
						<div className="flex flex-col gap-[8px]">
							<h3 className="text-[24px] font-[600] text-[#323C49]">
								Digital & paper logbook
							</h3>
							<p className="text-[16px] font-[400] text-[#323C49]">
								We give you a record book that works better
								for you
							</p>
						</div>
					</div>

					{/* Decorative line bottom-left */}
					<div className="absolute -bottom-1 -left-1">
						<svg
							width="104"
							height="100"
							viewBox="0 0 104 100"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2.37976 36.1202C4.75952 38.5 8.5897 38.5 16.25 38.5C23.9103 38.5 27.7405 38.5 30.1202 36.1202C32.5 33.7405 32.5 29.9103 32.5 22.25C32.5 14.5897 32.5 10.7595 30.1202 8.37976C27.7405 6 23.9103 6 16.25 6C8.5897 6 4.75952 6 2.37976 8.37976C6.45717e-07 10.7595 0 14.5897 0 22.25C0 29.9103 6.45717e-07 33.7405 2.37976 36.1202Z"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M67.3795 36.1202C69.7596 38.5 73.5898 38.5 81.25 38.5C88.9102 38.5 92.7404 38.5 95.1205 36.1202C97.5 33.7405 97.5 29.9103 97.5 22.25C97.5 14.5897 97.5 10.7595 95.1205 8.37976C92.7404 6 88.9102 6 81.25 6C73.5898 6 69.7596 6 67.3795 8.37976C65 10.7595 65 14.5897 65 22.25C65 29.9103 65 33.7405 67.3795 36.1202Z"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M67.3795 101.12C69.7596 103.5 73.5898 103.5 81.25 103.5C88.9102 103.5 92.7404 103.5 95.1205 101.12C97.5 98.7404 97.5 94.9102 97.5 87.25C97.5 79.5898 97.5 75.7596 95.1205 73.3795C92.7404 71 88.9102 71 81.25 71C73.5898 71 69.7596 71 67.3795 73.3795C65 75.7596 65 79.5898 65 87.25C65 94.9102 65 98.7404 67.3795 101.12Z"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.37976 101.12C4.75952 103.5 8.5897 103.5 16.25 103.5C23.9103 103.5 27.7405 103.5 30.1202 101.12C32.5 98.7404 32.5 94.9102 32.5 87.25C32.5 79.5898 32.5 75.7596 30.1202 73.3795C27.7405 71 23.9103 71 16.25 71C8.5897 71 4.75952 71 2.37976 73.3795C6.45717e-07 75.7596 0 79.5898 0 87.25C0 94.9102 6.45717e-07 98.7404 2.37976 101.12Z"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M48.75 22.25H32.5"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M65 87.25H48.75"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M81.25 54.75V38.5"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M16.25 71V54.75"
								stroke="#4D2A73"
								stroke-width="3"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionTwo;
