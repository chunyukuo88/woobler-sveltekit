<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img
	src={src}
	alt={alt}
	class="styled-image"
	loading="lazy"
/>

<style>
    .styled-image {
        width: 100%;
        display: block;
        border-radius: 6px;
        object-fit: cover;
    }
		@media (width > 1000px) {
        .styled-image {
            width: 75%;
        }
		}
</style>
