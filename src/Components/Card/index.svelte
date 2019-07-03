<style>
	.card {
		border-bottom: 1px solid #BDBDBD;
		border-left: 1px solid #BDBDBD;
		border-top: 1px solid #BDBDBD;
		display: table-cell;
		line-height: 0.9;
		padding: 10px;
	}

	.card:first-child {
		-webkit-box-shadow: 10px 10px 5px 0px rgba(158,158,158,0.30);
		-moz-box-shadow: 10px 10px 5px 0px rgba(158,158,158,0.30);
		box-shadow: 10px 10px 5px 0px rgba(158,158,158,0.30);
	}

	.card:last-child {
		border-right: 1px solid #BDBDBD;
	}

	.time span:first-child {
		font-size: 8pt;
		font-weight: 600;
	}

	.icon {
		padding-bottom: 5px;
		text-align: center;
	}

	.icon span {
		font-size: 8pt;
	}

	.temperature {
		display: table;
		width: 100%;
	}

	.temperature .temp {
		display: table-cell;
		vertical-align: middle;
	}

	.temperature .temp span {
		font-size: 30pt;
	}

	.temperature .hilo {
		display: table-cell;
		text-align: right;
		vertical-align: middle;
	}

	.temperature .hilo div span:first-child,
	.info div span:first-child {
		font-size: 6pt;
		font-weight: 600;
	}

	.time span:last-child,
	.temperature .hilo div span:last-child,
	.info div span:last-child {
		font-size: 8pt;
		font-weight: 300;
	}

	.time span:last-child,
	.info div span:last-child {
		display: block;
	}
</style>

<div class="card">
	<div class="time">
		<span>{info.dt.date}</span>
		<span>{info.dt.time}</span>
	</div>
	<div class="icon">
		<img src="http://openweathermap.org/img/wn/{info.weather.icon}@2x.png" alt="{info.weather.description}">
		<span>{info.weather.description}</span>
	</div>
	<div class="temperature">
		<div class="temp">
			<span>{info.main.temp}&deg;</span>
		</div>
		<div class="hilo">
			<div>
				<span>HI</span>
				<span>{info.main.temp_max}&deg;</span>
			</div>
			<div>
				<span>LO</span>
				<span>{info.main.temp_min}&deg;</span>
			</div>
		</div>
	</div>
	<div class="info">
		<div>
			<span>HUMIDITY</span>
			<span>{info.main.humidity}%</span>
		</div>
		<div>
			<span>CLOUD COVER</span>
			<span>{info.clouds}%</span>
		</div>
		<div>
			<span>WIND SPEED</span>
			<span>{info.windspeed}m/s</span>
		</div>
	</div>
</div>

<script>
	export let value;

	$: info = {
		clouds: value.clouds['all'],
		dt: {
			date: new Date(value['dt']*1000).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				timeZone: 'UTC',
			}).toUpperCase(),
			time: new Date(value['dt']*1000).toLocaleTimeString('en-US', {
				hour12: true,
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				timeZone: 'UTC',
			}),
		},
		main: {
			humidity: value.main['humidity'],
			pressure: value.main['pressure'],
			temp: parseInt(value.main['temp']),
			temp_min: parseInt(value.main['temp_min']),
			temp_max: parseInt(value.main['temp_max']),
		},
		weather: {
			description: value.weather[0]['description'].toUpperCase(),
			icon: value.weather[0]['icon'],
		},
		windspeed: value.wind['speed'],
	};
</script>
