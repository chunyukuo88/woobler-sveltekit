<script lang="ts">
	import { Wooblers, Other, House } from "$lib/components/svg";
</script>

<header>
	<div class="woh__title-words">
		<div class="woh_drop-in"><Wooblers /></div>
		<div class="woh_drop-in"><Other /></div>
		<div class="woh_eventual-slant"><House /></div>
	</div>
</header>

<slot />

<style>
    header {
        display: flex;
				align-items: center;
				justify-content: end;
    }

		.woh__title-words {
				font-size: 2rem;
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