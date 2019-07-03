<style>
	section {
		background-color: #CFD8DC;
		height: 300px;
		padding: 0 20px;
	}

	.container {
		display: table;
		height: 100%;
		width: 100%;
	}

	.content {
		display: table-cell;
		max-width: 0;
		text-align: center;
	}

	.empty {
		vertical-align: middle;
	}

	img {
		vertical-align: middle;
		width: 50px;
	}

	span {
		color: #757575;
	}
</style>

<section>
	<div class="container">
		{#if Object.keys($DataObject).length}
			{#each Object.entries($DataObject.list) as [key, value]}
				<div class="content">
					<Card value={value}/>
				</div>
			{/each}
		{:else}
			<div class="empty content">
				<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="few_clouds">
				<span>Search for your city to begin</span>
			</div>
		{/if}
	</div>
</section>

<script>
	import {DataObject} from '../../Stores';
	import Card from '../Card/index.svelte';
</script>
