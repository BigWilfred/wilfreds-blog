
<script context="module">

	export async function load({ page, fetch, session, stuff }) {
		const url = `/blog.json`;
		const res = await fetch(url);

		if (res.ok) {
			const server_data = await res.json()

			//must return props here that get passed through to static page
			return {
				props: {
					blogs: server_data.allBlog_posts, //set dog here
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}: ${res.message}`)
		}; 
	}
</script>

<script>
	import Blog from "../../components/BlogItem.svelte";

    export let blogs
	

</script>

<h1>Blog</h1>

{#each blogs.edges as blog}
	<Blog blog={blog.node} title={blog.node.blog_title[0].text}/>
{/each}