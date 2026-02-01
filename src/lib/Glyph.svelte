<script lang="ts">
	import * as Font from '$lib/custom-font';
	import type { Component } from 'svelte';
	const { letter, multiple } = $props<{
		letter: keyof typeof Font;
		multiple?: number;
	}>();
	const Symbol: Component = Font[letter];
</script>

{#if !!Symbol}
	<Symbol {letter} {multiple}/>
{:else}
	<div>{letter}</div>
{/if}
