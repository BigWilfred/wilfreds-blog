import { client } from '$lib/client.js'
import { getBlog } from '$lib/query.js'
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
	
	const query = gql(getBlog(slug))

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

/*
# {
#   _allDocuments{
#     edges{
#       node{
#         ... on Blog_post{
#           blog_title
#         }
#         _meta{
#           uid
#         }
#       }
#     }
#   }
# }

{
	allBlog_posts{
    edges{
      node{
        ... on Blog_post{
          blog_title
        }
      }
    }
  }
}

*/