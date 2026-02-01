<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Album } from '../../../../../routes/types';
	import SelectAlbum from './SelectAlbum.svelte';
	import Yay from './Yay.svelte';
	import DumbArrow from './DumbArrow.svelte';
	import FunSelect from '$lib/components/header/dropdown/FunSelect.svelte';
	let { selectedAlbumName, dumbArrowIsVisible, albums, selectAlbum, yeetTheArrow } = $props<{
		selectedAlbumName: string,
		dumbArrowIsVisible: boolean,
		albums: () => Album[],
		selectAlbum: (friendlyName: string) => void,
		yeetTheArrow: () => void,
	}>();
</script>

<div class="woh__album-selection">
		<div class="top">
			{#if dumbArrowIsVisible}
				<span class="woh__dumb-arrow-wrapper" out:fly={{x:200, y: -400, duration: 5000, easing: cubicOut}}><DumbArrow /></span>
			{/if}
		</div>
		<div class="left">
						{#if selectedAlbumName.length > 0}
							<span class="woh__post-selection-msg"></span>
						{:else}
							<span class="woh__slanted-select-album-cta"><SelectAlbum /></span>
						{/if}
		</div>
		<div class="right">
			<FunSelect options={albums()} selectAlbum={selectAlbum} {yeetTheArrow}/>
		</div>
	<div class="bottom"></div>
	</div>

<style>
    .woh__album-selection {
        margin: 1rem;
        display: grid;
        grid-template-columns: 60px 120fr 180fr;
        grid-template-areas: "arrow arrow arrow"
		     										 "left  right right"
                     				 "bott  bott  bott";
        align-items: stretch;
				width: 360px;
    }
    .top {
        grid-area: arrow;
        background: purple;
        height: 27px;
    }

    .left {
        grid-area: left;
        background: red;
        height: 72px;
    }
    .right {
        grid-area: right;
        background: green;
    }
    .bottom {
        grid-area: bott;
        background: salmon;
        height: 27px;
    }
    .woh__post-selection-msg {
        position: absolute;
        grid-area: bott;
    }
</style>