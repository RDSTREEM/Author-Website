<script>
	// @ts-ignore
	export let data;

	// @ts-ignore
	$: lang = data.lang;
</script>

<svelte:head>
	<title>Books | Abebe Kebie</title>
</svelte:head>

<main>
	<div class="check-wrapper">
		<p class="books">Checkout my books!</p>

		<div class="books-container">
			<div class="cont first-book">
				<a href="/books/customerservice">
					<img src="/bookcover1.jpg" alt="Book cover for 'የደንበኞች አገልግሎት'" />
					<p>የደንበኞች አገልግሎት</p>
					<p class="click">Click to learn more.</p>
				</a>
			</div>
			<div class="cont second-book">
				<a href="/books/chandular">
					<img src="/bookcover2.jpg" alt="Book over for 'የአገልግሎት ልህቀት ለዘላቂ ተወዳዳሪነት'" />
					<p>የአገልግሎት ልህቀት ለዘላቂ ተወዳዳሪነት</p>
					<p class="click">Click to learn more.</p>
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	.check-wrapper {
		padding-top: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.check-wrapper {
		flex-direction: column;
		gap: 0.7rem;
	}

	.books {
		font-size: xx-large;
	}

	.books-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.cont {
		border-radius: 1rem;
		padding: 1rem;
	}

	.cont p {
		text-align: center;
		padding-top: 0.5rem;
	}

	.cont img {
		margin: 0;
		border-radius: 1rem;
		max-width: 500px;
	}

	.cont {
		border: 1px solid black;
	}
	.cont:hover {
		box-shadow: 1px 0px 30px 0px black;
	}

	@media (max-width: 1000px) {
		img {
			max-width: 400px !important	;
		}
	}

	@media (max-width: 900px) {
		.books-container {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}

	@media (max-width: 500px) {
		.books-container {
			display: grid;
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		img {
			max-width: 300px !important;
		}
	}

	.click {
		color: white;
	}
</style>
