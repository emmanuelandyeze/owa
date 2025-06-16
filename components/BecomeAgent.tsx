// app/components/OwaExplanationSection.tsx
import Image from "next/image";
import React from "react";

const BecomeAgent = () => {
	return (
		<section className="md:w-[1240px] mx-auto px-4 py-2 md:px-0 space-y-12">
			{/* How It Works */}
			<div className="bg-[#FFF8F0] md:justify-between text-[#4D2A73] rounded-[24px] px-4 py-8 md:p-16 flex flex-col md:flex-row gap-8 items-center relative">
				<div className="md:w-[988px] flex md:flex-row flex-col-reverse md:items-center justify-between gap-12 ">
					{/* Image */}
					<div className="w-full max-w-[358px] border-[2px] border-[#4D2A73] h-[305px] rounded-xl overflow-hidden relative">
						<Image
							src="/images/6.png"
							alt="Agent"
							fill
							className="object-cover rounded-xl"
						/>
					</div>

					{/* Text Content */}
					<div className=" flex flex-col space-y-4">
						<h2 className="text-[24px] text-[#4D2A73] md:text-[40px] font-[700]">
							Become an OWA agent
						</h2>
						<div className="space-y-4">
							<p className="text-[#323C49] text-[16px] md:text-[20px] font-[400] leading-[24px]">
								At Owa, we’re on a mission to enable
								financial empowerment for market women
								across Nigeria and we need passionate,
								trustworthy, and motivated individuals to
								make that happen.
							</p>
							<p className="text-[#323C49] text-[16px] md:text-[20px] font-[400] leading-[24px] mb-0">
								As an Owa Agent, you’ll become a crucial
								link in this ecosystem, helping market women
								track their inventories, manage their
								financials, and grow their businesses — all
								while earning a sustainable income for
								yourself
							</p>
						</div>
						<a
							href="/agent"
							className="py-[10px] px-[16px] md:w-[250px] w-full text-center text-[14px] border-[1px] border-[#4D2A73] text-[#4D2A73] cursor-pointer font-[500] rounded-[4px] transition"
						>
							Become an OWA agent today
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BecomeAgent;
