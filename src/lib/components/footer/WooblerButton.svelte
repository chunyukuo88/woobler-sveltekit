<script lang="ts">
	import { cubicOut } from 'svelte/easing';

	const flightPath = { x: 200, y: -400, duration: 2000 };

	/**
	 * TODO: extract into transition factory, put into $lib/transitions/flyRotate.ts (or something)
	 * print out conversation with Jipity
	 * */

	function wooblerFliesIn(node: HTMLElement, params: { x: number; y: number; duration: number }){
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
          will-change: transform;
        `;
			}
		};
	}

	function scrollToTop(){
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<img
	class="woh__woobler-button"
	src="/woobler-pointing.png"
	alt="woobler-pointing-up"
	onclick={scrollToTop}
	in:wooblerFliesIn={flightPath}
>

<style>
	img {
		cursor: pointer;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40%;
		transform: translate(0, 0);
  }
</style>
