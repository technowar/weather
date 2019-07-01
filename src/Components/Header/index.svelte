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
		width: 100%;
	}

	.search {
		display: table-cell;
		vertical-align: middle;
	}

	.search input {
		margin: 0;
	}
</style>

<header>
	<nav>
		<div class="title">
			<a href="#">WEATHER</a>
		</div>
		<div class="search">
			<input type="text" placeholder="Search City" on:keyup={handleKeyup}/>
		</div>
	</nav>
</header>

<script>
	import {key} from '../../Store';

	function handleKeyup (evt) {
		console.log(key);
		console.log(evt.key);
	}
</script>
