type IntersectionOptions = IntersectionObserverInit & {
	onEnter?: (entry: IntersectionObserverEntry) => void;
	onLeave?: (entry: IntersectionObserverEntry) => void;
};

export function intersection(node: Element, options: IntersectionOptions = {}) {
	const { root = null, rootMargin = '0px', threshold = 0, onEnter, onLeave } = options;
	const callback = ([entry]: IntersectionObserverEntry[]) => {
		if (entry.isIntersecting) {
			onEnter?.(entry);
		} else {
			onLeave?.(entry);
		}
	}
	const observer = new IntersectionObserver(callback, { root, rootMargin, threshold });

	observer.observe(node);

	return {
		update(options: IntersectionOptions) {
			observer.disconnect();
			Object.assign(options, options);
		},
		destroy() {
			observer.disconnect();
		}
	};
}
