<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div>
	<img
		src={src}
		alt={alt}
		loading="lazy"
	/>
</div>

<style>
		div {
				padding: 0.5rem;
				display: flex;
				align-items: center;
		}
    img {
        width: 100%;
        border-radius: 0.5rem;
    }
</style>
