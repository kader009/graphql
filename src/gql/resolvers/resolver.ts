import { db } from '../../db.js';

export const resolvers = {
  Query: {
    product: () => db.products,
    products: (parent: any, args: { productId: string }, context: any) => {
      const SingleId = db.products.find((pd) => pd.id === args.productId);
      return SingleId;
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      const singleCategory = db.categories.find(
        (cat) => cat.id === args.categoryId
      );
      return singleCategory;
    },
  },

  Products: {
    category: ({ categoryId }, args:any, context: any) => {
      return db.categories.find((category) => category.id === categoryId);
    },

    reviews: ({ id }, args:any, context:any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },

  Category: {
    product: ({ id }, args:any, context:any) => {
      return db.products.filter((pro) => pro.categoryId === id);
    },
  },
};
