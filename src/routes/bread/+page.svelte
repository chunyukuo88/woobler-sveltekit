<script>
	let { data } = $props();
</script>

<div>yay bread</div>
{#each data.breadGalleryData as { url }}
	<img src={url}>
{/each}