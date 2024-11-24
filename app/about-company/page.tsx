"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { equipments, results } from "../constants";
import { useInView } from "../hook";
import { useEffect } from "react";

export default function PricesPage() {
	return (
		<div>
			<div className="flex flex-col items-center justify-center px-8 md:px-20 ">
				<TestimonialCard />
				<div className="relative flex flex-row max-w-3xl w-full">
					<div className="hidden md:block w-4 bg-white self-stretch ml-24 mr-10 " />
					<div className="pb-10">
						<TestimonialDescription />
						<Card />
					</div>
					<div className="absolute bottom-0 right-0 h-[14px] bg-[#FF8C00] w-screen" />
				</div>

				<EquipmentGrid />
			</div>

			<Results />
		</div>
	);
}

const TestimonialCard = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [isInView, controls]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.5 }}
			className="relative max-w-3xl mx-auto pt-10"
		>
			<blockquote className="flex flex-col sm:flex-row items-center bg-gray-100 py-12 rounded-lg px-10 gap-12">
				<Image
					src={"/images/staff-image.svg"}
					alt={"Фотография Главного Геолога ССТ"}
					width={188}
					height={188}
					className="w-full xs:w-[188px] xs:h-[188px]"
				/>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					animate={controls}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="space-y-4 flex-grow"
				>
					<p>
						Главное в работе изыскательской организации - чувствовать всю
						величину своей ответственности. Только качественно проведенные
						изыскания могут служить надежным основанием для всех последующих
						этапов проектирования и строительства, вплоть до окончательной сдачи
						объекта.
					</p>

					<footer className="mt-6">
						<p className="font-medium">Оленица Татьяна Владимировна</p>
						<p className="font-medium">главный геолог ССТ</p>
					</footer>
				</motion.div>
			</blockquote>
		</motion.div>
	);
};

const TestimonialDescription = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	const listVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={listVariants}
			className="place-self-end flex flex-col w-full text-white text-[17px] p-8 space-y-6"
		>
			<motion.p variants={itemVariants}>
				<span className="font-bold">КОМПАНИЯ ССТ</span> является динамично
				развивающимся многопрофильным геологическим предприятием, выполняющим
				весь комплекс геологоразведочных работ от региональных
				геолого-геофизических работ до разведки месторождений твердых полезных
				ископаемых и подземных вод. Предприятие обладает значительным опытом
				работ на Северо-Востоке России,
			</motion.p>

			<motion.p variants={itemVariants} className="font-bold">
				НАПРАВЛЕНИЯ РАБОТ
			</motion.p>
			<motion.ul variants={listVariants} className="list-disc">
				<motion.li variants={itemVariants}>
					Поиски и разведка месторождений твердых полезных ископаемых
				</motion.li>
				<motion.li variants={itemVariants}>
					Гидрогеологические работы по поискам и оценке подземных вод,
					составление проектов разработки месторождений, бурение
					эксплуатационных скважин на подземные воды.
				</motion.li>
				<motion.li variants={itemVariants}>
					Комплекс геологических, геофизических и геохимических методов,
					проходка скважин колонкового и ударно-канатного бурения, поверхностных
					горных выработок и механизированной проходки.
				</motion.li>
				<motion.li variants={itemVariants}>
					Лабораторно-аналитические исследования.
				</motion.li>
				<motion.li variants={itemVariants}>
					Эколого-геохимические работы.
				</motion.li>
				<motion.li variants={itemVariants}>
					Составление проектной документации на проведение геологоразведочных
					работ. Добыча россыпного золота.
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

const Card = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [isInView, controls]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.5 }}
			className="flex flex-col gap-10"
		>
			<div className="flex justify-end relative">
				<div className="flex flex-col w-full md:w-[80%] pt-12">
					<div className="bg-white text-[#0B2C3D] py-2 px-4 mb-4 text-center font-medium origin-left">
						РАБОТАЕМ ПО ВСЕЙ РОССИИ
					</div>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={controls}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-white text-sm sm:text-base text-right"
					>
						Широкая сеть региональных представительств и хорошо налаженная
						система сотрудничества с подрядными организациями позволяет нам
						проводить изыскания в любом регионе РФ.
					</motion.p>
				</div>
			</div>
		</motion.div>
	);
};

const Results = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [isInView, controls]);

	return (
		<div ref={ref} className="relative flex flex-col pt-10">
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

			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={controls}
				transition={{ duration: 0.5 }}
				className="absolute top-16 left-10 z-20 text-lg md:text-3xl font-bold text-[#0B2C3D] mb-12 text-center"
			>
				За минувший год мы провели изыскания:
			</motion.h2>

			<div className="mt-20 sm:mt-10 sm:pb-8 px-4 sm:px-10 w-full absolute top-1/2 transform -translate-y-1/2 items-center justify-center grid grid-cols-2 sm:grid-cols-4 gap-8">
				{results.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={controls}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="relative flex flex-col justify-center items-center place-self-center max-w-[160px] max-h-[160px] sm:max-w-[241px] sm:max-h-[241px] w-full h-full"
					>
						<div className="border-[#FF8C00] border-[1px] h-full w-full relative bg-white/[47%] rounded-full p-6 aspect-square flex items-center justify-center text-center shadow-lg ">
							<p className="text-[#0B2C3D] font-medium text-sm sm:text-base">
								{item.text}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

const EquipmentGrid = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ opacity: 1, y: 0 });
		}
	}, [isInView, controls]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={controls}
			transition={{ duration: 0.5 }}
			className="flex flex-col w-full mt-20"
		>
			<motion.h4
				initial={{ opacity: 0, y: -20 }}
				animate={controls}
				transition={{ duration: 0.5, delay: 0.2 }}
				className="text-white text-3xl font-bold text-center mb-12"
			>
				Техническое оснащение компании
			</motion.h4>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
				{equipments.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={controls}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="mx-auto relative group w-full h-full"
					>
						<Image
							src={item.imageSrc}
							alt={`Изображение ${item.title}`}
							width={351}
							height={245}
							className="hover:saturate-100 relative w-full saturate-100 lg:saturate-0 transition duration-300"
						/>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={controls}
							transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
							className="absolute bottom-4 right-2 bg-[#16384E] p-3"
						>
							<h3 className="max-w-[235px] text-white text-xs font-medium">
								{item.title}
							</h3>
						</motion.div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};
