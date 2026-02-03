<script lang="ts">
	import { One, Two, Three, Four } from '$lib/components/svg';
	let { setColumns, columns } = $props<{
		setColumns: (n: number) => void
		columns: number,
	}>();
	let oneShouldCurl = $state(false);
	function oneClickHandler() {
		setColumns(1);
		oneShouldCurl = true;
	}
	let twoShouldFall = $state(false);
	function twoClickHandler() {
		console.log('twoClickHandler');
		setColumns(2);
		twoShouldFall = true;
	}
	let threeShouldChange = $state(false);
	function threeClickHandler() {
		setColumns(3);
		threeShouldChange = true;
	}
</script>

<section class="woh__grid-column-buttons">
		<div role="button" tabindex="0" onclick={oneClickHandler} class={`${columns === 1 ? "selected" : ""}`}>
			<One {oneShouldCurl}/>
		</div>
		<div role="button" tabindex="0" onclick={twoClickHandler} class={`${columns === 2 ? "selected" : ""}`}>
			<Two {twoShouldFall}/>
		</div>
		<div role="button" tabindex="0" onclick={threeClickHandler} class={`desktop-only ${columns === 3 ? "selected" : ""}`}>
			<Three {threeShouldChange}/>
		</div>
		<div role="button" tabindex="0" onclick={() => setColumns(4)} class={`desktop-only ${columns === 4 ? "selected" : ""}`}>
			<Four />
		</div>
	</section>

<style>
    .woh__grid-column-buttons {
        display: flex;
        display: flex;
        justify-content: space-between;
				align-items: center;
				height: 80px;
    }
    .woh__grid-column-buttons > div:nth-child(2) {
				margin-top: 16px;
				background: none;
		}
    .woh__grid-column-buttons > div:hover {
        cursor: pointer;
        background: radial-gradient(#e66465, white 60%);
    }
    .woh__grid-column-buttons > div.selected {
        background: radial-gradient(#d7ee85, white 60%);
    }
    .desktop-only {
        display: none;
    }
    @media (min-width: 640px) {
        .desktop-only {
            display: inline-flex;
        }
    }
		@media (min-width: 1024px) {
			.woh__grid-column-buttons {
					width: 500px;
			}
		}
		@media (min-width: 1264px) {
			.woh__grid-column-buttons {
					width: 600px;
			}
		}
</style>