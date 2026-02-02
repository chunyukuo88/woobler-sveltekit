<script lang="ts">
	import { Wooblers, Other, House } from "$lib/components/svg";
	import { processWordForGlyphs } from '$lib/custom-font/utils';
	import Glyph from '$lib/components/Glyph.svelte';

	const footerText1 = processWordForGlyphs('Copyright Woobler 2026.');
	const footerText2 = processWordForGlyphs('All rights reheated and reserved.');
	const multiple = 0.3;
</script>

<header>
	<div class="woh__title-words">
		<div class="woh_drop-in"><Wooblers /></div>
		<div class="woh_drop-in"><Other /></div>
		<div class="woh_eventual-slant"><House /></div>
	</div>
</header>

<slot />

<footer>
	{#each footerText1 as letter}
		{#if letter === ' '}
			<span>&nbsp&nbsp&nbsp</span>
		{:else}
			<Glyph {letter} {multiple}/>
		{/if}
	{/each}
	<div></div>
	{#each footerText2 as letter}
		{#if letter === ' '}
			<span>&nbsp&nbsp&nbsp</span>
		{:else}
			<Glyph {letter} {multiple}/>
		{/if}
	{/each}
</footer>

<style>
    header {
        display: flex;
				align-items: center;
				justify-content: start;
        position: sticky;
        top: 0;
        z-index: 2;
				width: 50%;
    }

		.woh__title-words {
				font-size: 2rem;
        background: #fff;
        clip-path: polygon(0% 0%, 100% 0%, 97% 12%, 99% 20%, 97% 26%, 92% 32%, 85% 31%, 84% 37%, 88% 41%, 94% 43%, 100% 44%, 98% 50%, 94% 58%, 97% 69%, 100% 76%, 96% 84%, 100% 100%, 75% 98%, 56% 100%, 34% 98%, 0% 100%);
		}

		.woh_drop-in {
        stroke-width: 2;
		}

    .woh__title-words > div:nth-child(1) {
        animation: drop-first 0.6s linear forwards 1s;
        opacity: 0;
        position: relative;
    }

    .woh_drop-in:nth-child(2) {
        animation: drop-second 0.6s linear forwards 2s;
        opacity: 0;
    }

    .woh_eventual-slant {
        animation: slant 0.1s linear forwards 3s;
    }

    @keyframes drop-first {
        0% {
            transform: translateY(-200px);
            opacity: 0;
        }
        50% {
            transform: translateY(0);
            opacity: 1;
        }
        65% {
            transform: translateY(-17px);
            opacity: 1;
        }
        75% {
            transform: translateY(-22px);
            opacity: 1;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes drop-second {
        0% {
            transform: translateY(-200px);
            opacity: 0;
        }
        50% {
            transform: translateY(0);
            opacity: 1;
        }
        65% {
            transform: translateY(-17px);
            opacity: 1;
        }
        75% {
            transform: translateY(-22px);
            opacity: 1;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes slant {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(6deg) translateY(4px);
        }
    }
</style>