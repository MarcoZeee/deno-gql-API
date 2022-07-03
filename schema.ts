import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts'



const typeDefs = gql`
  type Query {
    hello: String
    allProducts(name: String, price: Float): [Product]
    findProduct(id: ID!): Product
  }

  type Product {
    id: ID
    name: String
    price: Float
    description: String
  }

  type Mutation {
    addProduct(
        name: String!
        price: Float!
        description: String
    ): Product
    updatePrice(
        id: ID!
        price: Float
    ): Product
    deleteProduct(
        id: ID!
    ): [Product]
  }

`

export default typeDefs;