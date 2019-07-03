<style>
	section {
		background-color: #CFD8DC;
		height: 300px;
		padding: 0 20px;
	}

	.container,
	.content {
		display: table;
		height: 100%;
		width: 100%;
	}

	.empty {
		display: table-cell;
		text-align: center;
		vertical-align: middle;
	}

	.empty img {
		vertical-align: middle;
		width: 50px;
	}

	.empty span {
		color: #757575;
	}
</style>

<section>
	<div class="container">
		{#if Object.keys($DataObject).length}
			<div class="content">
				{#each $DataObject.list as value (value.dt)}
					<Card value={value}/>
				{/each}
			</div>
		{:else}
			<div class="empty">
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
