<script lang="ts">
	import StyledImage from '$lib/components/StyledImage.svelte';
	let message = "Welcome to the Home Page!";
	let { data } = $props();

	let album = $derived(() => data.albums);
	let bucket = $derived(() => data.bucket);
</script>

<h1>{message}</h1>
{#if album().length > 0}
	<div class="grid">
		{#each album()[0].photos as url}
			<StyledImage
				src={`${bucket()}/${url}`}
				alt="for public viewing -- this doesn't include pictures of us"
			/>
		{/each}
	</div>
{:else}
	<div>Site is undergoing routine maintenance. Please check again tomorrow!</div>
{/if}
