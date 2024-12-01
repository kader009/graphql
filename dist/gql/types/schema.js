export const typeDefs = `#graphql 

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

  type Category{
  id:ID!
  name:String
  }

  type Query{
  product:[Products]
  products(productId: ID!): Products
  categories:[Category]
  category(categoryId:ID!): Category
  }
`;
