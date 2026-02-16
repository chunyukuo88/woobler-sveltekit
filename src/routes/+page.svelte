<script lang="ts">
	import ColumnSelection from '$lib/components/header/ColumnSelection.svelte';
	import AlbumSelection from '$lib/components/svg/header-controls/album-selection/AlbumSelection.svelte';
	import MainGallery from '$lib/components/main-gallery/MainGallery.svelte';
	import { getSelectedAlbum } from './utils';
	let { data } = $props();

	let albums = $derived(() => data.albums);
	let bucket = $derived(() => data.bucket);
	let isPrivate = $derived(() => data.showPrivateImages);
	let selectedAlbumName = $state<string>('');
	let selectedAlbum = $derived(() => getSelectedAlbum(albums(), selectedAlbumName));

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
</script>

<div class="woh__buttons-and-album-selection">
	<ColumnSelection {setColumns} {columns} />
	<AlbumSelection {selectedAlbumName} {dumbArrowIsVisible} {albums} {selectAlbum} {yeetTheArrow}/>
</div>

<div class="woh__main-gallery-grid" style="--cols: {columns ?? 'unset'}">
	<MainGallery bucket={bucket()} selectedAlbum={selectedAlbum()} isPrivate={isPrivate()} />
</div>

<style>
	.woh__buttons-and-album-selection {
			display: flex;
			justify-content: space-between;
      align-items: end;
			border-bottom: black solid 1px;
			height: 80px;
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