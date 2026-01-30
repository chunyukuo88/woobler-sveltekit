<script lang="ts">
	import StyledImage from '$lib/components/StyledImage.svelte';
	import { emptyAlbum } from './types';
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
</script>



<div>Select an album to view photos.</div>
<select name="album selector" id="album selector" onchange={selectAlbum}>
	{#if albums().length < 1}
		<div></div>
	{:else}
		{#each albums() as album}
			<option value={album.friendlyName}>{album.friendlyName}</option>
		{/each}
	{/if}
</select>

{#if !!(getSelectedAlbum())}
	<div class="grid">
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