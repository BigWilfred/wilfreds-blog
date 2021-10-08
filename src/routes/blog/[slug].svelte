<script>
import { page } from '$app/stores';

    export let server_query //define dog here
	console.log(server_query)
</script>

<script context="module">

	export async function load({ page, fetch, session, stuff }) {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			const server_data = await res.json()
			//must return props here that get passed through to static page
			return {
				props: {
					server_query: server_data, //set dog here
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}: ${res.message}`)
		};
	}
</script>

<h1>{server_query.blog_post.blog_title[0].text}</h1>


<style lang="scss">
	img{
		width: 300px;
		height:auto;
	}
</style>