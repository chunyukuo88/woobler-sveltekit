<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import StyledImage from '$lib/components/StyledImage.svelte';
	import { emptyAlbum } from './types';
	import DumbArrow from '$lib/components/svg/header-controls/album-selection/DumbArrow.svelte';
	import { SelectAlbum } from '$lib/components/svg';
	import FunSelect from '$lib/components/header/dropdown/FunSelect.svelte';
	import ColumnSelection from '$lib/components/header/ColumnSelection.svelte';
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
</script>

<div class="woh__buttons-and-album-selection">
	<ColumnSelection {setColumns} {columns} />

	<div class="woh__album-selection">
		<span><SelectAlbum /></span>
		{#if dumbArrowIsVisible}
			<span out:fly={{x:200, y: -400, duration: 5000, easing: cubicOut}}><DumbArrow /></span>
		{/if}
		<FunSelect options={albums()} selectAlbum={selectAlbum} {yeetTheArrow}/>
	</div>
</div>

{#if !!(getSelectedAlbum())}
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
{:else}
	<div>Gallery is closed for maintenance. Come back tomorrow.</div>
{/if}

<style>
	.woh__buttons-and-album-selection {
			display: flex;
			justify-content: space-around;
	}

	.woh__album-selection {
			margin: 1rem;
			display: flex;
			align-items: center;
			width: 175px;
			position: relative;

			span:nth-child(1) {
					right: 81px;
					bottom: 18px;
					transform: rotate(-25deg);
			}
			span:nth-child(2) {
					position: absolute;
					bottom: 40px;
					left: -21px;
					transform: rotate(-5deg);
			}
	}
  .woh__main-gallery-grid {
      display: grid;
      grid-template-columns: repeat(var(--cols), 1fr);
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