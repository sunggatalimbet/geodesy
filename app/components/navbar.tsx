"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
	const currentPath = usePathname();

	return (
		<nav
			style={{ fontFamily: "Poppins, sans-serif" }}
			className="hidden sm:flex flex-row gap-7 text-[18px] tracking-[5%] pb-4"
		>
			<Link
				href="/"
				className={
					currentPath === "/"
						? "underline underline-offset-8 font-bold tracking-[5%]"
						: ""
				}
				prefetch={false}
			>
				Главная
			</Link>
			<Link
				prefetch={false}
				href="/services"
				className={
					currentPath === "/services"
						? "underline underline-offset-8 font-bold tracking-[5%]"
						: ""
				}
			>
				Услуги
			</Link>
			<Link
				prefetch={false}
				href="/prices"
				className={
					currentPath === "/prices"
						? "underline underline-offset-8 font-bold tracking-[5%]"
						: ""
				}
			>
				Цены
			</Link>
			<Link
				prefetch={false}
				href="/about-company"
				className={
					currentPath === "/about-company"
						? "underline underline-offset-8 font-bold tracking-[5%]"
						: ""
				}
			>
				О компании
			</Link>
			<Link
				prefetch={false}
				href="/contacts"
				className={
					currentPath === "/contacts"
						? "underline underline-offset-8 font-bold tracking-[5%]"
						: ""
				}
			>
				Контакты
			</Link>
		</nav>
	);
};
