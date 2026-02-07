<script lang="ts">
</script>

<div class='woh__main-gallery-image-skeleton' aria-hidden="true"></div>

<style>
    .woh__main-gallery-image-skeleton {
        width: 100%;
        aspect-ratio: 3 / 4;
        border-radius: 0.5rem;
        background: #e0e0e0;
    }
    .woh__main-gallery-image-skeleton::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,0.4),
                transparent
        );
        transform: translateX(-100%);
        animation: shimmer 1.2s infinite;
    }


    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    }
</style>