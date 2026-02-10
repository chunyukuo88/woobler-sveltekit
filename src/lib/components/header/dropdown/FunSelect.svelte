<script lang="ts">
	import type { Album } from '../../../../routes/types';
	import { processWordForGlyphs } from '$lib/custom-font/utils';
	import Glyph from '../../Glyph.svelte';
	import Option from '$lib/components/header/dropdown/Option.svelte';

	import { onMount } from 'svelte';
	let width = $state<number | null>(null);
	onMount(() => {
		width = window.innerWidth;
	});

	let { options: albums, selectAlbum, yeetTheArrow } = $props();
	let open = $state(false);
	let selected: string = $state('');
	let selectedAsArray: string[] = $state([]);
	function toggle() {
		open = !open;
		yeetTheArrow();
	}

	function clickHandler({ friendlyName }: Album) {
		selectAlbum(friendlyName);
		selected = friendlyName;
		selectedAsArray = processWordForGlyphs(friendlyName);
		toggle();
	}

	const albumAsLetters = processWordForGlyphs("album");

	const getOptionClass = (album: Album, i: number) => {
		const isSelected = (selected === album.friendlyName);
		const isLastOne = (albums.length - 1 === i);
		return `${isSelected ? 'selected' : ''} ${isLastOne} ? 'last-one' : ''`;
	};
	const allButLast: Album[] = albums.slice(0, albums.length - 1);
	const lastOne: Album = albums[albums.length - 1];
</script>

<div class="fun-select-wrapper" onclick={toggle} role="button" tabindex="0">
	<div class="fun-select">
		<div class="trigger">
			{#if selected.length < 1}
				{#each albumAsLetters as letter}
					<Glyph letter={letter} multiple={(width > 680) ? 0.5 : 0.25}/>
				{/each}
				{#if open}🤣{/if}
			{:else}
				<div class="woh_marquee-clip">
					<div class="woh_marquee">
						<div class="woh_marquee-track">
							<span>{selected}</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
<div class="woh__dropdown-options">
	{#if open}
		<div class="woh__dropdown-border">
			<ul>
				{#each allButLast as album, i}
					<li
						style="--i: {i}"
						role="button"
						tabindex="0"
						class={(selected === album.friendlyName) ? 'selected' : ''}
						onclick={() => clickHandler(album)}
					>
						<Option option={album.friendlyName}/>
					</li>
				{/each}
				<li
					class="woh__last-album-option"
					onclick={() => clickHandler(lastOne)}
					role="button"
					tabindex="0"
				>
					<Option option={lastOne.friendlyName}/>
				</li>
			</ul>
		</div>
	{/if}
</div>

<style>
	.fun-select-wrapper {
			border: black 1px solid;
			border-radius: 7px 7px 0 0;
			align-items: center;
      height: 64px;
			cursor: pointer;
	}

	.fun-select {
			position: relative;
	}

  .trigger {
      text-align: center;
      min-width: 0;
  }

  .woh_marquee-clip {
      max-width: 100%;
      overflow: hidden;
  }

  .woh_marquee {
      width: 100%;
      min-width: 0;
      white-space: nowrap;
  }

	.woh_marquee-track {
      display: inline-block;
      animation: marquee 6s linear infinite;

			span {
          font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
          font-size: 2rem;
          padding-top: 1.75rem;
			}
	}

  @keyframes marquee {
      from {
          transform: translateX(150%);
      }
      to {
          transform: translateX(-150%);
      }
  }

	ul {
      list-style-type: none;
			width: 150px;
      padding-inline-start: 0;
      animation: slide-in 1s cubic-bezier(.9,1.2,.4,1);
  }

  .woh__last-album-option {
      animation: slide-in-reverse 3s cubic-bezier(.5, 1.2, .4, 1);
	}

	.woh__dropdown-options {
      position: absolute;
			margin-top: -1px;
			right: 24px;
      border-radius: 0 0 15px 15px;
			background: #fff;
			border: none;
			width: 144px;
			cursor: pointer;
			z-index: 3;
      animation: slide-in 1s cubic-bezier(.9,1.2,.4,1);
	}

  .woh__dropdown-border {
      border: black 1px solid;
      border-radius: 0 0 15px 15px;
  }

  li {
      padding: 0.25rem;
      text-align: center;
      transition: 1s;
  }
  li:hover {
      transition: 0.5s;
      transform: translateY(2px) rotate(-3deg) scale(1.15);
      background: #e66465;
      border: salmon 1px solid;
  }
  li.selected {
      background: #d7ee85;
      transform: translateY(2px) rotate(3deg) scale(1.05);
      border: black 1px solid;
  }

  @keyframes slide-in {
      from {
          opacity: 0;
          transform: translateX(600px);
      }
  }

	@keyframes slide-in-reverse {
			from {
					opacity: 0;
					transform: translateY(600px);
			}
	}
</style>