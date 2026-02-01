<script lang="ts">
	// import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Album } from '../../../../../routes/types';
	import SelectAlbum from './SelectAlbum.svelte';
	import Yay from './Yay.svelte';
	import DumbArrow from './DumbArrow.svelte';
	import FunSelect from '$lib/components/header/dropdown/FunSelect.svelte';
	let { selectedAlbumName, dumbArrowIsVisible, albums, selectAlbum, yeetTheArrow, yeeting } = $props<{
		selectedAlbumName: string,
		dumbArrowIsVisible: boolean,
		albums: () => Album[],
		selectAlbum: (friendlyName: string) => void,
		yeetTheArrow: () => void,
		yeeting: boolean,
	}>();

	function flyAndSpin(node: HTMLElement, params: { x: number; y: number; duration: number }) {
		const style = getComputedStyle(node);
		const existingTransform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: params.duration,
			easing: cubicOut,
			css: (t: number) => {
				const u = 1 - t;
				const x = params.x * u;
				const y = params.y * u;
				const angle = 720 * t;
				return `
          transform: ${existingTransform} translate(${x}px, ${y}px) rotate(${angle}deg);
        `;
			}
		};
	}

	const flightPath = { x: 200, y: -400, duration: 5000 };

	</script>

<div class="woh__album-selection">
		<div class="top">
			{#if dumbArrowIsVisible}
				<span class="woh__arrow-rotation" class:yeeting={!!yeeting}>
					<span class="woh__arrow-flight" out:flyAndSpin={flightPath}>
						<DumbArrow />
					</span>
				</span>
			{/if}
		</div>
		<div class="left">
						{#if selectedAlbumName.length > 0}
							<span class="woh__post-selection-msg"><Yay /></span>
						{:else}
							<span class="woh__slanted-select-album-cta"><SelectAlbum /></span>
						{/if}
		</div>
		<div class="right">
			<FunSelect options={albums()} {selectAlbum} {yeetTheArrow}/>
		</div>
	</div>

<style>
    .woh__album-selection {
        margin: 1rem;
        display: grid;
        grid-template-columns: 60px 120fr 180fr;
        grid-template-areas: "arrow arrow arrow"
		     										 "left  right right";
        align-items: stretch;
				width: 360px;
    }
    .top {
        grid-area: arrow;
        height: 27px;
				position: relative;
    }

		.yeeting {
				transform-origin: right;
        animation: spin-out 5s cubic-bezier(.2,.8,.3,1) forwards;
		}
    @keyframes spin-out {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(720deg);
        }
    }

    .woh__arrow-flight {
				position: absolute;
				transform: rotate(-10deg);
				top: 5px;
    }

    .left {
        grid-area: left;
        height: 72px;
				display: flex;
				align-items: center;
				justify-content: center;
    }
    .right {
        grid-area: right;
    }
    .woh__post-selection-msg {
        position: absolute;
        grid-area: bott;
    }
</style>