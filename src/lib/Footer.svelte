<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let displayLicense = true;

	onMount(() =>
		setTimeout(() => {
			displayLicense = false;
		}, 5000)
	);
</script>

{#if displayLicense}
	<footer out:fade>
		<div class="license">
			<img
				width="80px"
				height="15px"
				alt="Creative Commons Licence"
				src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
			/>
			<p>
				Unless stated otherwise, contents of White Wish Wiki are licensed under a
				<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
					>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a
				>. This is a fan-made website and is unaffiliated with Bandai Namco or From Software.
			</p>
		</div>
	</footer>
{/if}

<style>
	footer {
		display: flex;
		background-color: #181818;
		background-image: url('/images/black-paper.webp');
		background-blend-mode: color-burn;
		font-size: 0.75rem;
		margin-top: auto;
		border-top: 1px solid #c19d53;
		padding: 0.5rem 2rem;
		position: sticky;
		bottom: 0;
	}

	.license {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	p {
		margin: 0;
	}

	a {
		color: #c19d53;
	}

	@media screen and (min-width: 800px) {
		.license {
			flex-direction: row;
			gap: 1rem;
		}
	}
</style>
