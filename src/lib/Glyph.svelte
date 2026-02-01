<script lang="ts">
	import * as Font from '$lib/custom-font';
	import type { Component } from 'svelte';
	let { letter, multiple } = $props<{
		letter: keyof typeof Font;
		multiple?: number;
	}>();
	const Symbol: Component = Font[letter];
</script>

<Symbol {letter} {multiple}/>

<style>
	svg {
			width: 12px;
			height: auto;
	}
</style>