<style>
	section {
		background-color: #607D8B;
		height: 320px;
		padding: 0 20px;
	}

	.container,
	.content {
		display: table;
		height: 100%;
		width: 100%;
	}

	.location {
		padding-bottom: 3px;
		text-align: center;
	}

	.location span {
		font-size: 8pt;
		font-weight: 400;
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
		font-size: 8pt;
		font-weight: 400;
	}
</style>

<section>
	<div class="container">
		{#if Object.keys($DataObject).length}
			<div class="location">
				<span>5-DAY WEATHER AND FORECAST FOR {`${$DataObject.name.toUpperCase()}, ${$DataObject.sys.country.toUpperCase()}`}</span>
			</div>
			<div class="content">
				{#each $DataObject.list as value (value.dt)}
					<Card value={value}/>
				{/each}
			</div>
		{:else}
			<div class="empty">
				<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="few_clouds">
				<span>SEARCH YOUR CITY TO BEGIN</span>
			</div>
		{/if}
	</div>
</section>

<script>
	import {DataObject} from '../../Stores';
	import Card from '../Card/index.svelte';
</script>
