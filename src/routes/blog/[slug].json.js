import { client } from '$lib/client.js'
import { gql } from '@apollo/client/core/core.cjs.js'


 export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js

	
	const { slug } = params;
	/*
	const url = `https://dog.ceo/api/breed/${slug}/images/random/1`; //https://dog.ceo/api/breed/hound/images/random/3
	const res = await fetch(url);

	if (res.ok) {
		const dogs = await res.json()

		return {
			body: {
				dogs,
			}
		};
	}
	*/
	
	const query = gql`
      query {
		blog_post(lang: "en-au", uid: "fist-blog") {
			blog_title
		}
      }
    `
    const { data } = await client.query({
      query,
    })

    return {
      status: 200,
      body: data,
    }

}