<script>
	import maurice from './maurice.de.beijer.jpg';
	import mvpBanner from './mvp-banner-fb.jpg';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main class="row">
	<div class="column g-3">
		<h2>Maurice de Beijer</h2>
		<img src={maurice} alt="Maurice de Beijer" width="330" />
		<p class="mt-4">The Problem Solver</p>
		<p>Freelance developer/instructor</p>
		<p>Microsoft MVP</p>
		<img src={mvpBanner} alt="Microsoft MVP" width="330" />
		<h3 class="mt-4">Contact</h3>

		<p>www: <a href="http://theproblemsolver.nl/">http://theproblemsolver.nl/</a></p>
		<p>email: <a href="mailto:maurice.de.beijer@gmail.com">maurice.de.beijer@gmail.com</a></p>
	</div>
</main>
