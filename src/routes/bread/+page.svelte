<script lang="ts">
	import BreadCarousel from "$lib/components/BreadCarousel.svelte";

	let { data } = $props();
	const breadGroups = Object.entries(data.breadGalleryData);
</script>

<h1>Bread</h1>

{#each breadGroups as [breadName, images]}
	<section class="bread-section">
		<h2>{breadName.replaceAll("-", " ")}</h2>

		<div class="grid">
			<BreadCarousel
				images={images}
				alt={breadName}
			/>
		</div>
	</section>
{/each}

<style>
    .bread-section {
        margin-bottom: 3rem;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }
</style>
