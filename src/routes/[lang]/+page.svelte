<script>
</script>

<svelte:head>
	<title>Home | Abebe Kebie</title>
</svelte:head>

<main>
	<div class="wrapper">
		<div class="about-container container">
			<h1 class="header">About</h1>
			<p class="text-intro">Hi! I am Abebe Kebie</p>
			<span class="main-text"
				>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ea aut accusamus sunt
				dolorum officiis rerum minus, labore soluta veniam repudiandae, illo repellat doloremque
				quia deserunt a voluptate, ad vel!</span
			>
		</div>
	</div>

	<div class="wrapper">
		<div class="latest-container container">
			<h1 class="header">Latest Release</h1>
			<!-- TODO Load from a data base -->

			<p class="text-intro">The Book Of Stuff</p>
			<span class="main-text"
				>A book about how to make more customers and business strategies to conquer the market</span
			>
		</div>
	</div>

	<div class="wrapper">
		<div class="services-container container">
			<h1 class="header">Services</h1>
			<!-- <p class="text-intro"></p> -->
			<span class="main-text"
				>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus eligendi nulla
				corrupti, laborum numquam esse perspiciatis, nobis reprehenderit commodi rem accusamus
				tenetur, fugiat temporibus modi odio ipsam asperiores soluta! Sit amet voluptatibus ad
				ratione enim deserunt quaerat odit delectus. Nobis nemo vel voluptatum culpa sint corporis
				quasi minus saepe recusandae, possimus fugit perferendis magnam mollitia, sapiente accusamus
				adipisci fugiat. Eius illum qui minus! Sint placeat ex corporis dolorum eveniet. Aut
				consectetur necessitatibus qui sequi, deserunt quam libero incidunt quidem dolor mollitia
				quas error dolorum nam sit sed cupiditate blanditiis! Consequuntur impedit nam nemo.
				Facilis, minus doloribus. Repellat reprehenderit ducimus enim dignissimos hic facere ratione
				possimus consectetur minima, labore eligendi dolorem deserunt saepe cum doloribus voluptatum
				ipsa omnis culpa? Ab. Molestiae aspernatur, cum doloribus alias nostrum libero dolorum
				accusantium sint ad fugit suscipit cupiditate minima sequi? Placeat, quibusdam quis ut in
				consectetur beatae voluptas facilis, quam illo veniam aspernatur laudantium?</span
			>
		</div>
	</div>
</main>

<style>
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
		padding-top: 0.7rem;
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
	.about-container {
		background-color: var(--color-1);
	}

	.latest-container {
		background-color: cadetblue;
	}

	.services-container {
		background-color: darkcyan;
		height: max-content;
	}
	.main-text {
		font-size: 1em;
	}
</style>
