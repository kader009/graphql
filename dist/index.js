import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { db } from './db.js';
const typeDefs = `#graphql

  type Products{ 
    id: ID!
    name: String
    image: String
    description: String
    price: Float
    quantity: Int,
    onStock: Boolean,
    category: String
  }

  type Query{
  product:[Products]
  products(productId: ID!): Products
  }
`;
const resolvers = {
    Query: {
        product: () => db.products,
        products: (args) => {
            console.log(args);
        },
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
