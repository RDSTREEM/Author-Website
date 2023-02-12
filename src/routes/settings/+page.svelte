<script>
	import { enhance } from '$app/forms';
	// import { page } from '$app/stores';

	// @ts-ignore
	function submitOnChange(event) {
		// @ts-ignore
		event.target.parentElement.submit();
	}
	/**
	 * @type {any}
	 */
	export let data;
	$: lang = data.lang;
</script>

<svelte:head>
	<title>Settings | Abebe Kebie</title>
</svelte:head>

<main>
	<div class="wrapper">
		<div class="settings-container container">
			<h1 class="header">Settings</h1>
			<!-- TODO Load from a database -->
			<p class="text-intro">General</p>
			<div class="main-text">
				<form method="post" action="/?/setLang" use:enhance>
					<label for="lang">Language: </label>
					<select name="lang" bind:value={lang} on:change={submitOnChange}>
						<option value="en">English</option>
						<option value="am">Amharic</option>
					</select>
				</form>
			</div>
			<p>No other settings yet!</p>
		</div>
	</div>
</main>

<style>
	form {
		display: inline;
		position: relative;
		z-index: 10;
	}
	select {
		background-color: #2d475f;
		width: 10rem;
		height: 2rem;
	}

	select > option {
		background-color: #395968;
		height: 2rem;
	}

	.header {
		text-align: center;
		padding-top: 1rem;
		font-size: 1.6rem;
	}
	.text-intro {
		font-size: 1.5rem;
		font-style: oblique;
		text-align: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.wrapper {
		padding-top: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		display: block;
		height: 500px;
		width: 1000px;
		border-radius: 20px;
		padding: 1rem;
		overflow-y: hidden;
	}

	.settings-container {
		background-color: cadetblue;
	}

	.main-text {
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		text-align: center;
		padding-top: 12rem;
	}
</style>
