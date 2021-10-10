import { client } from '$lib/client.js'
import { allBlogs } from '$lib/query.js'
import { gql } from '@apollo/client/core/core.cjs.js'


export async function get({ params }){
    const query = gql(allBlogs)

	try{
		const { data } = await client.query({
			query,
		  })
	  
		  return {
			status: 200,
			body: data,
		  }
	}catch(e){
		return new Error({message: "FUCK SHIT FUCK"})
	}
}