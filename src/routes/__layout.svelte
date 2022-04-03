<script>
	import Header from '$lib/Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		background-color: rgba(24, 24, 24, 0.75);
		background-image: url('/images/20.webp');
		background-position: center center;
		background-blend-mode: overlay;
		padding: 0 0 4rem;
		margin: 0;
	}

	@media screen and (min-width: 1000px) {
		main {
			padding: 2rem 2rem 4rem;
		}
	}
</style>
