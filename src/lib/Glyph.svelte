<script lang="ts">
	import * as Font from '$lib/custom-font';
	import type { Component } from 'svelte';
	let { letter } = $props<{ letter: keyof typeof Font }>();
	const Symbol: Component = Font[letter];
</script>

<Symbol />

<style>
	svg {
			width: 12px;
			height: auto;
	}
</style>