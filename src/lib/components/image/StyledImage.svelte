<script lang='ts'>
	let {src, alt} = $props<{
		src: string;
		alt: string;
		caption: string;
	}>();
	let loaded = $state(false);

	function handleLoad() {
		loaded = true;
	}
</script>

<div class="woh__image-frame">
	<div
		class="woh__image-skeleton"
		class:visible={!loaded}
		aria-hidden="true"
	></div>

	<img
		src={src}
		alt={alt}
		onload={handleLoad}
		loading="lazy"
	/>
</div>

<style>
    .woh__image-frame {
        position: relative;
        width: 100%;
				height: unset;
        aspect-ratio: 3 / 4;
        border-radius: 0.5rem;
        overflow: hidden;
        background: #e0e0e0;
				display: flex;
				align-items: center;
    }

    .woh__image-skeleton {
        position: absolute;
        inset: 0;
        background: #e0e0e0;
        opacity: 0;
    }

    .woh__image-skeleton::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.4),
                transparent
        );
        transform: translateX(-100%);
        animation: shimmer 1.2s infinite;
    }

    .woh__image-skeleton.visible {
        opacity: 1;
        pointer-events: none;
    }

    @keyframes shimmer {
        to {
            transform: translateX(100%);
        }
    }

    img {
        width: 100%;
        object-fit: cover;
        display: block;
    }
</style>