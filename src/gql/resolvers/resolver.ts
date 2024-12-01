import { db } from '../../db.js';

export const resolvers = {
  Query: {
    product: () => db.products,
    products: (parent: any, args: { productId: string }, context: any) => {
      const SingleId = db.products.find((pd) => pd.id === args.productId);
      return SingleId;
    },
  },
};
