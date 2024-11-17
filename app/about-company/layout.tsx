import { Banner } from "../components/layout-banner";

export default function PricesPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Banner spanTitle={"ГЛАВНАЯ/ПОЛЕЗНОЕ"} title={"О КОМПАНИИ"} />
			{children}
		</div>
	);
}
