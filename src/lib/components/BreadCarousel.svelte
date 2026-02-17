<script lang="ts">
	import StyledImage from '$lib/components/image/StyledImage.svelte';

	export let images: { url: string; key: string }[];
	export let alt: string;

	let index = 0;

	const hasPrev = () => index > 0;
	const hasNext = () => index < images.length - 1;

	function prev() {
		if (hasPrev()) index -= 1;
	}

	function next() {
		if (hasNext()) index += 1;
	}
</script>

<div class="carousel">
	<StyledImage
		src={images[index].url}
		alt={alt}
	/>

	{#if index > 0}
		<button
			class="nav left"
			on:click={prev}
			aria-label="Previous image"
		>
			‹
		</button>
	{/if}

	{#if index < images.length - 1}
		<button
			class="nav right"
			on:click={next}
			aria-label="Next image"
		>
			›
		</button>
	{/if}
</div>

<style>
    .carousel {
        position: relative;
        width: 100%;
    }

    .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: none;
        font-size: 2rem;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .nav.left {
        left: 0.5rem;
    }

    .nav.right {
        right: 0.5rem;
    }

    .nav:hover {
        background: rgba(0, 0, 0, 0.8);
    }
</style>
