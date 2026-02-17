<script lang="ts">
	import * as Font from '$lib/custom-font';
	import type { Component } from 'svelte';
	import { checkForSpecialChar } from './utils';
	const { letter, multiple } = $props<{
		letter: string;
		multiple?: number;
	}>();
	const adjustedLetter = $derived(checkForSpecialChar(letter));
	const Symbol: Component = $derived(Font[adjustedLetter]);
</script>

{#if !!Symbol}
	<Symbol {letter} {multiple}/>
{:else if !Symbol}
	<span>{letter}</span>
{/if}
