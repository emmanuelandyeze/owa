// app/components/OwaExplanationSection.tsx
import Image from "next/image";
import React from "react";

const SectionThree = () => {
	return (
		<section className="md:w-[1240px] mx-auto px-4 pt-0 pb-12 md:px-0 space-y-12">
			{/* How It Works */}
			<div className="bg-[#4D2A73] md:justify-between text-white rounded-[24px] pt-8 px-4 pb-40 md:p-16 flex flex-col md:flex-row gap-8 items-center relative">
				<div className="md:w-[988px] flex md:flex-row flex-col-reverse justify-between gap-10 md:gap-0 ">
					{/* Image */}
					<div className="w-full max-w-[358px] border-[2px] border-[#fff] h-[305px] rounded-xl overflow-hidden relative">
						<Image
							src="/images/5.jpg"
							alt="Market Visit"
							fill
							className="object-cover rounded-xl"
						/>
					</div>

					{/* Text Content */}
					<div className="justify-end space-y-4">
						<h2 className="text-[24px] md:text-[40px] font-[700]">
							How it works
						</h2>
						<ul className="space-y-[20px] text-base">
							<li className="flex items-center gap-2">
								<span className="bg-[#fff] p-2 rounded-full">
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.99993 11.3001L3.19993 8.50006L2.2666 9.4334L5.99993 13.1667L13.9999 5.16673L13.0666 4.2334L5.99993 11.3001Z"
											fill="#006707"
										/>
									</svg>
								</span>{' '}
								<span className="text-[16px] md:text-[20px] font-[400] text-[#fff]">
									Our agent visits your stall
								</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="bg-[#fff] p-2 rounded-full">
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.99993 11.3001L3.19993 8.50006L2.2666 9.4334L5.99993 13.1667L13.9999 5.16673L13.0666 4.2334L5.99993 11.3001Z"
											fill="#006707"
										/>
									</svg>
								</span>{' '}
								<span className="text-[16px] md:text-[20px] font-[400] text-[#fff]">
									We help you record your inventory and
									expenses
								</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="bg-[#fff] p-2 rounded-full">
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.99993 11.3001L3.19993 8.50006L2.2666 9.4334L5.99993 13.1667L13.9999 5.16673L13.0666 4.2334L5.99993 11.3001Z"
											fill="#006707"
										/>
									</svg>
								</span>{' '}
								<span className="text-[16px] md:text-[20px] font-[400] text-[#fff]">
									You get a personalized logbook
								</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="bg-[#fff] p-2 rounded-full">
									<svg
										width="16"
										height="17"
										viewBox="0 0 16 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.99993 11.3001L3.19993 8.50006L2.2666 9.4334L5.99993 13.1667L13.9999 5.16673L13.0666 4.2334L5.99993 11.3001Z"
											fill="#006707"
										/>
									</svg>
								</span>{' '}
								<span className="text-[16px] md:text-[20px] font-[400] text-[#fff]">
									We check in regularly to help you stay on
									track
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Corner SVG */}
				<div className="absolute md:bottom-0 -bottom-4 -left-4 md:right-0">
					<svg
						width="132"
						height="132"
						viewBox="0 0 132 132"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M127.335 6.66506C114.006 -6.66375 76.188 9.54397 42.866 42.866C9.54397 76.188 -6.66375 114.006 6.66506 127.335C19.9939 140.664 57.8118 124.456 91.1337 91.1337C124.456 57.8118 140.664 19.9939 127.335 6.66506Z"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.66506 6.66506C-6.66375 19.9939 9.54397 57.8118 42.866 91.1337C76.188 124.456 114.006 140.664 127.335 127.335C140.664 114.006 124.456 76.188 91.1337 42.866C57.8118 9.54397 19.9939 -6.66375 6.66506 6.66506Z"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.66506 6.66506C-6.66375 19.9939 9.54397 57.8118 42.866 91.1337C76.188 124.456 114.006 140.664 127.335 127.335C140.664 114.006 124.456 76.188 91.1337 42.866C57.8118 9.54397 19.9939 -6.66375 6.66506 6.66506Z"
							stroke="white"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>

			{/* Why We Created OWA */}
			<div className="bg-[#F6F6F9] rounded-[24px] px-4 pt-8 pb-32 md:p-16 flex flex-col md:flex-col  relative">
				<div className="max-w-2xl space-y-4">
					<h2 className="text-[#4D2A73] text-[24px] md:text-[40px] font-[700]">
						Why we created OWA
					</h2>
					<p className="text-[#323C49] text-[16px] md:text-[20px] font-[400] md:leading-[24px]">
						We believe every market woman deserves the tools
						to grow her business. But we also know that many
						women are excluded from tech.
					</p>
					<p className="text-[#323C49] text-[16px] md:text-[20px] font-[400] md:leading-[24px] mb-10">
						That’s why we built OWA – a simple bookkeeping
						process supported by real people who understand
						your market and your challenges.
					</p>
				</div>
				<a
					href="/contact"
					className="py-[10px] px-[16px] font-[400] md:w-[250px] text-center text-[14px] border-[1px] bg-[#4D2A73] text-[#FFF] cursor-pointer border-[#4D2A73] rounded-[4px] transition"
				>
					Contact us today
				</a>

				<div className="absolute block md:hidden bottom-0 right-0">
					<svg
						width="81"
						height="85"
						viewBox="0 0 81 85"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 36.4689C16.3334 -17.1735 30.6666 -1.47411 45 37.7746C59.3335 77.023 73.6665 92.7228 88 39.0804"
							stroke="#4D2A73"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2 50.9197C16.3334 -2.72269 30.6666 12.9771 45 52.2255C59.3335 91.474 73.6665 107.174 88 53.5313"
							stroke="#4D2A73"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				{/* Right Side SVG */}
				<div className="absolute hidden md:block bottom-0 right-20">
					<svg
						width="294"
						height="229"
						viewBox="0 0 294 229"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2 99.7954C50.3334 -52.3991 98.6666 -7.85677 147 103.5C195.334 214.856 243.666 259.399 292 107.205"
							stroke="#4D2A73"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M2 140.795C50.3334 -11.3996 98.6666 33.1439 147 144.5C195.334 255.856 243.666 300.4 292 148.205"
							stroke="#4D2A73"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
};

export default SectionThree;
