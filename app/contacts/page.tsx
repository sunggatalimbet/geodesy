import Image from "next/image";

export default function ContactsPage() {
	return (
		<div className="px-8 md:px-20 py-16">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-white text-3xl font-bold mb-8">
					Где мы находимся?
				</h2>

				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Map container */}
					<Image
						src={"/images/prices-image.png"}
						alt={"image"}
						width={648}
						height={398}
						className="object-cover rounded-xl"
					/>

					{/* Contact information */}
					<div className="flex flex-col justify-center h-full text-white space-y-8">
						<div>
							<h3 className="text-xl font-semibold mb-1">Адрес:</h3>
							<p className="md:max-w-[320px] text-lg leading-relaxed">
								678962, Республика Саха (Якутия), Нерюнгринский район, город
								Нерюнгри, Новостроевская ул., д. 9, офис 4
							</p>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-1">Связаться с нами:</h3>
							<a
								href="tel:+79100052260"
								className="text-lg hover:text-orange-400 transition-colors"
							>
								+7 (910) 005-22-60
							</a>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-1">Почта:</h3>
							<a
								href="mailto:support@sts.org"
								className="text-lg hover:text-orange-400 transition-colors"
							>
								support@sts.org
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
