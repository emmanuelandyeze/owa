'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	number: string;
	address: string;
	academicQualification: string; // Added new field for academic qualification
}

export default function BecomeAgent() {
	const router = useRouter();
	const [form, setForm] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		number: '',
		address: '',
		academicQualification: '', // Initialize new field
	});

	const handleChange = (
		e: ChangeEvent<
			| HTMLInputElement
			| HTMLTextAreaElement
			| HTMLSelectElement
		>, // Added HTMLSelectElement to type
	) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here (e.g., send to an API)
		alert('Application submitted!');
		setForm({
			firstName: '',
			lastName: '',
			email: '',
			number: '',
			address: '',
			academicQualification: '', // Reset new field
		});
	};

	return (
		<div className="min-h-screen max-w-[1380px] mx-auto flex flex-col items-center p-0 md:p-8 lg:px-20 py-28 bg-white">
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

			<div className="w-full flex flex-col lg:flex-row justify-center items-center px-4 pt-0 md:pt-[50px] gap-10 md:gap-20 max-w-[975px]">
				{/* Left Side */}
				<div className="w-full lg:w-auto flex flex-col items-center lg:items-start text-center lg:text-left px-0 md:px-0">
					<div className="max-w-[404px] flex flex-col gap-4 md:mb-8">
						<h1 className="text-[24px] text-left leading-[24px] md:text-[48px] md:leading-[48px] font-[700] text-[#4D2A73]">
							Become an OWA Agent
						</h1>
						<p className="text-[#323C49] text-left text-[16px] md:text-[18px] font-[400]">
							Are you passionate about empowering market
							women and growing their businesses? Join OWA
							as an agent today!
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
								href="https://www.instagram.com/owa_bypepcode1/" // Replace with actual Instagram link
								className="text-gray-700 hover:text-purple-800"
							>
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
							<a
								href="https://www.facebook.com/profile.php?id=61576512572218" // Replace with actual Facebook link
								className="text-gray-700 hover:text-purple-800"
							>
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
							htmlFor="number"
							className="font-[500] text-[18px] text-[#344054]"
						>
							Phone number
						</label>
						<input
							type="tel"
							id="number"
							name="number"
							value={form.number}
							onChange={handleChange}
							placeholder="0812345..."
							required
							className="w-full p-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
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
							htmlFor="address"
							className="font-[500] text-[18px] text-[#344054]"
						>
							Residential address
						</label>
						<input
							type="text"
							id="address"
							name="address"
							value={form.address}
							onChange={handleChange}
							placeholder="1, First Street, Ikeja"
							required
							className="w-full p-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</div>

					{/* New Dropdown for Academic Qualification */}
					<div className="flex flex-col gap-1">
						<label
							htmlFor="academicQualification"
							className="font-[500] text-[18px] text-[#344054]"
						>
							Academic Qualification
						</label>
						<select
							id="academicQualification"
							name="academicQualification"
							value={form.academicQualification}
							onChange={handleChange}
							required
							className="w-full p-3 bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
						>
							<option value="">Select Qualification</option>{' '}
							{/* Default disabled option */}
							<option value="SSCE">SSCE</option>
							<option value="ND">ND</option>
							<option value="HND">HND</option>
							<option value="BSc">BSc</option>
						</select>
					</div>

					<button
						type="submit"
						className="bg-[#4D2A73] hover:bg-purple-800 text-white py-3 px-6 rounded-md w-full transition-colors duration-200 ease-in-out"
					>
						Submit application
					</button>
				</form>
			</div>
		</div>
	);
}
