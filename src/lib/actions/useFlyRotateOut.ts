import { cubicOut } from 'svelte/easing';
import { type FlightPath } from './types';

export 	function useFlyRotateOut(node: HTMLElement, params: FlightPath) {
	const style = getComputedStyle(node);
	const existingTransform = style.transform === 'none' ? '' : style.transform;

	return {
		duration: params.duration,
		easing: cubicOut,
		css: (t: number) => {
			const u = 1 - t;
			const x = params.x * u;
			const y = params.y * u;
			const angle = 720 * t;
			return `
          transform: ${existingTransform} translate(${x}px, ${y}px) rotate(${angle}deg);
        `;
		}
	};
}