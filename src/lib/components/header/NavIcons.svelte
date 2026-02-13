<script lang="ts">
	import { Croissant, Home, Tech } from '$lib/components/svg/header-controls/nav-options/index.js';
</script>

<nav class="woh__nav-icons">
	<div id="nav-croissant"><Croissant /></div>
	<div id="nav-home"><Home /></div>
	<div id="nav-tech"><Tech /></div>
</nav>

<style>
    .woh__nav-icons {
        position: absolute;
				max-height: 100px;
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