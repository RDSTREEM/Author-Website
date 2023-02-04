<script>
	import '$lib/../app.postcss';
	import '$lib/../styles/global.css';
	import { page } from '$app/stores';
	let isInSetting = $page.route.id === '/settings';
	// let settingsURL = `${$page.params.lang}/settings`;
	// let data;

	// console.log(data);
	// // // @ts-ignore
	// // let lang = data.lang;
</script>

<header>
	<nav>
		<a href="/settings" class:invisible={isInSetting}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-settings"
				><circle cx="12" cy="12" r="3" /><path
					d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
				/></svg
			>
		</a>
		<div class="bg-ul" />
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/books">Books</a></li>
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
		/* filter: blur(4px); */
	}

	/* .bg, */
	footer {
		/* position: fixed; */
		/* bottom: 0; */
		/* left: 0; */
		width: 97 vw;
		text-align: center;
		/* height: 2.8rem; */
		margin: 0px;
		/* padding: 0px; */
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
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}
	svg {
		position: fixed;
		z-index: 10;
		width: 1.7em;
		height: 1.7em;
		top: 0.5rem;
		right: 0.7rem;
	}
	.bg-ul {
		height: 2.7rem;
	}
</style>
