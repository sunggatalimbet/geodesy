import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="px-10 md:px-20 flex flex-col">
			<div className="w-full flex flex-row justify-between">
				<div className="flex flex-col gap-4 pt-8">
					<Image
						src="/geodezia/logo-footer.svg"
						alt={"Геодезия логотип"}
						width={144}
						height={65}
						className="w-[144px] h-[65px]"
					/>
					<h6
						style={{ fontFamily: "Poppins, sans-serif" }}
						className="text-[#16384E] text-[14px] sm:text-[18px] font-medium"
					>
						Геодезия, которой можно доверять.
					</h6>
				</div>
				<div
					className="text-[#16384E] font-bold flex flex-row items-center gap-4 sm:gap-10 md:gap-[80px]"
					style={{ fontFamily: "Poppins, sans-serif" }}
				>
					<div className="text-[12px] sm:text-normal h-full py-8 flex flex-col gap-4 font-bold">
						<a href="/services">Услуги</a>
						<a href="/prices">Цены</a>
						<a href="/testimonials">Отзывы</a>
						<a href="/about-company">О нас</a>
					</div>
					<div className="text-[12px] sm:text-normal text-[#16384E] font-bold h-full flex flex-col items-start justify-normal gap-4 py-8">
						<div className="flex flex-row items-center gap-2">
							<Image
								src="/geodezia/phone-footer.svg"
								alt={"Номер телефона"}
								width={24}
								height={24}
							/>
							<p>+7 702 301 2796</p>
						</div>
						<div className="flex flex-row items-center gap-2">
							<Image
								src="/geodezia/ig-footer.svg"
								alt={"Наш инстаграм"}
								width={24}
								height={24}
							/>
							<p>@sts</p>
						</div>
						<div className="flex flex-row items-center gap-2">
							<Image
								src="/geodezia/mail-footer.svg"
								alt={"Электронная Почта"}
								width={24}
								height={24}
							/>
							<p>support@sts.org</p>
						</div>
					</div>
				</div>
			</div>

			<p className="text-[12px] font-bold text-[#16384E] pb-2">
				Все права защищены, 2024.
			</p>
		</footer>
	);
};
