<script>
	import Logo from './Logo.svelte';
</script>

<header>
	<a href="/" class="logo">
		<Logo />
	</a>
	<div>
		<h2>Welcome ye Tarnished, to the Elden Ring White Wish Wiki.</h2>
		<p>
			Tis wiki's flame of ambition is yet to be extinguished. <a
				href="/blog/introducing-white-wish-wiki">Learn more</a
			>.
		</p>
	</div>
</header>

<style>
	header {
		display: flex;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 1rem 2rem;
	}

	div {
		padding: 0.5rem 1rem;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		border: 1px solid #c19d53;
		background-color: rgba(24, 24, 24, 0.875);
	}

	h2 {
		color: #c19d53;
		font-family: 'Elden Base', serif;
		font-size: 1.25rem;
	}

	p {
		margin: 0;
	}

	.logo:hover {
		text-decoration: none;
	}

	@media screen and (min-width: 973px) {
		header {
			justify-content: unset;
		}
	}
</style>
