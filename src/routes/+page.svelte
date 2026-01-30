<script lang="ts">
	import StyledImage from '$lib/components/StyledImage.svelte';
	import { emptyAlbum } from './types';
	import { One, Two, Three, Four, SelectAlbum } from '$lib/components/svg';
	let { data } = $props();

	let albums = $derived(() => data.albums);
	let bucket = $derived(() => data.bucket);
	let isPrivate = $derived(() => data.showPrivateImages);

	let selectedAlbumName = $state<string | null>(null);
	let getSelectedAlbum = $derived(() => {
		const matchingAlbum = albums().find((a) => a.friendlyName === selectedAlbumName);
		const defaultAlbum = albums()[0] ?? emptyAlbum;
		return (matchingAlbum !== undefined) ? matchingAlbum : defaultAlbum;
	});

	function selectAlbum(e: Event) {
		selectedAlbumName = (e.target as HTMLSelectElement).value;
	}
	let columns = $state(3);
</script>


<section class="woh__grid-column-buttons">
	<div role="button" tabindex="0" onclick={() => {columns = 1}}><One /></div>
	<div role="button" tabindex="0" onclick={() => {columns = 2}}><Two /></div>
	<div role="button" tabindex="0" onclick={() => {columns = 3}}><Three /></div>
	<div role="button" tabindex="0" onclick={() => {columns = 4}}><Four /></div>
</section>

<div class="woh__album-selection">
	<span><SelectAlbum /></span>
	<select name="album selector" id="album selector" onchange={selectAlbum}>
		{#if albums().length < 1}
			<div></div>
		{:else}
			{#each albums() as album}
				<option value={album.friendlyName}>{album.friendlyName}</option>
			{/each}
		{/if}
	</select>
</div>

{#if !!(getSelectedAlbum())}
	<div class="woh__main-gallery-grid" style="--cols: {columns}">
		{#each getSelectedAlbum().photos as photoUrl}
			<StyledImage
				src={`${bucket()}/${photoUrl}`}
				alt={isPrivate()
					? 'Visible to a select few.'
					: 'Image that anyone can see.'}
			/>
		{/each}
	</div>
{:else}
	<div>hello</div>
{/if}

<style>
	.woh__main-gallery-grid {
			display: grid;
			grid-template-columns: repeat(var(--cols), 1fr);
	}

	.woh__grid-column-buttons {
			margin: 1rem;
			display: flex;
	}

	.woh__album-selection {
			margin: 1rem;
	}
</style>