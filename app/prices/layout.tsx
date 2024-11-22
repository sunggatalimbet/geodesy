import { Banner } from "../components/layout-banner";

export default function PricesPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Banner spanTitle={"ГЛАВНАЯ/ЦЕНЫ"} title={"ЦЕНА"} />
			{children}
		</div>
	);
}
