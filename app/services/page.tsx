"use client";

import { motion } from "framer-motion";
import { services, servicesTriangles } from "../constants";
import Image from "next/image";
import { useInView } from "../hook";

export default function ProvidedServices() {
	return (
		<motion.article
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.5 }}
			className="min-h-screen w-full flex flex-col items-center justify-center gap-10 pt-4 "
		>
			<motion.h1
				initial={{ y: -50 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				style={{ fontFamily: "Montserrat, sans-serif" }}
				className="font-medium text-[40px] sm:text-[70px] text-white mb-10"
			>
				Услуги
			</motion.h1>

			<ServicesTriangles />
			<ServicesMore />
		</motion.article>
	);
}

const ServicesTriangles = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	return (
		<section
			ref={ref}
			className="h-full flex items-center justify-center w-full my-10 sm:my-20"
		>
			<div className="my-10 sm:my-20 flex flex-wrap flex-row-reverse h-full relative items-center justify-center w-full text-white">
				<div className="flex flex-col sm:pl-1">
					{servicesTriangles.slice(0, 3).map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group transition-all duration-150 ease-in-out relative clip-triangle-top-right ml-[3px] mt-[-52px] sm:mt-[-92px]"
						>
							<Image
								src={service.imgSrc}
								alt={service.text}
								width={100}
								height={100}
								style={{ clipPath: service.imgClip }}
								className="saturate-100 lg:saturate-0 w-[100px] sm:w-[170px] sm:h-[200px] group-hover:saturate-100 group-hover:scale-105 group-hover:z-[100] transition-transform duration-150"
							/>
							<motion.h3
								style={{ fontFamily: "Poppins, sans-serif" }}
								className={`${service.textPos} group-hover:font-bold text-[10px] sm:text-[14px] max-w-[90px] sm:max-w-[115px] text-center font-medium tracking-[5%] leading-[15px] transition-all`}
							>
								{service.text}
							</motion.h3>
						</motion.div>
					))}
				</div>

				<div className="flex flex-col">
					{servicesTriangles.slice(3, 6).map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group transition-all duration-150 ease-in-out relative clip-triangle-top-right ml-[3px] mt-[-52px] sm:mt-[-92px]"
						>
							<Image
								src={service.imgSrc}
								alt={service.text}
								width={100}
								height={100}
								style={{ clipPath: service.imgClip }}
								className="saturate-100 lg:saturate-0 w-[100px] sm:w-[170px] sm:h-[200px] group-hover:saturate-100 group-hover:scale-105 group-hover:z-[100] transition-transform duration-150"
							/>
							<motion.h3
								style={{ fontFamily: "Poppins, sans-serif" }}
								className={`${service.textPos} group-hover:font-bold text-[10px] sm:text-[14px] max-w-[90px] sm:max-w-[115px] text-center font-medium tracking-[5%] leading-[15px] transition-all`}
							>
								{service.text}
							</motion.h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

const ServicesMore = () => {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	return (
		<section
			ref={ref}
			className="px-8 md:px-20 mb-[140px] lg:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full"
		>
			{services.map((service, index) => {
				return (
					<motion.div
						key={index}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						className="flex flex-col shadow-2xl"
					>
						<div className="relative">
							<Image
								src={service.imageSrc}
								alt={service.title}
								className="w-full saturate-100 lg:saturate-0 hover:saturate-100 transition-all duration-150 ease-in-out"
								width={600}
								height={600}
							/>
							<h4
								style={{ fontFamily: "Inter, sans-serif" }}
								className="text-[10px] tracking-[5%] uppercase p-2 text-white absolute right-0 rounded-tl-xl bottom-10 bg-[#16384E] max-w-[235px]"
							>
								{service.title}
							</h4>
						</div>

						<div className="flex flex-col justify-between py-4 gap-4 bg-white flex-1">
							<p
								style={{ fontFamily: "Montserrat, sans-serif" }}
								className="px-8 text-[12px]"
							>
								{service.subtitle}
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								style={{ fontFamily: "Inter, sans-serif" }}
								className="rounded-md text-white mx-auto text-[13px] tracking-[5%] font-bold px-[22px] py-3 bg-[#FF8C00] hover:bg-[#ff8c00c9] transition-all"
							>
								Узнать больше
							</motion.button>
						</div>
					</motion.div>
				);
			})}
		</section>
	);
};
