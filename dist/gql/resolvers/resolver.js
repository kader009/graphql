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
        category: (parent, args, context) => {
            // console.log(parent.categoryId);
            return db.categories.find((category) => category.id === parent.categoryId);
        },
    },
    Category: {
        product: (parent, args, context) => {
            // console.log(parent, args, context);
            return db.products.filter((pro) => pro.categoryId === parent.id);
        },
    },
};
