"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "../hook";

export default function ContactsPage() {
	const [ref, isInView] = useInView({ threshold: 0.1 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={containerVariants}
			className="px-8 md:px-20 py-16"
		>
			<div className="max-w-6xl mx-auto">
				<motion.h2
					variants={itemVariants}
					className="text-white text-3xl font-bold mb-8"
				>
					Где мы находимся?
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Map container */}
					<motion.div variants={itemVariants}>
						<Image
							src={"/images/contacts-image.svg"}
							alt={"Карта расположения офиса"}
							width={648}
							height={398}
							className="object-cover rounded-xl"
						/>
					</motion.div>

					{/* Contact information */}
					<motion.div
						variants={containerVariants}
						className="flex flex-col justify-center h-full text-white space-y-8"
					>
						<motion.div variants={itemVariants}>
							<h3 className="text-xl font-semibold mb-1">Адрес:</h3>
							<p className="md:max-w-[320px] text-lg leading-relaxed">
								678962, Республика Саха (Якутия), Нерюнгринский район, город
								Нерюнгри, Новостроевская ул., д. 9, офис 4
							</p>
						</motion.div>

						<motion.div variants={itemVariants}>
							<h3 className="text-xl font-semibold mb-1">Связаться с нами:</h3>
							<a
								href="tel:+79100052260"
								className="text-lg hover:text-orange-400 transition-colors"
							>
								+7 (910) 005-22-60
							</a>
						</motion.div>

						<motion.div variants={itemVariants}>
							<h3 className="text-xl font-semibold mb-1">Почта:</h3>
							<a
								href="mailto:support@sts.org"
								className="text-lg hover:text-orange-400 transition-colors"
							>
								support@sts.org
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
