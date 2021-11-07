<script context="module">
	export const load = async ({ fetch }) => {
		const rsp = await fetch('/movies.json');
		if (rsp.ok) {
			const data = await rsp.json();
			return {
				props: {
					movies: data
				}
			};
		}

		throw new Error(`Failed to load data: ${rsp.statusText}`);
	};
</script>

<script>
	import MovieCard from '$lib/MovieCard.svelte';

	export let movies = [
		{
			id: 278,
			title: 'The Shawshank Redemption',
			overview: 'A good movie',
			backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg'
		},
		{
			id: 680,
			title: 'Pulp Fiction',
			overview: 'Another good movie',
			backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg'
		}
	];
</script>

<svelte:head>
	<title>Movies</title>
</svelte:head>

<main class="row">
	<h2>Movies</h2>

	<div class="card-group">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</main>
