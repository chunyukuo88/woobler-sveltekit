<script lang="ts">
	import StyledImage from '$lib/components/image/StyledImage.svelte';
	import type { Album } from '../../../routes/types';
	let { bucket, selectedAlbum, isPrivate } = $props<{
		bucket: string;
		selectedAlbum: Album;
		isPrivate: boolean;
	}>()
	let alt = isPrivate ? 'Visible to a select few.' : 'Image that anyone can see.';
	let processedCaptions = selectedAlbum.captions.map(caption => caption.split('@')[1]);
</script>

{#each selectedAlbum.photos as photoUrl, index}
	<StyledImage
		caption={processedCaptions[index]}
		src={`${bucket}/${photoUrl}`}
		{alt}
	/>
{/each}