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
			<div class="service-text">
				<span class="main-text">
					<ul>
						<li>ስልጠና፣ ምርምርና የማማከር አገልግሎት (Training Research and consultancy)</li>
						<li>የሽያጭ ክህሎትና የገበያ አስተዳደር(Sales &amp Marketing)</li>
						<li>የደንበኞች አገልግሎት(Customer Service)</li>
						<li>ዲጅታል ማርኬቲንግ(Digital Marketing)</li>
						<li>የስራ ፈጠራ (Entrepreneurship: startup &amp; corporate)</li>
						<li>የቢዝነስ ሞዴል ምስረታና ማሻሻያ(Business Model Development and Innovation )</li>
						<li>የህዝብ ግንኙነትና የተግባቦት ክህሎት(Public Relations &amp; Communication)</li>
					</ul>
				</span>
			</div>
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

	ul {
		list-style: disc;
	}

	.service-text {
		padding-left: 1rem;
	}
</style>
