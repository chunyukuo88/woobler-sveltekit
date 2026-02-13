<script lang='ts'>
	import { flyRotateIn } from '$lib/actions/useFlyRotateIn';

	const flightPath = { x: 200, y: -400, duration: 2000 };

	function scrollToTop(){
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<img
	onclick={scrollToTop}
	in:flyRotateIn={flightPath}
	class='woh__woobler-button'
	src='/woobler-pointing.png'
	alt='woobler-pointing-up'
>

<style>
	img {
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40%;
		transform: translate(0, 0);
  }
</style>
