import { useState, useEffect, useRef } from "react";

export function useInView(options = {}) {
	const ref = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsInView(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		const currentRef = ref.current;

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [options]);

	return [ref, isInView] as const;
}
