<script>
    export let slug = "Glenn"
    export let user_url = "tet"
    export let dog //define dog here
    
</script>

<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, stuff }) {
		const url = `https://dog.ceo/api/breeds/image/random`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					dog: await res.json() //set dog here
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<h1>{user_url} | BLOG CONTENT: {slug}</h1>
<img src="{dog.message}" alt="">