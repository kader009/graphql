import { db } from '../../db.js';
export const resolvers = {
    Query: {
        product: () => db.products,
        products: (parent, args, context) => {
            const SingleId = db.products.find((pd) => pd.id === args.productId);
            return SingleId;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const singleCategory = db.categories.find((cat) => cat.id === args.categoryId);
            return singleCategory;
        },
    },
    Products: {
        category: ({ categoryId }, args, context) => {
            return db.categories.find((category) => category.id === categoryId);
        },
        reviews: ({ id }, args, context) => {
            return db.reviews.filter((review) => review.productId === id);
        },
    },
    Category: {
        product: ({ id }, args, context) => {
            return db.products.filter((pro) => pro.categoryId === id);
        },
    },
};
