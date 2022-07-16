export type GQLRequest = {
  url: string;
  method: string;
  headers: Headers;
  json: () => Promise<any>;
};

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}
