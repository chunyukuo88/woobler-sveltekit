<script>
	import Glyph from '$lib/components/Glyph.svelte';
	import { processWordForGlyphs } from '$lib/custom-font/utils.ts';

	let { option } = $props();
	let optionAsArray = processWordForGlyphs(option);
</script>

{#each optionAsArray as glyph}
	<Glyph letter={glyph} multiple={0.25}/>
{/each}
