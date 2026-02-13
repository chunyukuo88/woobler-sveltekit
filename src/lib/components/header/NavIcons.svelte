<script lang="ts">
	import { Croissant, Home } from '../svg/header-controls/nav-options';
	import { page } from '$app/state';
	const isHome = $derived(() => page.url.pathname === '/');
</script>

<nav class="woh__nav-icons">
	{#if isHome()}
		<a href="/bread" class="nav-slot"><Croissant /></a>
	{:else}
		<a href="/" class="nav-slot"><Home /></a>
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