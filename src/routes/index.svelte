<script>
	import IndexCard from '$lib/IndexCard.svelte';
</script>

<svelte:head>
	<title>ELDEN RING | White Wish Wiki</title>
</svelte:head>

<div>
	<h2>Latest Official News :</h2>
	<a class="latest" href="https://en.bandainamcoent.eu/elden-ring/news/elden-ring-patch-notes-1032"
		>ELDEN RING: Patch Notes 1.03.2</a
	>
</div>

<div>
	<IndexCard title="Characters" image="images/06.webp" />
	<IndexCard title="Equipment" image="images/03.webp" />
	<IndexCard title="The Lands Between" image="images/01.webp" />
	<IndexCard title="Guides" image="images/30.webp" />
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		align-items: center;
	}

	h2 {
		font-size: 1rem;
	}

	.latest {
		margin: 0;
		font-weight: 700;
	}
</style>
