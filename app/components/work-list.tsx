type WorkList = {
	title: string;
	items: string[];
	buttonText: string;
	research: "ecological" | "geological";
};

export const WorkList = ({ title, items, buttonText, research }: WorkList) => {
	return (
		<div className="flex flex-col items-center justify-center text-center w-full bg-white overflow-hidden h-full py-12 px-8">
			<h2 className="underline text-[#FF8A00] text-xl font-medium mb-6 text-center">
				{title}
			</h2>
			<ol className="mb-8 list-decimal text-[#16384E] font-bold list-outside ml-6">
				{items.map((item, index) => (
					<li
						key={index}
						className={`${research === "ecological" ? "text-sm" : "text-xs"}`}
					>
						{item}
					</li>
				))}
			</ol>
			<div className="text-center">
				<button className="border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white transition-colors py-2 font-bold text-[12px] px-8 rounded-xl h-auto whitespace-normal">
					{buttonText}
				</button>
			</div>
		</div>
	);
};
