export const SecondaryCard = () => {
	return (
		<div className="bg-[#16384E] text-white px-10 py-[30px] rounded-lg shadow-2xl">
			<div className="mb-6">
				<h2 className="bg-[#FF8A00] text-white text-[13px] font-medium p-1 rounded-full text-center mx-auto">
					Внимание! Акционные цены:
				</h2>
			</div>
			<div className="space-y-6 text-[11px]">
				<p className="text-center">
					Цена инженерно-геологических изысканий для больших обьектов (от 40
					погонных метров бурения):
				</p>
				<ul className="space-y-2 list-disc list-inside font-bold px-10 ">
					<li>
						при шнековом бурении -{" "}
						<span className="text-[#FF8A00]">от 1500 р/пмб</span>
					</li>
					<li>
						при шнековом бурении -{" "}
						<span className="text-[#FF8A00]">от 1500 р/пмб</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
