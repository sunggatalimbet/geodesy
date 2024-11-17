export const ResearchTitle = ({ text }: { text: string }) => {
	return (
		<div className="mb-4 md:mb-10 max-w-[571px] py-1 bg-[#FF851B] flex items-center justify-center">
			<h1 className="text-white text-sm md:text-lg font-medium uppercase">
				{text}
			</h1>
		</div>
	);
};
