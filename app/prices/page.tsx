import { PricingTable } from "../components/pricing-table";
import { PricingTableEcological } from "../components/pricing-table-ecological";
import { ResearchTitle } from "../components/research-title";
import { SecondaryCard } from "../components/secondary-card";
import { WorkList } from "../components/work-list";
import {
	ecologicalResearches,
	geodezialResearches,
	geologicalResearches,
} from "../constants";

export default function PricesPage() {
	return (
		<div className="px-8 md:px-10">
			<GeologicalResearches />
			<EcologicalResearches />
			<GeodezialResearches />
		</div>
	);
}

const GeologicalResearches = () => {
	return (
		<div className="py-10 md:py-20">
			<ResearchTitle text={"ЦЕНЫ НА ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ"} />

			<div className="flex flex-row flex-wrap justify-center gap-4">
				<PricingTable
					research={"geological"}
					columnNames={geologicalResearches.columnNames}
					data={geologicalResearches.pricingData}
				/>

				<div className="max-w-[400px] flex flex-col gap-4">
					<WorkList
						research="geological"
						title={"Состав работ:"}
						items={geologicalResearches.workListItems}
						buttonText={"ПОСМОТРЕТЬ ПРИМЕР ОТЧЕТА О ГЕОЛОГИЧЕСКИХ ИЗЫСКАНИЯХ"}
					/>
					<SecondaryCard />
				</div>
			</div>
		</div>
	);
};

const EcologicalResearches = () => {
	return (
		<div className="py-10 md:py-20">
			<ResearchTitle text={"ЦЕНЫ НА ЭКОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ"} />

			<div className="flex flex-col gap-4">
				<div className="flex flex-row flex-wrap justify-center gap-4">
					<PricingTable
						research={"ecological"}
						title={
							"Цены на инженерно-экологические изыскания для строительства"
						}
						columnNames={ecologicalResearches.columnNames}
						data={ecologicalResearches.pricingData}
					/>

					<div className="grow max-w-[400px] flex flex-col">
						<WorkList
							research="ecological"
							title={"Состав работ:"}
							items={ecologicalResearches.workListItems}
							buttonText={"ПОСМОТРЕТЬ ПРИМЕР ОТЧЕТА О ГЕОЛОГИЧЕСКИХ ИЗЫСКАНИЯХ"}
						/>
					</div>
				</div>
				<PricingTableEcological />
			</div>
		</div>
	);
};

const GeodezialResearches = () => {
	return (
		<div className="py-10 md:py-20">
			<ResearchTitle text={"ЦЕНЫ НА ГЕОДЕЗИЧЕСКОЕ ИЗЫСКАНИЯ"} />

			<div className="w-full items-center justify-center flex flex-row flex-wrap gap-4">
				<div className="max-w-[400px] w-full flex flex-col  h-full">
					<div className="text-center bg-white overflow-hidden grow py-12">
						<h2 className="font-bold text-[15px] tracking-[5%] border-b border-[#ECECEC] pb-4">
							Стоимость топографической съемки
						</h2>
						<div className="grid font-bold text-sm pt-4">
							{geodezialResearches.columnNamesPrivate.map((name, index) => (
								<div key={index} className="p-3 text-sm">
									{name}
								</div>
							))}
						</div>
						{geodezialResearches.pricingDataPrivate.map((item, index) => {
							return (
								<div
									key={index}
									className={"grid grid-cols-2 text-center bg-[#ECECEC]"}
								>
									<div className="p-4">{item.first}</div>
									<div className="p-4">{item.second}</div>
								</div>
							);
						})}
						<div className="grid font-bold text-sm pt-4">
							{geodezialResearches.columnNamesFarmlands.map((name, index) => (
								<div key={index} className="p-3 text-sm">
									{name}
								</div>
							))}
						</div>
						{geodezialResearches.pricingDataFarmlands.map((item, index) => {
							return (
								<div
									key={index}
									className={"grid grid-cols-2 text-center bg-[#ECECEC]"}
								>
									<div className="p-4">{item.first}</div>
									<div className="p-4">{item.second}</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="max-w-[400px] w-full bg-[#16384E] text-white p-8 shadow-xl">
					<h2 className="text-2xl font-medium mb-8">Дополнительные услуги</h2>
					<div className="relative">
						{/* Vertical line */}
						<div className="absolute top-0 bottom-0 left-[70%] w-px bg-white/20" />

						<div className="divide-y divide-white/20  text-xs">
							<div className="grid grid-cols-[7fr_3fr] py-4">
								<p className="pr-8">Гидрографическая съемка дна водоёма</p>
								<p className="pl-8 text-sm">от 30 000 р./г</p>
							</div>
							<div className="grid grid-cols-[7fr_3fr] py-4">
								<p className="pr-8">Согласование топосъемки</p>
								<p className="pl-8 text-sm">от 30 000 р./г</p>
							</div>
							<div className="grid grid-cols-[7fr_3fr] py-4">
								<p className="pr-8">
									Разработка технического отчета (об инженерно-геодезических
									изысканиях)
								</p>
								<p className="pl-8 text-sm">от 10 000 р./г</p>
							</div>
							<div className="grid grid-cols-[7fr_3fr] py-4">
								<p className="pr-8">
									Подеревная съемка (с составлением дендроплана и перечетной
									ведомости)
								</p>
								<p className="pl-8 text-sm">от 50 000 р.</p>
							</div>
							<div className="grid grid-cols-[7fr_3fr] py-4">
								<p className="pr-8">
									Подеревная съемка (с составлением дендроплана и перечетной
									ведомости)
								</p>
								<p className="pl-8 text-sm">от 50 000 р.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
