<script lang="ts">
	import { One, Two, Three, Four } from '$lib/components/svg';
	import { useFlyRotateOut } from '$lib/actions/useFlyRotateOut';
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
		setColumns(2);
		twoShouldFall = true;
	}
	let threeShouldChange = $state(false);
	function threeClickHandler() {
		setColumns(3);
		threeShouldChange = true;
	}
	let transformFour = $state(false);
	let flyIsVisible = $state(true);
	function fourClickHandler() {
		setColumns(4);
		transformFour = true;
		flyIsVisible = false;
	}
	const flightPath = { x: -200, y: -400, duration: 6000 };
</script>

<section class="woh__grid-column-buttons">
		<button tabindex="0" onclick={oneClickHandler} class={`${columns === 1 ? "selected" : ""}`}>
			<One {oneShouldCurl}/>
		</button>
		<button tabindex="0" onclick={twoClickHandler} class={`${columns === 2 ? "selected" : ""}`}>
			<Two {twoShouldFall}/>
		</button>
		<button tabindex="0" onclick={threeClickHandler} class={`desktop-only ${columns === 3 ? "selected" : ""}`}>
			<Three {threeShouldChange}/>
		</button>
		<button tabindex="0" onclick={fourClickHandler} class={`desktop-only ${columns === 4 ? "selected" : ""}`}>
			<Four {transformFour}/>
			{#if flyIsVisible}
				<span id="woh__horsefly" out:useFlyRotateOut={flightPath}>*</span>
			{/if}
		</button>
	</section>

<style>
    .woh__grid-column-buttons {
        display: flex;
        justify-content: space-between;
				align-items: center;
				height: 80px;
    }
		button {
        padding: 0;
        background: none;
        border: none;
        border-radius: 0;
        cursor: pointer;
		}
    .woh__grid-column-buttons > div:nth-child(2) {
				margin-top: 16px;
				background: none;
		}
    .woh__grid-column-buttons > button:hover {
        cursor: pointer;
        background: radial-gradient(#e66465, white 60%);
    }
    .woh__grid-column-buttons > button.selected {
        background: radial-gradient(#d7ee85, white 60%);
    }
    .desktop-only {
        display: none;
    }
		#woh__horsefly {
				font-size: 10px;
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