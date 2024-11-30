export const servicesTriangles = [
	{
		text: "⁠⁠Отчет подсчета запасов на основание разведки",
		imgSrc: "/images/service-1.png",
		imgClip: "polygon(100% 50%, 0 0, 0 100%)",
		textPos: "absolute -top-4 sm:top-0 -right-12 sm:-right-6",
		key: "report",
	},
	{
		text: "⁠⁠Бурение скважин и Анализ грунта",
		imgSrc: "/images/service-2.png",
		imgClip: "polygon(0 50%, 100% 0, 100% 100%)",
		textPos:
			"absolute top-1/2 transform -translate-y-1/2 -right-[90px] sm:-right-[120px]",
		key: "drilling",
	},
	{
		text: "Маркшейдерская лицензия",
		imgSrc: "/images/service-3.png",
		imgClip: "polygon(100% 50%, 0 0, 0 100%)",
		textPos: "absolute -bottom-4 sm:bottom-0 -right-8",
		key: "surveying",
	},
	{
		text: "Разработка ТЭО разведочных кондиций",
		imgSrc: "/images/service-4.png",
		imgClip: "polygon(100% 0, 0 50%, 100% 100%)",
		textPos: "absolute -top-6 -left-12 sm:left-0",
		key: "development",
	},
	{
		text: "Проектирование и Подготовительные работы",
		imgSrc: "/images/service-5.png",
		imgClip: "polygon(100% 50%, 0 0, 0 100%)",
		textPos:
			"absolute top-1/2 transform -translate-y-1/2 -left-[90px] sm:-left-[120px]",
		key: "preparation",
	},
	{
		text: "Предпроектное бурение",
		imgSrc: "/images/service-6.png",
		imgClip: "polygon(100% 100%, 0 50%, 100% 0)",
		textPos: "absolute -bottom-4 .sm:bottom-0 sm:left-0",
		key: "preproject",
	},
];

export const services = [
	{
		imageSrc: "/images/service-more-1.png",
		title: "предпроектной бурение в составе геологических изысканий",
		subtitle:
			"Профессионально выполненные инженерно-геологические изыскания для строительства – это основа безошибочного проектирования дома и любого другого сооружения.",
		key: "preproject",
	},
	{
		imageSrc: "/images/service-more-2.png",
		title: "⁠⁠проектирование и подготовительные работы",
		subtitle:
			"Георадарные исследования: цели, задачи и нюансы При желании качественно выполнить обследование объекта, следует заказать такую услугу, как георадарная съемка − один из наиболее распространенных, помехозащищенный…",
		key: "preparation",
	},
	{
		imageSrc: "/images/service-more-3.png",
		title: "бурение скважин и анализ грунта",
		subtitle:
			"Компания ООО «ССТ» осуществляет специальные геофизические изыскания, цена которых вас приятно удивит. Геофизические работы являются обязательной составной частью геологических изысканий для строительства…",
		key: "drilling",
	},
	{
		imageSrc: "/images/service-more-4.png",
		title: "отчет подсчета запасов на основание разведки",
		subtitle:
			"Началу строительно-монтажных и любых земляных работ предшествует изучение условий на местности. Абсолютно одинаковых участков нет. Каждая площадка имеет свои особенности и индивидуальные характеристики.…",
		key: "report",
	},
	{
		imageSrc: "/images/service-more-5.png",
		title: "маркшейдерский работы с предоставление отчета",
		subtitle:
			"Топографическая съемка – наиболее востребованный вид услуг, оказываемых специалистами нашего профильного предприятия «ССТ» населению и организациям Москвы, Московского региона по выгодной цене. Посмотреть…",
		key: "surveying",
	},
	{
		imageSrc: "/images/service-more-6.png",
		title: "разработка ТЭО разведочных кондиций",
		subtitle:
			"Геодезическое сопровождение строительства – это проводимый специалистами, оговоренный в нормативно-правовых актах, комплекс изысканий. Он необходим для сбора и анализа всех данных об объекте строительства,…",
		key: "development",
	},
];

