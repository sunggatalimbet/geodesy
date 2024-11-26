import { Header } from "./components/header";
import { Footer } from "./components/footer";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "ССТ - Геолого-разведатывательная компания",
	description: "Геодезия, которой можно доверять",
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`mx-auto max-w-[1840px] antialiased`}>
				<Header />
				<main className="bg-[#16384E]">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
