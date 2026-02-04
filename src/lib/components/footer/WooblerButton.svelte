<script lang="ts">
	import { cubicOut } from 'svelte/easing';

	const flightPath = { x: 200, y: -400, duration: 2000 };
	function wooblerFliesIn(node: HTMLElement, params: { x: number; y: number; duration: number }){
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
          will-change: transform;
        `;
			}
		};
	}
	function scrollToTop(){
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
</script>

<div
	onclick={scrollToTop}
	class="woh__woobler-button"
	in:wooblerFliesIn={flightPath}
>
	<img
		src="/woobler-pointing.png"
		alt="woobler-pointing-up"
	>
	<div>Click the Woobler</div>
</div>

<style>
    .woh__woobler-button {
        position: absolute;
        transform: translate(0, 0);
        cursor: pointer;
        right: 0;
        bottom: 0;
        width: 40%;
    }
</style>