export const geologicalResearches = {
	pricingData: [
		{
			first: "3 скважины по 8м", // depth
			second: "45 000", // price
		},
		{
			first: "3 скважины по 10м",
			second: "55 000",
		},
		{
			first: "3 скважины по 15м",
			second: "85 000",
		},
		{
			first: "4 скважины по 8м",
			second: "84 000",
		},
		{
			first: "4 скважины по 8м",
			second: "60 000",
		},
		{
			first: "Статическое зондирование",
			second: "75 000",
		},
		{
			first: "Штамповые испытания",
			second: "75 000",
		},
		{
			first: "Штамповые испытания",
			second: "от 7000/точка",
		},
	],
	columnNames: ["Количество, глубина скважин", "Цена(р)"],
	workListItems: [
		"Плановая и высотная привязка скважин и точек наблюдения;",
		"Бурение (колонковым/ шнековым/ ударно-канатным) способом скважин диаметром от 108 до 168 мм;",
		"Статическое зондирование грунтов;",
		"Испытания грунтов штампом;",
		"Гидрогеологические исследования;",
		"Лабораторные исследования грунтов для определения физико-механических характеристик грунтов;",
		"Комплекс геофизических исследований;",
		"Составление технического отчёта.",
	],
};

export const ecologicalResearches = {
	pricingData: [
		{
			first: "Участок до 1 га",
			second: "от 60 000",
			third: "от 120 000",
		},
		{
			first: "Участок 1-5 га",
			second: "от 100 000",
			third: "от 220 000",
		},
		{
			first: "Участок 5-10 га",
			second: "от 130 000",
			third: "от 320 000",
		},
		{
			first: "Участок больше 10 га",
			second: "от 15 000/га",
			third: "от 25 000/га",
		},
		{
			first: "Линейные обьекты",
			second: "от 30 000/км",
			third: "от 50 000/км",
		},
	],
	columnNames: [
		"Объект изысканий",
		"Цена р(не проходит экспертизу)",
		"Цена р(проходит экспертизу)",
	],
	workListItems: [
		"Исследования грунтов: химико-аналитические и микробиологические;",
		"Исследования атмосферного воздуха;",
		"Исследования поверхностной воды;",
		"Исследования грунтовой воды;",
		"Исследования донных отложений;",
		"Радиологическое обследование;",
		"Исследование физических факторов воздействия: шум, ЭМИ;",
		"Составление технического отчета;",
	],
};

export const geodezialResearches = {
	pricingDataPrivate: [
		{
			first: "до 10 соток",
			second: "от 12 000 руб",
		},
		{
			first: "до 10 соток",
			second: "от 12 000 руб",
		},
	],
	columnNamesPrivate: ["Частного приусадебного участка"],
	pricingDataFarmlands: [
		{
			first: "до 10 га",
			second: "от 12 000 руб",
		},
		{
			first: "до 20 соток",
			second: "от 15 000 руб",
		},
		{
			first: "более 20 га",
			second: "4 500 р./га",
		},
	],
	columnNamesFarmlands: ["Сельхозугодий, полей"],
};

export const results = [
	{ text: "На 564 объектах", color: "from-blue-300 to-blue-100" },
	{
		text: "В 19 областях России",
		color: "from-green-300 to-green-100",
	},
	{
		text: "Пробурили 16115 погонных метров разведочных скважин",
		color: "from-yellow-300 to-yellow-100",
	},
	{
		text: "Отсняли 936 гектаров топографической съемки",
		color: "from-red-300 to-red-100",
	},
];

export const equipments = [
	{
		id: 1,
		title: "БУРОВАЯ МАШИНА БУ 20 УШМ - 2 ед",
		imageSrc: "/images/equip-1.png",
	},
	{
		id: 2,
		title: "БУРОВАЯ МАШИНА УРБ 2Д3 (БАЗА МТЛБ) - 1 ед",
		imageSrc: "/images/equip-2.png",
	},
	{
		id: 3,
		title: "БУРОВАЯ МАШИНА УРБ 2А (БАЗА МТЛБ) - 1 ЕД",
		imageSrc: "/images/equip-3.png",
	},
	{
		id: 4,
		title: "БУРОВАЯ МАШИНА SANY50(ГУСЕНИЧНАЯ БАЗА ) - 1 ЕД",
		imageSrc: "/images/equip-4.png",
	},
	{ id: 5, title: "КОМПЛЕКС ЖИЛЫХ ВАГОНОВ", imageSrc: "/images/equip-5.png" },
	{
		id: 6,
		title: "ВАХТОВЫЕ АВТОБУСЫ - 3 ЕД",
		imageSrc: "/images/equip-6.png",
	},
	{ id: 7, title: "БЕНЗОВОЗ КАМАЗ - 2 ЕД", imageSrc: "/images/equip-7.png" },
	{ id: 8, title: "БУЛЬДОЗЕР SD22 - 1 ЕД", imageSrc: "/images/equip-8.png" },
	{
		id: 9,
		title: "ЭКСКАВАТОР HITACHI ZX350 - 2 ЕД",
		imageSrc: "/images/equip-9.png",
	},
];
