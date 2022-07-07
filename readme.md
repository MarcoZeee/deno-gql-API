# GraphQL API with Deno QuickStart

> This is a GQL API using Deno, Oak and GraphQL

## Run

```
# This project uses Denon
deno run server.ts
```

## Operations

```
Query

 - allProducts(price: Float, name: String): fetch all products,
 
with conditional filters such as price(items lower than this price) 

and name(items with this name)


 - findProduct(id: Int!): fetch a product by id
```

```
Mutation

 - addProduct(name: String!, price: Float!, description: String!): add a new product

 - updatePrice: update the price of a certain product

 - deleteProduct(id: Int!): delete a product by id

```
