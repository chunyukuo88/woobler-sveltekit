<script lang="ts">
	import * as Font from '$lib/custom-font';
	import type { Component } from 'svelte';
	let { letter } = $props<{ letter: keyof typeof Font }>();
	const Glyph: Component = Font[letter];
</script>

<Glyph />

<style>
	svg {
			width: 12.5px;
			height: auto;
	}
</style>