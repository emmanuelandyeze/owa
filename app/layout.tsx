import type { Metadata } from 'next';
import {
	Hanken_Grotesk,
} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const hanken_grotesk = Hanken_Grotesk({
	variable: '--font-hanken-grotesk',
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Owa by Pepcode',
	description: 'Smart Bookkeeping for Every Market Woman',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={hanken_grotesk.className}>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
