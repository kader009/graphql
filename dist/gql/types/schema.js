export const typeDefs = `#graphql

  type Products{ 
    id: ID!
    name: String
    image: String
    description: String
    price: Float
    quantity: Int,
    onStock: Boolean,
    category: Category
  }

  type Category{
  id:ID!
  name:String
  product:[Products]
  }

  type Review{
  id:ID!
  review:String
  rating:Int
  date:String
  productId:String
  }

  type Query{
  product:[Products]
  products(productId: ID!): Products
  categories:[Category]
  category(categoryId:ID!): Category
  }
`;
