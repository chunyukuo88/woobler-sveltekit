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
		<div>
			{#if selectedAlbumName.length > 0}
				<span class="woh__post-selection-msg"><Yay /></span>
			{:else}
				<span class="woh__slanted-select-album-cta"><SelectAlbum /></span>
			{/if}
			{#if dumbArrowIsVisible}
				<span class="woh__dumb-arrow-wrapper" out:fly={{x:200, y: -400, duration: 5000, easing: cubicOut}}><DumbArrow /></span>
			{/if}
		</div>
		<div>
			<FunSelect options={albums()} selectAlbum={selectAlbum} {yeetTheArrow}/>
		</div>
	</div>

<style>
    .woh__album-selection {
        margin: 1rem;
        display: grid;
        grid-template-columns: 0.75 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        width: 175px;
        position: relative;

        .woh__slanted-select-album-cta {
            right: 81px;
            bottom: 18px;
            transform: rotate(-25deg);
        }
        .woh__post-selection-msg {
            position: absolute;
        }
        .woh__dumb-arrow-wrapper {
            position: absolute;
            bottom: 30px;
            left: -21px;
            transform: rotate(-18deg);
        }
    }
</style>