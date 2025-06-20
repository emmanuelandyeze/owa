// app/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import {
	FaInstagram,
	FaFacebookF,
	FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-white text-[#4D2A73] py-12 px-6 md:px-44 relative overflow-hidden">
			<div className="flex flex-col md:flex-row justify-between gap-12">
				{/* Logo */}
				<div className="flex-shrink-0">
					<Image
						src="/images/logo.png" // replace with your logo path
						alt="OWA Logo"
						width={100}
						height={40}
					/>
				</div>

				{/* Links */}
				<div className="flex flex-col md:flex-row gap-12">
					<div>
						<h4 className="font-[500] text-[18px] mb-2">
							Products
						</h4>
						<ul className="space-y-1 text-[16px] text-[#48505E]">
							<li>
								<a
									target="_blank"
									href="https://pepcodeinc.com"
								>
									Pepcode
								</a>
							</li>
							<li>
								<a
									target="_blank"
									href="https://auditme.com.ng"
								>
									AuditMe
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-[500] text-[18px] mb-2">
							Contact
						</h4>
						<ul className="space-y-1 text-[16px] text-[#48505E]">
							<li>
								<a href="mailto:support@pepcode.com">
									support@pepcode.com
								</a>
							</li>
							<li>8 Rock Drive, Lekki Phase One, Lagos</li>
							<li>+234 802 424 7865</li>
						</ul>
					</div>

					<div>
						<h4 className="font-[500] text-[18px] mb-2">
							Social media
						</h4>
						<div className="flex gap-4 text-xl text-[#48505E]">
							<a href="https://www.instagram.com/owa_bypepcode1/">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
										fill="#48505E"
									/>
								</svg>
							</a>
							<a href="https://www.facebook.com/profile.php?id=61576512572218">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM13.125 19.7934V14.625H15C15.2984 14.625 15.5845 14.5065 15.7955 14.2955C16.0065 14.0845 16.125 13.7984 16.125 13.5C16.125 13.2016 16.0065 12.9155 15.7955 12.7045C15.5845 12.4935 15.2984 12.375 15 12.375H13.125V10.5C13.125 10.2016 13.2435 9.91548 13.4545 9.7045C13.6655 9.49353 13.9516 9.375 14.25 9.375H15.75C16.0484 9.375 16.3345 9.25647 16.5455 9.0455C16.7565 8.83452 16.875 8.54837 16.875 8.25C16.875 7.95163 16.7565 7.66548 16.5455 7.4545C16.3345 7.24353 16.0484 7.125 15.75 7.125H14.25C13.3549 7.125 12.4965 7.48058 11.8635 8.11351C11.2306 8.74645 10.875 9.60489 10.875 10.5V12.375H9C8.70164 12.375 8.41549 12.4935 8.20451 12.7045C7.99353 12.9155 7.875 13.2016 7.875 13.5C7.875 13.7984 7.99353 14.0845 8.20451 14.2955C8.41549 14.5065 8.70164 14.625 9 14.625H10.875V19.7934C8.90447 19.509 7.1148 18.4888 5.86617 16.938C4.61755 15.3873 4.00265 13.4211 4.14522 11.4353C4.2878 9.44942 5.17727 7.59128 6.63463 6.23481C8.09198 4.87833 10.009 4.12421 12 4.12421C13.991 4.12421 15.908 4.87833 17.3654 6.23481C18.8227 7.59128 19.7122 9.44942 19.8548 11.4353C19.9974 13.4211 19.3825 15.3873 18.1338 16.938C16.8852 18.4888 15.0955 19.509 13.125 19.7934Z"
										fill="#48505E"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div></div>
			</div>

			{/* Copyright */}
			<div className="text-[14px] text-center mt-10 text-[#48505E]">
				© 2025 OWA by Pepcode Inc. All Rights Reserved.{' '}
				<a
					href="https://ploutospage.com.ng/"
					className="underline text-[#4D2A73]"
					target="_blank"
				>
					Powered by Ploutos Page Limited.
				</a>
			</div>

			{/* Bottom right watermark text */}
			<div className="absolute -bottom-2 -right-2 opacity-5 hidden md:block select-none pr-6">
				<Image
					src="/images/logo.png" // replace with your logo path
					alt="OWA Logo"
					width={250}
					height={40}
				/>
			</div>
		</footer>
	);
};

export default Footer;
