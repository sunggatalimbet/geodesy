export const PricingTableEcological = () => {
	return (
		<div className="max-w-[816px] w-full mx-auto shadow-lg rounded-lg overflow-hidden">
			<h2 className="bg-[#16384E] text-white p-4 text-sm text-center">
				Инженерно-гидрометеорологические изыскания для строительства: от 120 000
				руб.
			</h2>
			<div className="bg-white text-[#16384E] p-4">
				<h2 className="text-lg sm:text-xl font-bold">
					Цены на разработку экологической проектной документации
				</h2>
			</div>
			<div className="p-6 bg-white">
				<div className="space-y-4">
					<div className="flex justify-between items-start gap-4">
						<div className="flex flex-col sm:flex-row sm:items-center gap-2">
							<p className="font-medium">СЗЗ</p>
							<p className="text-sm text-gray-600">(Санитарно-защитная зона)</p>
						</div>
						<p className="font-medium whitespace-nowrap text-lg">
							от 120 000 р.
						</p>
					</div>
					<div className="flex justify-between items-start gap-4">
						<div className="flex flex-col sm:flex-row sm:items-center gap-2">
							<p className="font-medium">ПМООС</p>
							<p className="text-sm text-gray-600">
								(Перечень мероприятий по охране окружающей среды)
							</p>
						</div>
						<p className="font-medium whitespace-nowrap text-lg">
							от 100 000 р.
						</p>
					</div>
					<div className="flex justify-between items-start gap-4">
						<div className="flex flex-col sm:flex-row sm:items-center gap-2">
							<p className="font-medium">ОВОС</p>
							<p className="text-sm text-gray-600">
								(Оценка воздействия на окружающую среду)
							</p>
						</div>
						<p className="font-medium whitespace-nowrap text-lg">
							от 70 000 р.
						</p>
					</div>
					<div className="flex justify-between items-start gap-4">
						<div className="flex flex-col sm:flex-row sm:items-center gap-2">
							<p className="font-medium">ПМ ГОЧС</p>
							<p className="text-sm text-gray-600">
								(Перечень мероприятий по гражданской обороне, мероприятий по
								предупреждению чрезвычайных ситуаций природного и техногенного
								характера)
							</p>
						</div>
						<p className="font-medium whitespace-nowrap text-lg">
							от 100 000 р.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
