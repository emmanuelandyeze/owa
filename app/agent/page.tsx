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
    number: string;
    address: string;
}

export default function BecomeAgent() {
    const router = useRouter();
    const [form, setForm] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        address: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent!');
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            address: '',
        });
    };

    return (
			<div className="min-h-screen max-w-[1380px] mx-auto flex flex-col md:flex-row items-start gap-10 p-8 md:px-20 py-28 bg-white">
				<button
					onClick={() => router.back()}
					className="flex flex-row cursor-pointer items-center hover:underline"
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
				<div className="max-w-[975px] flex flex-col md:flex-row justify-center items-center pt-[50px] gap-20 mx-auto">
					{/* Left Side */}
					<div className="">
						<div className="w-[404px] flex flex-col gap-[20px]">
							<h1 className="text-[48px] leading-[48px] font-[700] text-[#4D2A73]">
								Become an OWA Agent
							</h1>
							<p className="text-[#323C49] text-[18px] font-[400] mb-6">
								Are you passionate about empowering market
								women and growing their businesses? Join Owa
								as an agent today
							</p>
						</div>

						<div className="bg-[#EDEAF1] p-4 rounded-[8px] w-[313px] max-w-md space-y-2">
							<p>
								<strong>Email:</strong>{' '}
								owabypepcode@gmail.com
							</p>
							<p>
								<strong>Phone:</strong> +234 6024247865
							</p>
							<p className="flex items-center gap-3">
								<strong>Socials:</strong>
								<a
									href="#"
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
									href="#"
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
								<a
									href="#"
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
											d="M15.35 5.55011C14.59 5.54999 13.8603 5.84824 13.3179 6.38068C12.7756 6.91313 12.4639 7.63721 12.45 8.39711L12.422 9.97211C12.4204 10.0567 12.4009 10.1399 12.3648 10.2164C12.3287 10.2929 12.2769 10.3609 12.2127 10.416C12.1485 10.471 12.0734 10.5119 11.9922 10.5359C11.9111 10.5599 11.8259 10.5664 11.742 10.5551L10.18 10.3431C8.12705 10.0631 6.15904 9.11711 4.27004 7.54411C3.67304 10.8541 4.84004 13.1471 7.65304 14.9161L9.40004 16.0141C9.48311 16.0662 9.55215 16.1378 9.60112 16.2228C9.65009 16.3077 9.6775 16.4033 9.68096 16.5013C9.68441 16.5993 9.6638 16.6966 9.62093 16.7848C9.57806 16.873 9.51424 16.9493 9.43505 17.0071L7.84304 18.1701C8.79004 18.2291 9.68904 18.1871 10.435 18.0391C15.153 17.0971 18.29 13.5471 18.29 7.69111C18.29 7.21311 17.277 5.55011 15.35 5.55011ZM10.45 8.36011C10.4675 7.39616 10.7689 6.45878 11.3166 5.66534C11.8643 4.87189 12.6338 4.25763 13.529 3.89948C14.4241 3.54133 15.405 3.45519 16.3488 3.65186C17.2926 3.84853 18.1575 4.31926 18.835 5.00511C19.546 5.00011 20.151 5.18011 21.503 4.36011C21.169 6.00011 21.003 6.71211 20.29 7.69111C20.29 15.3331 15.593 19.0491 10.826 20.0001C7.55904 20.6521 2.80604 19.5811 1.44604 18.1591C2.13904 18.1051 4.95904 17.8021 6.58905 16.6091C5.20904 15.6991 -0.278955 12.4691 3.32805 3.78611C5.02138 5.76345 6.73804 7.10911 8.47804 7.82311C9.63504 8.29811 9.92004 8.28911 10.451 8.36111"
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
						className=" w-full bg-[#F3F3F3] p-[40px] rounded-[20px] space-y-4"
					>
						<div className="flex flex-col md:flex-row gap-4">
							<div className="flex flex-col gap-[4px]">
								<p className="font-[500] text-[20px] text-[#344054]">
									First name
								</p>
								<input
									type="text"
									name="firstName"
									value={form.firstName}
									onChange={handleChange}
									placeholder="First name"
									required
									className="w-[97%] bg-white p-3 rounded-md border border-gray-300"
								/>
							</div>
							<div className="flex flex-col gap-[4px]">
								<p className="font-[500] text-[20px] text-[#344054]">
									Last name
								</p>
								<input
									type="text"
									name="lastName"
									value={form.lastName}
									onChange={handleChange}
									placeholder="Last name"
									required
									className="w-[97%] p-3 bg-white rounded-md border border-gray-300"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-[4px]">
							<p className="font-[500] text-[20px] text-[#344054]">
								Phone number
							</p>
							<input
								type="phone"
								name="number"
								value={form.number}
								onChange={handleChange}
								placeholder="0812345..."
								required
								className="w-full p-3 bg-white rounded-md border border-gray-300"
							/>
						</div>
						<div className="flex flex-col gap-[4px]">
							<p className="font-[500] text-[20px] text-[#344054]">
								Email
							</p>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="Email"
								required
								className="w-full p-3 bg-white rounded-md border border-gray-300"
							/>
						</div>

						<div className="flex flex-col gap-[4px]">
							<p className="font-[500] text-[20px] text-[#344054]">
								Residential address
							</p>
							<input
								type="address"
								name="address"
								value={form.address}
								onChange={handleChange}
								placeholder="1, First Street, Ikeja"
								required
								className="w-full p-3 bg-white rounded-md border border-gray-300"
							/>
						</div>

						<button
							type="submit"
							className="bg-purple-900 hover:bg-purple-800 text-white py-3 px-6 rounded-md w-full"
						>
							Submit application
						</button>
					</form>
				</div>
			</div>
		);
}
