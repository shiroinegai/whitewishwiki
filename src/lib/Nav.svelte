<script>
	import Dropdown from './Dropdown.svelte';
</script>

<nav class="desktop">
	<a href="/">Home</a>
	<Dropdown heading="News">
		<section class="eldenring">
			<a href="/news/eldenring"><h3>ELDEN RING News</h3></a>
			<h4>
				Latest:
				<a href="/news/eldenring/placeholder">ELDEN RING: Patch Notes 1.03.2</a>
			</h4>
		</section>
		<section class="wiki">
			<a href="/news/wiki"><h3>Wiki News</h3></a>
			<h4>
				Latest:
				<a href="/news/wiki/introducing-white-wish-wiki">Introducing White Wish Wiki</a>
			</h4>
		</section>
	</Dropdown>
	<a href="/">About</a>
	<a href="/">Characters</a>
	<a href="/">Equipment</a>
	<a href="/">The Lands Between</a>
	<a href="/">Guides</a>
</nav>

<nav class="mobile" />

<style>
	nav {
		display: none;
		flex-wrap: wrap;
		gap: 1.5em;
		margin: 0;
		padding: 0 2rem;
		background-color: #181818;
		background-image: url('/images/black-paper.webp');
		background-blend-mode: color-burn;
		border-bottom: 1px solid #c19d53;
		position: sticky;
		z-index: 10000;
		top: 0;
		width: 100%;
	}

	nav > a {
		font-family: 'Elden Base', serif;
		text-transform: uppercase;
		margin: 0;
		padding: 1rem 0;
		min-width: min-content;
	}

	@media (min-width: 1000px) {
		.desktop {
			display: flex;
		}

		.mobile {
			display: none;
		}
	}
</style>
