<script lang="ts">
	import BreadCarousel from "$lib/components/BreadCarousel.svelte";

	let { data } = $props();
	const breadGroups = Object.entries(data.breadGalleryData);
</script>

<h1>Bread</h1>

<div class="grid">
	{#each breadGroups as [breadName, images]}
		<section class="bread-section">
			<h2>{breadName.replaceAll("-", " ")}</h2>

				<BreadCarousel
					images={images}
					alt={breadName}
				/>
		</section>
	{/each}
</div>

<style>
    .bread-section {
        margin-bottom: 3rem;
    }

    .grid {
        display: grid;
        grid-template-columns: 3fr;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }
</style>
