import { db } from '../../db.js';
export const resolvers = {
    Query: {
        product: () => db.products,
        products: (parent, args, context) => {
            const SingleId = db.products.find((pd) => pd.id === args.productId);
            return SingleId;
        },
    },
};
