const apiKey = import.meta.env['VITE_API_KEY'];

export const get = async () => {
	console.log(`apiKey?.length: ${apiKey?.length}`);

	const rsp = await fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`
	);

	if (rsp.ok) {
		const body = await rsp.json();

		return {
			status: rsp.status,
			body:
				body.results?.map(({ id, title, overview, backdrop_path }) => ({
					id,
					title,
					overview,
					backdrop_path
				})) ?? []
		};
	} else {
		return {
			status: rsp.status,
			body: rsp.statusText
		};
	}
};
