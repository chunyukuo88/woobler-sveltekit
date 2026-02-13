<script lang="ts">
	import { Croissant, Home, Tech } from '$lib/components/svg/header-controls/nav-options/index.js';
	import { page } from '$app/state';
	const isHome = $derived(() => page.url.pathname === '/');
	const isBread = $derived(() => page.url.pathname === '/bread');
	const isTech = $derived(() => page.url.pathname === '/tech');
</script>

<nav class="woh__nav-icons">
	{#if !isBread()}
		<a href="/bread" class="nav-slot"><Croissant /></a>
	{:else}
		<div class="nav-slot"></div>
	{/if}

	{#if !isHome()}
		<a href="/" class="nav-slot"><Home /></a>
	{:else}
		<div class="nav-slot"></div>
	{/if}

	{#if !isTech()}
		<a href="/tech" class="nav-slot"><Tech /></a>
	{:else}
		<div class="nav-slot"></div>
	{/if}
</nav>

<style>
    .woh__nav-icons {
        position: absolute;
        top: 5px;
        right: 5px;

        display: flex;
        gap: 0;
    }

    .nav-slot {
        width: 50px;
        height: 50px;

        flex: 0 0 50px;
    }
</style>