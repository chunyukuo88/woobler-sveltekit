<script lang="ts">
	import StyledImage from '$lib/components/StyledImage.svelte';

	let message = "Welcome to the Home Page!";
	let { data } = $props();

	const firstAlbum = data.albums[0];
	console.log(firstAlbum);
	const album = $derived(() => data.albums[0]);
</script>

<h1>{message}</h1>
<p>Try navigating using the links above.</p>

<div class="grid">
	{#each album().photos as url}
		<StyledImage
			src={`https://woobler-photos.s3.us-east-1.amazonaws.com/${url}`}
			alt="for public viewing -- this doesn't include pictures of us"
		/>
	{/each}
</div>
