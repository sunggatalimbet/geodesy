"use client";

import { useState } from "react";
import { MobileMenu } from "./mobile-navbar";
import { Navbar } from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="text-[#16384E] px-10 md:px-20 w-full flex flex-col items-center justify-center">
			<div className="py-4 md:py-6 w-full flex flex-row items-center justify-between">
				<Image
					src="/geodezia/logo.svg"
					alt={"Геодезия логотип"}
					width={144}
					height={65}
					className="w-[112px] h-[62px] md:w-[152px] md:h-[72px]"
				/>
				<div className="hidden sm:flex flex-col flex-1">
					<h1
						style={{ fontFamily: "Poppins, sans-serif" }}
						className="text-center font-medium text-normal sm:text-[19px]"
					>
						ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ И ПРОЕКТИРОВАНИЕ
					</h1>
					<div
						className="flex flex-row gap-2 font-bold justify-center items-center sm:text-normal md:text-[22px] tracking-[5%]"
						style={{ fontFamily: "Montserrat, sans-serif" }}
					>
						<span>ГЕОЛОГИЯ</span>
						<span className="flex items-center justify-center rounded-full text-[#FF8C00]">
							●
						</span>
						<span>ГЕОДЕЗИЯ</span>
						<span className="flex items-center justify-center rounded-full text-[#FF8C00]">
							●
						</span>
						<span>ЭКОЛОГИЯ</span>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<button className="bg-[#FF8C00] rounded-2xl text-[#16384E] px-6 py-2 text-[15px] tracking-[5%] font-bold">
						Связаться
					</button>
					<div className="flex flex-row items-center">
						<Image
							src={"/geodezia/phone-icon.svg"}
							className="hidden md:block"
							alt={"Номер телефона"}
							width={28}
							height={28}
						/>
						<span
							style={{ fontFamily: "Poppins, sans-serif" }}
							className="text-[14px] md:text-normal pl-1 text-[#16384E] font-semibold"
						>
							+7 702 301 2796
						</span>
					</div>
				</div>
				<motion.button
					className="sm:hidden"
					onClick={() => setIsMobileMenuOpen(true)}
					whileTap={{ scale: 0.95 }}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-8 h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2.5}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</motion.button>
			</div>

			<Navbar />
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</header>
	);
};
