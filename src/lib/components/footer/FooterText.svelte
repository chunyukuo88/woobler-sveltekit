<script lang="ts">
	import WooblerButton from '$lib/components/footer/WooblerButton.svelte';
	import Glyph from '$lib/components/Glyph.svelte';
	import { intersection } from '$lib/actions/useIntersection';
	import { processWordForGlyphs } from '$lib/custom-font/utils.js';

	let wooblerIsVisible = $state(false);
	function showWoobler(){
		wooblerIsVisible = true;
	}
	const footerText1 = processWordForGlyphs('Copyright Woobler 2026.');
	const footerText2 = processWordForGlyphs('All rights reheated and reserved.');
	const multiple = 0.3;
</script>

<footer>
	{#if wooblerIsVisible}
		<WooblerButton />
	{:else}
		<div></div>
	{/if}
	<div
		class="woh__footer-text"
		use:intersection={{
			threshold: 0.5,
			root: this,
			onEnter: () => showWoobler(),
		}}
	>
		{#each footerText1 as letter}
			{#if letter === ' '}
				<span>&nbsp&nbsp&nbsp</span>
			{:else}
				<Glyph {letter} {multiple}/>
			{/if}
		{/each}
		<div></div>
		{#each footerText2 as letter}
			{#if letter === ' '}
				<span>&nbsp&nbsp&nbsp</span>
			{:else}
				<Glyph {letter} {multiple}/>
			{/if}
		{/each}
	</div>
</footer>

<style>
    footer {
        position: relative;

        .woh__footer-text {
            transform: rotate(-3deg);
        }
    }
</style>