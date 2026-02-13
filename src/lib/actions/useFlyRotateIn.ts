import { cubicOut } from 'svelte/easing';
import { type FlightPath } from './types';

export function flyRotateIn(node: HTMLElement, params: FlightPath){
	const style = getComputedStyle(node);
	const existingTransform = (style.transform === 'none') ? '' : style.transform;
	return {
		duration: params.duration,
		easing: cubicOut,
		css: (progress: number) => {
			const remainingProgress = 1 - progress;
			const translateX = params.x * remainingProgress;
			const translateY = params.y * remainingProgress;
			const angle = 720 * progress;
			return `
          transform: ${existingTransform} translate(${translateX}px, ${translateY}px) rotate(${angle}deg);
        `;
		}
	};
}
