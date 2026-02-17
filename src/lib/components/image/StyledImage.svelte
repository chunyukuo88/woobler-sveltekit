<script lang='ts'>
	// TODO: add
	// import NoCaption from '$lib/components/svg/NoCaption.svelte';
	let {src, alt, caption} = $props<{
		src: string;
		alt: string;
		caption: string;
	}>();
	let loaded = $state(false);
	function handleLoad() {
		loaded = true;
	}
	function clickHandler(){
		console.log(caption);
	}

	let modalId = `woh__caption-modal-${src}`;
</script>

<div class='woh__image-and-captions'>
	<button class='woh__popover-trigger' popovertarget={modalId} onclick={clickHandler}>
		<div
			class='woh__image-skeleton'
			class:visible={!loaded}
			aria-hidden='true'
		></div>

		<img
			src={src}
			alt={alt}
			onload={handleLoad}
			loading='lazy'
		/>
	</button>

	{#if caption.length > 0}
		<div class='woh__popover' id={modalId} popover>
			<p>{caption}</p>
			<button class="woh__popover-close-button" popovertarget={modalId} popovertargetaction='hide'>
				⚽
			</button>
		</div>
	{/if}
</div>

<style>


	.woh__popover-trigger {
			position: relative;
			width: 100%;
			height: unset;
			aspect-ratio: 3 / 4;
			border-radius: 0.5rem;
			overflow: hidden;
			background: #e0e0e0;
			display: flex;
			align-items: center;
	}

  img {
      width: 100%;
      object-fit: cover;
      display: block;
  }

  .woh__popover {
      margin: unset;
			border: none;
      padding: 1rem;
			height: 50%;
			width: 80%;
      background: white;
      position-area: center;
			text-align: center;
			border-radius: 4rem;

			p {
					padding-top: 1rem;
					margin-bottom: 0;
					font-size: 1rem;
					font-family: Arial, Helvetica, sans-serif;
			}
	}

	.woh__popover-close-button {
			border-radius: 50%;
			text-align: center;
			background: none;
			border: none;
			font-size: 2rem;
	}

	.woh__image-skeleton {
			position: absolute;
			inset: 0;
			background: #e0e0e0;
			opacity: 0;
	}

	.woh__image-skeleton::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
							90deg,
							transparent,
							rgba(255, 255, 255, 0.4),
							transparent
			);
			transform: translateX(-100%);
			animation: shimmer 1.2s infinite;
	}

	.woh__image-skeleton.visible {
			opacity: 1;
			pointer-events: none;
	}

	.woh__caption-unavailable-icon {
			position: absolute;
			margin-left: 0.75rem;
			bottom: 5.25rem;
	}

  @keyframes shimmer {
      to {
          transform: translateX(100%);
      }
  }
</style>