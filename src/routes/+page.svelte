<script lang="ts">
	import StyledImage from '$lib/components/StyledImage.svelte';
	import { emptyAlbum } from './types';
	import ColumnSelection from '$lib/components/header/ColumnSelection.svelte';
	import AlbumSelection from '$lib/components/svg/header-controls/album-selection/AlbumSelection.svelte';
	import LoadingPanel from '$lib/components/LoadingPanel.svelte';
	let { data } = $props();

	let albums = $derived(() => data.albums);
	let bucket = $derived(() => data.bucket);
	let isPrivate = $derived(() => data.showPrivateImages);
	let selectedAlbumName = $state<string>('');
	let getSelectedAlbum = $derived(() => {
		const matchingAlbum = albums().find((a) => a.friendlyName === selectedAlbumName);
		const defaultAlbum = albums()[0] ?? emptyAlbum;
		return (matchingAlbum !== undefined) ? matchingAlbum : defaultAlbum;
	});

	let dumbArrowIsVisible = $state(true);
	function yeetTheArrow(){
		dumbArrowIsVisible = false;
	}
	function selectAlbum(friendlyName: string) {
		selectedAlbumName = friendlyName;
	}
	let columns = $state<number>(2);
	function setColumns(n: number) {
		columns = n;
	}
	const arr = ['','','','','','','',''];
</script>

<div class="woh__buttons-and-album-selection">
	<ColumnSelection {setColumns} {columns} />
	<AlbumSelection {selectedAlbumName} {dumbArrowIsVisible} {albums} {selectAlbum} {yeetTheArrow}/>
</div>

{#if !!(getSelectedAlbum()) === false}
	<div class="woh__main-gallery-grid" style="--cols: {columns ?? 'unset'}">
		{#each arr as _}
			<LoadingPanel/>
		{/each}
	</div>
{:else}
	<div class="woh__main-gallery-grid" style="--cols: {columns ?? 'unset'}">
		{#each getSelectedAlbum().photos as photoUrl}
			<StyledImage
				src={`${bucket()}/${photoUrl}`}
				alt={isPrivate()
					? 'Visible to a select few.'
					: 'Image that anyone can see.'}
			/>
		{/each}
	</div>
{/if}

<style>
	.woh__buttons-and-album-selection {
			display: flex;
			justify-content: space-between;
      align-items: end;
			border-bottom: black solid 1px;
			height: 120px;
	}

  .woh__main-gallery-grid {
      display: grid;
      grid-template-columns: repeat(var(--cols), 1fr);
			gap: 1rem;
  }

  /* tablets */
  @media (min-width: 640px) {
      .woh__main-gallery-grid {
          --cols: 2;
      }
  }
  /* desktop */
  @media (min-width: 1024px) {
      .woh__main-gallery-grid {
          --cols: 3;
      }
  }
</style>