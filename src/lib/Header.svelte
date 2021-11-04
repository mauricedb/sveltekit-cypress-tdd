<script>
	import { page } from '$app/stores';

	const navLinks = [
		{ title: 'Home', path: '/' },
		{ title: 'Movies', path: '/movies' },
		{ title: 'About', path: '/about' }
	];
</script>

<header>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">SvelteKit &amp; Cypress</a>
			<div class="collapse navbar-collapse">
				<ul class="navbar-nav">
					{#each navLinks as link}
						<li class="nav-item">
							<a href={link.path} class="nav-link" class:active={$page.path === link.path}>
								{link.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</nav>
</header>
