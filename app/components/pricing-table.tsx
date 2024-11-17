import clsx from "clsx";

type PricingTableProps = {
	title?: string;
	columnNames: string[];
	research: "geological" | "ecological" | "geodezial";
	data: Array<{
		first: string;
		second: string;
		third?: string;
	}>;
};

export const PricingTable = ({
	title,
	columnNames,
	data,
	research,
}: PricingTableProps) => {
	const columnClassName = clsx("grid font-bold text-sm pt-4", {
		"grid-cols-3": columnNames?.length === 3,
		"grid-cols-2": columnNames?.length === 2,
	});

	return (
		<div className="text-center w-full max-w-[400px] bg-white overflow-hidden py-12">
			{title && (
				<h2 className="font-bold text-[15px] tracking-[5%] border-b border-[#ECECEC] pb-4">
					{title}
				</h2>
			)}
			{columnNames && (
				<div className={columnClassName}>
					{columnNames.map((name, index) => (
						<div key={index} className="p-3 text-sm">
							{name}
						</div>
					))}
				</div>
			)}
			{data.map((item, index) => {
				const rowClassName = clsx("grid text-center", {
					"grid-cols-2": !item.third,
					"grid-cols-3": !!item.third,
					"bg-[#ECECEC]": index % 2 === 0,
					"text-xs": research === "ecological",
					"text-sm": research === "geological",
				});

				return (
					<div key={index} className={rowClassName}>
						<div className="p-4">{item.first}</div>
						<div className="p-4">{item.second}</div>
						{item.third && <div className="p-4">{item.third}</div>}
					</div>
				);
			})}
		</div>
	);
};
