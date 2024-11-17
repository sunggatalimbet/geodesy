import Image from "next/image";
import { results } from "../constants";

export default function PricesPage() {
	return (
		<div className="">
			<div className="px-8 md:px-20 ">
				<TestimonialCard />
				<TestimonialDescription />
				<Card />
			</div>

			<Results />
		</div>
	);
}

const TestimonialCard = () => {
	return (
		<div className="relative max-w-3xl mx-auto">
			<blockquote className="bg-gray-100 p-8 rounded-lg">
				<div className="space-y-4">
					<p className="text-lg">
						Главное в работе изыскательской организации - чувствовать всю
						величину своей ответственности.
					</p>
					<p className="text-lg">
						Только качественно проведенные изыскания могут служить надежным
						основанием для всех последующих этапов проектирования и
						строительства, вплоть до окончательной сдачи объекта.
					</p>
					<footer className="mt-6">
						<p className="font-medium">Имя Фамилия</p>
						<p className="text-gray-600">главный геолог ССТ</p>
					</footer>
				</div>
			</blockquote>
			<div className="hidden md:block absolute left-20 top-[284px] min-h-[500%] w-[3px] bg-white" />
		</div>
	);
};

const TestimonialDescription = () => {
	return (
		<div className="place-self-end flex w-full md:w-[70%] text-white text-[17px] p-8 space-y-6">
			<div className="space-y-6">
				<h2 className="text-xl font-medium">
					ССТ - группа компаний с главным офисом в Москве.
				</h2>

				<p>
					Опыт работы наших специалистов в сфере инженерных изысканий – более 12
					лет, и за это время наши технические отчеты стали одними из лучших в
					Москве.
				</p>

				<p>
					Нашими клиентами являются государственные и частные организации,
					компании разных направлений и размеров, строительные и проектные
					организации, а также владельцы небольших частных объектов
					строительства. Мы делали изыскания для школ, пекарень, заводов,
					электростанций, аэропортов, грибных ферм... Независимо от того кем Вы
					являетесь – Вы получите выгодное индивидуальное предложение по цене,
					внимательный подход к Вашему объекту и качественный отчет.
				</p>

				<p>
					Мы работаем максимально прозрачно – поэтому наши клиенты могут
					ознакомиться со всей разрешительной документацией компании: допуском
					СРО, сертификатами соответствия аудиторов, поверками на оборудование.
				</p>

				<p>
					В компании действует программа лояльности с разнообразными скидками и
					акциями, ведь главная ценность – это довольный клиент и укрепление
					долгосрочных партнерских отношений!
				</p>
			</div>
		</div>
	);
};

const Card = () => {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex justify-end relative">
				<div className="absolute -left-[240px] h-[14px] max-w-[1097px] w-full bg-[#FF8C00]" />
				<div className="flex flex-col w-full md:w-1/2 pt-12">
					<div className="bg-white text-[#0B2C3D] py-2 px-4 mb-4 text-center font-medium">
						РАБОТАЕМ ПО ВСЕЙ РОССИИ
					</div>
					<p className="text-white text-sm sm:text-base text-right">
						Широкая сеть региональных представительств и хорошо налаженная
						система сотрудничества с подрядными организациями позволяет нам
						проводить изыскания в любом регионе РФ.
					</p>
				</div>
			</div>
			<div className="flex justify-end relative">
				<div className="absolute -left-[240px] h-[14px] max-w-[1097px] w-full bg-[#FF8C00]" />
				<div className="flex flex-col w-full md:w-1/2 pt-12">
					<div className="bg-white text-[#0B2C3D] py-2 px-4 mb-4 text-center font-medium">
						РАБОТАЕМ ПО ВСЕЙ РОССИИ
					</div>
					<p className="text-white text-sm sm:text-base text-right">
						Широкая сеть региональных представительств и хорошо налаженная
						система сотрудничества с подрядными организациями позволяет нам
						проводить изыскания в любом регионе РФ.
					</p>
				</div>
			</div>
			<div className="flex justify-end relative">
				<div className="absolute -left-[240px] h-[14px] max-w-[1097px] w-full bg-[#FF8C00]" />
				<div className="flex flex-col w-full md:w-1/2 pt-12">
					<div className="bg-white text-[#0B2C3D] py-2 px-4 mb-4 text-center font-medium">
						РАБОТАЕМ ПО ВСЕЙ РОССИИ
					</div>
					<p className="text-white text-sm sm:text-base text-right">
						Широкая сеть региональных представительств и хорошо налаженная
						система сотрудничества с подрядными организациями позволяет нам
						проводить изыскания в любом регионе РФ.
					</p>
				</div>
			</div>
		</div>
	);
};

const Results = () => {
	return (
		<div className="relative flex flex-col pt-10">
			<div className="relative">
				<div className="absolute inset-0 bg-white opacity-45"></div>
				<Image
					src={"/images/results-1.png"}
					width={500}
					height={500}
					alt={"Results page"}
					className="left-0 w-full h-[490px] object-cover"
				/>
			</div>

			<h2 className="absolute top-16 left-10 z-20 text-3xl font-bold text-[#0B2C3D] mb-12 text-center">
				За минувший год мы провели изыскания:
			</h2>

			<div className="mt-20 sm:mt-10 w-full absolute top-1/2 transform -translate-y-1/2 items-center justify-center grid grid-cols-2 sm:grid-cols-4 gap-8">
				{results.map((item, index) => (
					<div
						key={index}
						className="relative flex flex-col justify-center items-center place-self-center max-w-[160px] max-h-[160px] sm:max-w-[241px] sm:max-h-[241px] w-full h-full"
					>
						<div className="border-[#FF8C00] border-[1px] h-full w-full relative bg-white/[47%] rounded-full p-6 aspect-square flex items-center justify-center text-center shadow-lg ">
							<p className="text-[#0B2C3D] font-medium text-sm sm:text-base">
								{item.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
