type IntersectionOptions = IntersectionObserverInit & {
	onEnter?: (entry: IntersectionObserverEntry) => void;
	onLeave?: (entry: IntersectionObserverEntry) => void;
};

export function intersection(node: Element, options: IntersectionOptions = {}) {
	const { root = null, rootMargin = '0px', threshold = 0.1, onEnter } = options;
	const callback = ([entry]: IntersectionObserverEntry[]) => {
		if (entry.isIntersecting) {
			onEnter?.(entry);
		}
	}
	let observer = new IntersectionObserver(callback, { root, rootMargin, threshold });

	observer.observe(node);

	return {
		update(newOptions: IntersectionOptions) {
			observer.disconnect();
			const {
				root = null,
				rootMargin = '0px',
				threshold = 0,
			} = newOptions;

			observer = new IntersectionObserver(callback, { root, rootMargin, threshold });
			observer.observe(node);
		},
	};
}

