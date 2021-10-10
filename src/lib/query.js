
//Get all blogs | title , uid, lastPub, firstPub
const allBlogs = `
{
	allBlog_posts{
    edges{
      node{
        ... on Blog_post{
          blog_title
          _meta{
            uid
            lastPublicationDate
            firstPublicationDate
          }
        }
        
      }
    }
  }
}
`

const getBlog =  function(slug){
    return `
        query {
            blog_post(lang: "en-au", uid: "${slug}") {
                blog_title
            }
        }
    `
}

export { allBlogs, getBlog }