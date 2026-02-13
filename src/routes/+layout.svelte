<script lang="ts">
	import FooterText from '$lib/components/footer/FooterText.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import NavIcons from '$lib/components/header/NavIcons.svelte';
</script>

<Header />
<NavIcons />
<slot />
<FooterText />

<style>
    .woh__nav-icons {
				position: absolute;
				right: 5px;
				top: 5px;
        margin-right: 3rem;
        display: grid;
        grid-template-areas:
					". home ."
					"croissant . tech";
    }

    #nav-croissant {
        grid-area: croissant;
    }

    #nav-home {
        grid-area: home;
    }

    #nav-tech {
        grid-area: tech;
    }
</style>