<script>
</script>

<svelte:head>
	<title>Home | Abebe Kebie</title>
</svelte:head>

<main>
	<div class="wrapper">
		<div class="about-container container">
			<!-- <h1 class="header">About</h1>
			<p class="text-intro">Hi! I am Abebe Kebie</p>
			<span class="main-text"
				>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ea aut accusamus sunt
				dolorum officiis rerum minus, labore soluta veniam repudiandae, illo repellat doloremque
				quia deserunt a voluptate, ad vel!</span
			> -->
			<img src="/book_cover.jpg" alt="Cover" />
		</div>
	</div>

	<div class="wrapper">
		<div class="services-container container">
			<h1 class="header">Services</h1>
			<!-- <p class="text-intro"></p> -->
			<div class="service-text">
				<span class="main-text">
					<p>ስልጠና፣ ምርምርና የማማከር አገልግሎት (Training Research and consultancy)</p>
					<ul>
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
	<div class="wrapper">
		<div class="latest-container container">
			<h1 class="header">Contact</h1>
			<!-- TODO Load from a data base -->

			<!-- <p class="text-intro">The Book Of Stuff</p> -->
			<span class="main-text">
				<div class="social linked-in">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
					<a href="https://www.linkedin.com/mwlite/in/abebe-kebie-hunegnawu-884241223">
						Linked In
					</a>
				</div>
				<div class="social facebook">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
						/>
					</svg>
					<a href="https://www.facebook.com/profile.php?id=100085796659886&mibextid=ZbWKwL">
						Facebook
					</a>
				</div>
				<div class="social phone">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"
						/>
					</svg>
					<p>+251918760202</p>
				</div>
				<div class="social mail">
					<svg
						width="24"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						fill-rule="evenodd"
						clip-rule="evenodd"
					>
						<path
							d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"
						/>
					</svg>
					<a href="mailto:girarchz@gmail.com">Gmail</a>
				</div>
			</span>
		</div>
	</div>
</main>

<style>
	.header {
		text-align: center;
		padding-top: 1rem;
		font-size: 1.6rem;
	}
	/* .text-intro {
		font-size: 1.5rem;
		font-style: oblique;
		text-align: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
	} */

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
		/* background-color: var(--color-1); */
		height: auto;
		/* max-height: 800px; */
	}

	.about-container > img {
		width: 100vw;
		height: auto;
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

	div.service-text > span.main-text > p {
		font-weight: bold;
	}

	.social {
		display: flex;
		align-items: center;
		margin: 1rem 0;
	}

	.social > svg {
		margin-right: 1rem;
	}
</style>
