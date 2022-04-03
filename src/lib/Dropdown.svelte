<script>
	export let heading;
</script>

<div class="dropdown">
	<button>{heading}</button>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.dropdown {
		margin: 0;
		display: inline-flex;
		overflow: hidden;
	}

	.dropdown:hover .content,
	.dropdown:focus .content {
		display: flex;
	}

	button {
		color: #c19d53;
		background: transparent;
		border: none;
		font-family: 'Elden Base', serif;
		font-size: 1rem;
		text-transform: uppercase;
		margin: 0;
	}

	button:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.content {
		display: none;
		flex-wrap: wrap;
		position: absolute;
		z-index: 1;
		background-color: #181818;
		background-image: url('/images/black-paper.webp');
		background-blend-mode: color-burn;
		top: 100%;
		left: 0;
		width: 100%;
		margin: 0;
		border-bottom: 1px solid #c19d53;
	}

	.content :global(section) {
		margin: 0;
		padding: 1em 2em;
	}
</style>
