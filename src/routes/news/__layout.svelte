<article>
	<slot />
</article>

<style>
	article {
		max-width: calc(66ch + 4rem);
		padding: 2rem;
		margin: 0 auto;
		background-color: rgba(0, 0, 0, 0.625);
	}

	article :global(h1),
	article :global(h2) {
		font-family: 'Elden Base', serif;
		color: #c19d53;
		line-height: 1;
	}

	article :global(h1) {
		font-size: 2.75rem;
	}

	article :global(h2) {
		font-size: 1.75rem;
	}

	@media screen and (min-width: 1000px) {
		article {
			border-left: 1px solid #c19d53;
		}
	}
</style>
