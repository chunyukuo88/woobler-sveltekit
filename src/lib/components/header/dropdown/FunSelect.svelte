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
		console.log(selected);
	}

	const albumAsLetters = processWordForGlyphs("album");
</script>

<div class="fun-select-wrapper">
	<div class="fun-select">
		<div class="trigger" role="button" tabindex="0" onclick={toggle}>
			{#if selected.length < 1}
				{#each albumAsLetters as letter}
					<Glyph letter={letter} multiple={0.25}/>
				{/each}
				🤣
			{:else}
				<marquee scrollamount=5 id="because-I-will-never-use-this-for-work">{selected}</marquee>
			{/if}
		</div>
		<div class="woh__dropdown-options">
			{#if open}
				<ul>
					{#each albums as album, i}
						<li
							style="--i: {i}"
							role="button"
							tabindex="0"
							onclick={() => clickHandler(album)}
						>
							<Option option={album.friendlyName}/>
						</li>
					{/each}
				</ul>
			{/if}
	</div>
	</div>
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
			margin-top: 1px;
			right: -1px;
      border-radius: 0 0 15px 15px;
			background: #fff;
      border: black 1px solid;

      li {
					padding: 0.25rem 0 0 0.5rem;
					text-align: center;
			}
			li:hover {
					color: #fff;
					transition: 0.5s;
          transform: translateX(4px) rotate(-0.25deg);
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