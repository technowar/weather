<style>
	header {
		background: #455A64;
		padding: 20px;
	}

	nav {
		display: table;
		width: 100%;
	}

	.title {
		display: table-cell;
		vertical-align: middle;
	}

	.search {
		display: table-cell;
		vertical-align: middle;
		height: 42px;
		width: 190px;
	}

	.search input:focus {
		box-shadow: none;
	}

	.search input {
		margin: 0;
	}

	.search input.true {
		border: 2px solid #EA2121;
	}
</style>

<header>
	<nav>
		<div class="title">
			<a href="#!">WEATHER</a>
		</div>
		<div class="search">
			<input
				class={!!Object.keys($ErrorObject).length}
				type="text"
				placeholder="Search City"
				bind:value={city}
				on:keyup={handleKeyup}
			/>
		</div>
	</nav>
</header>

<script>
	import {SearchCity} from '../../Actions';
	import {ErrorObject} from '../../Stores';

	let city = '';

	function handleKeyup (evt) {
		if (city && evt.keyCode === 13) {
			SearchCity({
				city,
			});
		}
	}
</script>
