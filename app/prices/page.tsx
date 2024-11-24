"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hook";

export default function PricesPage() {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="px-8 md:px-10">
			<motion.div
				ref={ref}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
				className="bg-[#16384E] py-16"
			>
				<div className="max-w-6xl mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						{/* Left side - Image with overlay text */}
						<motion.div
							variants={itemVariants}
							className="relative rounded-lg overflow-hidden"
						>
							<div className="aspect-[4/3] bg-gray-300">
								<Image
									src="/images/prices-image.png"
									alt="Геодезическое оборудование"
									width={411}
									height={357}
									className="w-full h-full object-cover"
								/>
							</div>
						</motion.div>

						{/* Right side - Text content */}
						<motion.div variants={containerVariants} className="space-y-6">
							<motion.p
								variants={itemVariants}
								className="text-white text-lg leading-relaxed"
							>
								Мы подходим к каждому клиенту индивидуально, поэтому стоимость
								наших услуг рассчитывается с учетом ваших запросов и
								потребностей. Это позволяет предложить вам наиболее подходящее
								решение и оптимальную цену.
							</motion.p>
							<motion.p
								variants={itemVariants}
								className="text-white text-lg leading-relaxed"
							>
								Свяжитесь с нами, чтобы обсудить детали вашего проекта, и мы
								подготовим персональное предложение специально для вас.
							</motion.p>
							<motion.button
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors"
							>
								Запросить цену
							</motion.button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
