import products from "./api/products.ts";
import { Product } from "./types.ts";

type argsTypeQuery = {
  price?: number;
  name?: string;
};

type argsTypeAdd = {
  name: string;
  price: number;
  description: string;
};
type argsTypeUpdate = {
  id: string;
  price: number;
};

const resolvers = {
  Query: {
    hello: () => `Hello World!`,
    allProducts: (_root: unknown, args: argsTypeQuery): Product[] => {
      if (args.price) {
        return products.filter((product) => product.price <= args.price!);
      }
      if (args.name) {
        return products.filter((product) => product.name.includes(args.name!));
      }
      return products;
    },
    findProduct: (_root: unknown, args: { id: string }) => {
      return products.find((product) => product.id === args.id);
    },
  },
  Mutation: {
    addProduct: (_root: unknown, args: argsTypeAdd): Product => {
      const newProduct = {
        id: crypto.randomUUID(),
        name: args.name,
        price: args.price,
        description: args.description,
      };
      try {
        products.push(newProduct);
      } catch (e) {
        throw new Error(e.message);
      }
      return newProduct;
    },
    updatePrice: (_root: unknown, args: argsTypeUpdate): Product => {
      const newPrice = args.price;
      const product = products.find((product) => product.id === args.id);
      if (!product) {
        throw new Error(`Product with id ${args.id} not found`);
      }
      try {
        product.price = newPrice;
        return product;
      } catch (e) {
        throw new Error(e.message);
      }
    },
    deleteProduct: (_root: unknown, args: { id: string }): Product[] => {
      const product = products.find((product) => product.id === args.id);
      if (!product) {
        throw new Error(`Product with id ${args.id} not found`);
      }
      try {
        products.splice(products.indexOf(product), 1);
        return products;
      } catch (e) {
        throw new Error(e.message);
      }
    },
  },
};

export default resolvers;
