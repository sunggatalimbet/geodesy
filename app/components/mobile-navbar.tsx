import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = [
	{ href: "/", label: "Услуги" },
	{ href: "/prices", label: "Цены" },
	{ href: "/about-company", label: "О компании" },
	{ href: "/contacts", label: "Контакты" },
];

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ x: "100%" }}
					animate={{ x: 0 }}
					exit={{ x: "100%" }}
					transition={{ type: "tween", duration: 0.3 }}
					className="fixed top-0 right-0 w-full h-full bg-white z-50 overflow-y-auto"
				>
					<div className="flex flex-col p-6">
						<motion.button
							onClick={onClose}
							className="self-end mb-8"
							whileTap={{ scale: 0.95 }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</motion.button>
						<nav>
							<ul className="space-y-4">
								{menuItems.map((item) => (
									<motion.li
										key={item.href}
										whileTap={{ scale: 0.95 }}
										className="border-b border-gray-200 pb-2"
									>
										<Link
											href={item.href}
											className="text-lg font-medium text-[#16384E]"
											onClick={onClose}
										>
											{item.label}
										</Link>
									</motion.li>
								))}
							</ul>
						</nav>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
