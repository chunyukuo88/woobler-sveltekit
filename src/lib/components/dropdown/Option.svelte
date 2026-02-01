<script>
	import Glyph from '$lib/Glyph.svelte';
	import { processWordForGlyphs } from '$lib/custom-font/utils.js';

	let { option } = $props();
	let optionAsArray = processWordForGlyphs(option);
</script>

{#each optionAsArray as letter}
	<Glyph letter={letter.toLocaleUpperCase} multiple={0.25}/>
{/each}
