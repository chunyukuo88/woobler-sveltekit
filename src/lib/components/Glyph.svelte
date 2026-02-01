<script lang="ts">
	import * as Font from '$lib/custom-font';
	import type { Component } from 'svelte';
	import { checkForSpecialChar } from './utils';
	const { letter, multiple } = $props<{
		letter: keyof typeof Font;
		multiple?: number;
	}>();
	const adjustedLetter = checkForSpecialChar(letter);
	const Symbol: Component = Font[adjustedLetter];
</script>

{#if !!Symbol}
	<Symbol {letter} {multiple}/>
{:else if !Symbol}
	<span>{letter}</span>
{/if}
