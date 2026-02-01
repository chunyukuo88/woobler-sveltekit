<script lang="ts">
	import StyledImage from '$lib/components/StyledImage.svelte';
	import { emptyAlbum } from './types';
	import { One, Two, Three, Four, SelectAlbum } from '$lib/components/svg';
	import FunSelect from '$lib/components/dropdown/FunSelect.svelte';
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

	function selectAlbum(friendlyName: string) {
		selectedAlbumName = friendlyName;
	}
	let columns = $state<number | null>(2);
	function setColumns(n: number) {
		columns = n;
	}
</script>

<div class="woh__buttons-and-album-selection">
	<section class="woh__grid-column-buttons">
		<div role="button" tabindex="0" onclick={() => setColumns(1)} class={`${columns === 1 ? "selected" : ""}`}><One /></div>
		<div role="button" tabindex="0" onclick={() => setColumns(2)} class={`${columns === 2 ? "selected" : ""}`}><Two /></div>
		<div role="button" tabindex="0" onclick={() => setColumns(3)} class={`desktop-only ${columns === 3 ? "selected" : ""}`}><Three /></div>
		<div role="button" tabindex="0" onclick={() => setColumns(4)} class={`desktop-only ${columns === 4 ? "selected" : ""}`}><Four /></div>
	</section>

	<div class="woh__album-selection">
		<span><SelectAlbum /></span>
		<FunSelect options={albums()} selectAlbum={selectAlbum}/>
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
	<div>Gallery is closed for maintenance. Come back tomorrow ~</div>
{/if}

<style>
	.woh__buttons-and-album-selection {
			display: flex;
			justify-content: space-around;
	}
	.woh__grid-column-buttons {
			margin: 1rem;
			display: flex;
	}
  .woh__grid-column-buttons > div:hover {
			cursor: pointer;
      background: radial-gradient(#e66465, white 60%);
	}
  .woh__grid-column-buttons > div.selected {
      background: radial-gradient(#d7ee85, white 60%);
	}
	.woh__album-selection {
			margin: 1rem;
			display: flex;
			align-items: center;
			width: 175px;


			span {
					right: 81px;
					bottom: 18px;
					transform: rotate(-25deg);
			}
	}
  .woh__main-gallery-grid {
      display: grid;
      grid-template-columns: repeat(var(--cols), 1fr);
  }
  .desktop-only {
      display: none;
  }
  /* tablets */
  @media (min-width: 640px) {
      .woh__main-gallery-grid {
          --cols: 2;
      }
      .desktop-only {
          display: inline-flex;
      }
  }
  /* desktop */
  @media (min-width: 1024px) {
      .woh__main-gallery-grid {
          --cols: 3;
      }
  }

</style>