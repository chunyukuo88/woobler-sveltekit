<script lang="ts">
	let {src, alt, caption} = $props<{
		caption: string;
		src: string;
		alt: string;
	}>();
	let clicked = $state(false);

	function clickHandler(){
		clicked = !clicked;
	}
</script>

<div class="woh__main-gallery-image">
	<img
		onclick={clickHandler} class={clicked ? "woh__image-transform" : "woh__image-normal"}
		src={src}
		alt={alt}
		loading="lazy"
	/>
	<div class="woh__main-gallery-caption">{caption}</div>
</div>

<style>
    .woh__main-gallery-image {
        padding: 0.5rem;
        display: flex;
        align-items: center;
				position: relative;
    }
    img {
        width: 100%;
        border-radius: 0.5rem;
				z-index: 2;
    }
		.woh__main-gallery-caption {
				position: absolute;
				bottom: 20px;
				z-index: 1;
		}
		.woh__image-normal {
				z-index: 0;
        transform: rotateX(0deg);
				transition: 2s;
		}
		.woh__image-transform {
			transform-origin: top;
			transform: rotateX(60deg);
			transform-style: preserve-3d;
			transition: 1s;
		}

</style>
