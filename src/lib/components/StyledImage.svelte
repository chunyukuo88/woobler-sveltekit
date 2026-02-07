<script lang='ts'>
	let {src, alt} = $props<{
		src: string;
		alt: string;
	}>();
	let clicked = $state(false);

	function clickHandler(){
		clicked = !clicked;
	}
</script>

<div onclick={clickHandler}>
	<img
		class='woh__main-gallery-image'
		src={src}
		alt={alt}
		loading='lazy'
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
