import { PrismicLink } from 'apollo-link-prismic'
import { ApolloClient } from '@apollo/client/core/core.cjs.js'
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js'

const uri = `https://wilfreds-blog.prismic.io/graphql`

//https://github.com/umutahmet/sveltekit-tailwindcss-prismic-graphql-vercel

export const client = new ApolloClient({
  link: PrismicLink({ uri }),
  cache: new InMemoryCache(),
})