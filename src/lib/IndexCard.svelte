<script>
	export let title;
	export let image;
</script>

<div class="card">
	<img src={image} alt="{title} background" />
	<div class="content">
		<h2>{title}</h2>
		<slot />
	</div>
</div>

<style>
	.card {
		position: relative;
		color: #c19d53;
		border: 1px solid #c19d53;
		overflow: hidden;
		margin: 0;
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		top: 0;
		left: 0;
		transition: all 0.3s ease-in-out;
	}

	.content {
		position: relative;
		margin: 0;
		padding: 2rem;
	}

	h2 {
		font-family: 'Elden Base', serif;
		font-size: 2rem;
		text-shadow: 0.3px 0.5px 0.7px hsl(0deg, 0%, 0.66%), 0.8px 1.6px 2px hsl(0deg, 0%, 0.66%),
			2.1px 4.1px 5.2px hsl(0deg, 0%, 0.66%), 5px 10px 12.6px hsl(0deg, 0%, 0.66%);
	}

	.card:hover img,
	.card:focus img {
		scale: 1.125;
	}
</style>
