export default function PricesPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Banner />
			{children}
		</div>
	);
}

const Banner = () => {
	return (
		<div className="relative flex items-center justify-center w-full h-[90px] md:h-[189px] overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full">
				<svg
					className="w-full h-full"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
				>
					<path d="M0,0 L100,0 L100,50 L0,100 Z" fill="white" />
				</svg>
			</div>
			<div className="w-[800px] relative z-10 h-full flex flex-col justify-between p-4">
				<div className="absolute md:right-10">
					<span className="text-[#FF8C00] text-xs font-medium">
						ГЛАВНАЯ/ЦЕНЫ
					</span>
				</div>
				<div className="self-center md:mt-10">
					<h1 className="text-[#16384E] text-4xl font-bold">ЦЕНА</h1>
				</div>
			</div>
		</div>
	);
};
