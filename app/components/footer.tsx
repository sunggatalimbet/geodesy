import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="px-10 md:px-20 flex flex-col">
			<div className="w-full flex flex-col sm:flex-row justify-between">
				<div className="flex flex-col items-center  gap-4 pt-8">
					<Image
						src="/logo.png"
						alt={"Геодезия логотип"}
						width={144}
						height={80}
						className="w-[144px] h-[80px]"
					/>
					<h6
						style={{ fontFamily: "Poppins, sans-serif" }}
						className="text-[#16384E] text-[14px] sm:text-[18px] font-medium"
					>
						Геодезия, которой можно доверять.
					</h6>
				</div>
				<div
					className="text-[#16384E] font-bold flex flex-col md:flex-row items-center gap-4 sm:gap-10 md:gap-[80px]"
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					<div className="flex flex-row sm:flex-col text-[16px] md:text-[12px] sm:text-normal h-full py-2 sm:py-8 gap-4 font-bold">
						<Link href="/">Услуги</Link>
						<Link href="/about-company">О нас</Link>
						<Link href="/contacts">Контакты</Link>
					</div>
					<div className="text-normal md:text-[12px] sm:text-normal text-[#16384E] font-bold h-full flex flex-col items-start justify-normal gap-4 py-2 sm:py-8">
						<Link
							href="tel:+79100052260"
							className="flex flex-row items-center gap-2"
						>
							<Image
								src="/geodezia/phone-footer.svg"
								alt={"Номер телефона"}
								width={24}
								height={24}
							/>
							<p>+7 910 005 2260</p>
						</Link>
						<div className="flex flex-row items-center gap-2">
							<Image
								src="/geodezia/mail-footer.svg"
								alt={"Электронная Почта"}
								width={24}
								height={24}
							/>
							<p>geologygroup@yandex.ru</p>
						</div>
					</div>
				</div>
			</div>

			<p className="text-[12px] text-center sm:text-start font-bold text-[#16384E] pb-2">
				Все права защищены, 2024.
			</p>
		</footer>
	);
};
