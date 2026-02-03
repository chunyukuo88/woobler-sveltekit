<script lang="ts">
	let {src, alt} = $props<{
		src: string;
		alt: string;
	}>();
	let clicked = $state(false);

	function clickHandler(){
		clicked = !clicked;
	}
</script>

<div onclick={clickHandler} class={clicked ? "woh__image-transform" : "woh__image-normal"}>
	<img
		src={src}
		alt={alt}
		loading="lazy"
	/>
</div>

<style>
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
