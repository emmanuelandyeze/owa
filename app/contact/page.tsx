'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
	FaInstagram,
	FaFacebook,
	FaTwitter,
} from 'react-icons/fa';

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	message: string;
}

export default function ContactUs() {
	const router = useRouter();
	const [form, setForm] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here (e.g., send to an API)
		alert('Message sent!');
		setForm({
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		});
	};

	return (
		<div className="min-h-screen max-w-[1380px] mx-auto flex flex-col items-center p-0 md:p-8 lg:pt-28 lg:px-20 py-28 bg-white">
			{/* Back Button - Positioned independently for better mobile flow */}
			<button
				onClick={() => router.back()}
				className="self-start flex flex-row cursor-pointer items-center hover:underline mb-8 ml-2 md:ml-0"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.8083 3.14167L13.3333 1.66667L5 10L13.3333 18.3333L14.8083 16.8583L7.95 10L14.8083 3.14167Z"
						fill="#4D2A73"
					/>
				</svg>
				<p>Back</p>
			</button>

			<div className="w-full flex flex-col lg:flex-row justify-center items-center px-4 pt-0 md:pt-[50px] gap-0 md:gap-20 max-w-[975px]">
				{/* Left Side */}
				<div className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left px-0 md:px-0">
					<div className="max-w-[404px] flex flex-col gap-0 mb-8">
						<h1 className="text-[24px] text-left leading-[40px] md:text-[48px] md:leading-[48px] font-[700] text-[#4D2A73]">
							Get in Touch with OWA
						</h1>
						<p className="text-[#323C49] text-left text-[16px] md:text-[18px] font-[400]">
							We're here to help you manage your business
							with ease!
						</p>
					</div>

					<div className="bg-[#EDEAF1] hidden md:block p-6 rounded-[8px] w-full max-w-sm space-y-4 text-left">
						<p>
							<strong className="font-semibold">
								Email:
							</strong>{' '}
							owabypepcode@gmail.com
						</p>
						<p>
							<strong className="font-semibold">
								Phone:
							</strong>{' '}
							+234 8024247865
						</p>
						<p className="flex items-center gap-3">
							<strong className="font-semibold">
								Socials:
							</strong>
							<a
								href="https://www.instagram.com/owa_bypepcode1/" // Replace with actual links
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-purple-800"
							>
								<FaInstagram size={24} />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61576512572218" // Replace with actual links
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-purple-800"
							>
								<FaFacebook size={24} />
							</a>
						</p>
					</div>
				</div>

				{/* Right Side - Form */}
				<form
					onSubmit={handleSubmit}
					className="w-full lg:w-[500px] bg-[#F3F3F3] p-6 md:p-[40px] rounded-[20px] space-y-6"
				>
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex flex-col gap-1 w-full">
							<label
								htmlFor="firstName"
								className="font-[500] text-[18px] text-[#344054]"
							>
								First name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={form.firstName}
								onChange={handleChange}
								placeholder="First name"
								required
								className="w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
						</div>
						<div className="flex flex-col gap-1 w-full">
							<label
								htmlFor="lastName"
								className="font-[500] text-[18px] text-[#344054]"
							>
								Last name
							</label>
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={form.lastName}
								onChange={handleChange}
								placeholder="Last name"
								required
								className="w-full p-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="email"
							className="font-[500] text-[18px] text-[#344054]"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Email"
							required
							className="w-full p-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label
							htmlFor="message"
							className="font-[500] text-[18px] text-[#344054]"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Hello..."
							required
							rows={5}
							className="w-full p-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-y"
						/>
					</div>

					<button
						type="submit"
						className="bg-[#4D2A73] hover:bg-purple-800 text-white py-3 px-6 rounded-md w-full transition-colors duration-200 ease-in-out"
					>
						Send message
					</button>
				</form>
			</div>
		</div>
	);
}
