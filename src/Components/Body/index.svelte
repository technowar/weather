<style>
	section {
		background-color: #607D8B;
		padding: 0 20px;
	}

	.container {
		display: table;
		width: 100%;
	}

	.content {
		display: table-cell;
		max-width: 0;
		text-align: center;
	}
</style>

<section>
	<div class="container">
		{#if Object.keys($DataObject).length}
			{#each Object.entries($DataObject.list) as [key, value]}
				<div class="content">
					<Card
						dt={value.dt}
						main={value.main}
						weather={value.weather[0]}
					/>
				</div>
			{/each}
		{/if}
	</div>
</section>

<script>
	import {DataObject} from '../../Stores';
	import Card from '../Card/index.svelte';
</script>
