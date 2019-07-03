<div>
	<span>{value['dt']}</span>
	<span>{value.main['temp']}</span>
	<span>{value.weather[0]['main']}</span>
	<span>{value.clouds['all']}</span>
	<span>{value.wind['speed']}</span>
	<span>{value.rain['3h']}</span>
</div>

<script>
	export let value;
</script>
