<script>
	import '$lib/../app.postcss';
	import '$lib/../styles/global.css';
</script>

<header>
	<nav>
		<div class="bg-ul" />
		<ul>
			<p>Abebe Kebie Hunegnaw</p>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/books">Books</a></li>
			<li><a href="/services">Services</a></li>
			<li><a href="mailto:girarchz@gmail.com">Contact</a></li>
		</ul>
	</nav>
</header>
<main>
	<slot />
</main>

<footer>
	<p>Copyright &copy; Abebe Kebie 2023</p>
	<p>Developed by RDSTREEM (Nahom Abebe) Contact on nahomabebe2002@gmail.com</p>
</footer>

<style>
	ul,
	footer {
		padding: 10px;
	}

	footer > p {
		color: black;
		font-weight: 550;
		font-size: 0.8rem;
		position: relative;
		z-index: 1;
	}
	footer,
	.bg-ul {
		background-color: var(--color-7);
	}
	footer {
		width: 97 vw;
		text-align: center;
		margin: 0px;
	}

	ul,
	.bg-ul {
		position: fixed;
		text-align: center;
		width: 100vw;
		top: 0;
	}

	ul > li {
		display: inline;
		margin-left: 0.5rem;
		font-weight: 550;
		font-size: 20px;
	}

	main {
		margin-top: 3.5rem;
		margin-bottom: 1rem;
	}

	.bg-ul {
		height: 3.75rem;
	}

	@media (max-width: 430px) {
		ul a {
			font-size: 16px;
		}

		ul li {
			margin-left: 0.2rem;
		}
	}
	@media (max-width: 330px) {
		ul a {
			font-size: 12px;
		}

		ul li {
			margin-left: 0.2rem;
		}
	}
	header {
		display: flex;
		flex-direction: column;
	}
</style>
