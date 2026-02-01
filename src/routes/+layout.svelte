<script lang="ts">
	import { Wooblers, Other, House } from "$lib/components/svg";
</script>

<header>
	<span>⚽</span>
	<div class="woh__title-words">
		<div class="woh_drop-in"><Wooblers /></div>
		<div class="woh_drop-in"><Other /></div>
		<div class="woh_eventual-slant"><House /></div>
	</div>
	<span>🪀</span>
</header>
<nav>
	<a href="/" style="margin-right: 1rem;">Home</a>
	<a href="/bread" style="margin-right: 1rem;">bread</a>
	<a href="/tech">tech</a>
</nav>

<slot />

<style>
    header {
        display: flex;
				align-items: center;
				justify-content: center;
    }

		.woh__title-words {
				font-size: 2rem;
		}

    span {
        animation: wiggle 10s linear infinite;
        margin: 0 1rem;
				font-size: 3rem;
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

    @keyframes wiggle {
        10% { transform: translateX(5px) rotate(5deg); }
        20% { transform: translateX(-5px) rotate(-5deg); }
        30% { transform: translateX(4px) rotate(4deg); }
        40% { transform: translateX(-4px) rotate(-4deg); }
        50% { transform: translateX(3px) rotate(3deg); }
        60% { transform: translateX(-3px) rotate(-3deg); }
        70% { transform: translateX(2px) rotate(2deg); }
        80% { transform: translateX(-2px) rotate(-2deg); }
        90% { transform: translateX(1px) rotate(0); }
        100% { transform: translateX(-1px) rotate(0); }
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