<script lang="ts">
	import type { Album } from '../../../../routes/types';
	import { processWordForGlyphs } from '$lib/custom-font/utils';
	import Glyph from '../../Glyph.svelte';
	import Option from '$lib/components/header/dropdown/Option.svelte';

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
</script>

<div class="fun-select-wrapper" onclick={toggle} role="button" tabindex="0">
	<div class="fun-select">
		<div class="trigger">
			{#if selected.length < 1}
				{#each albumAsLetters as letter}
					<Glyph letter={letter} multiple={0.25}/>
				{/each}
				🤣
			{:else}
				<marquee scrollamount=5 id="because-I-will-never-use-this-for-work">
					{selected}
				</marquee>
			{/if}
		</div>
	</div>
</div>
<div class="woh__dropdown-options">
	{#if open}
		<ul>
			{#each albums as album, i}
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
		</ul>
	{/if}
</div>

<style>
	.fun-select-wrapper {
			border: black 1px solid;
			border-radius: 7px 7px 0 0;
			display: flex;
      justify-content: center;
			align-items: center;
      height: 64px;
	}

	.fun-select {
			position: relative;
      cursor: pointer;
	}

  .trigger {
      text-align: center;
  }

  #because-I-will-never-use-this-for-work {
      font-family: Impact, Haettenschweiler, 'Arial Black', sans-serif;
			font-size: 3rem;
  }

	ul {
      list-style-type: none;
			width: 150px;
      padding-inline-start: 0;
      animation: pop-in 1s cubic-bezier(.2,1.2,.4,1);
  }

	.woh__dropdown-options {
      position: absolute;
			margin-top: -1px;
			right: 24px;
      border-radius: 0 0 15px 15px;
			background: #fff;
			width: 144px;
      border: black 1px solid;
			cursor: pointer;
			z-index: 3;

      li {
					padding: 0.25rem;
					text-align: center;
          transition: 1s;
			}
			li:hover {
					transition: 0.5s;
          transform: translateY(2px) rotate(-3deg) scale(1.15);
					background: #e66465;
			}
			li.selected {
          background: radial-gradient(#d7ee85, white 100%);
          transform: translateY(2px) rotate(3deg) scale(1.05);
      }
	}

  @keyframes pop-in {
      from {
          opacity: 0;
          transform: scale(0.95) translateY(-6px);
      }
  }

  @keyframes slide-in {
      from {
          opacity: 0;
          transform: translateY(-6px);
      }
  }
</style>