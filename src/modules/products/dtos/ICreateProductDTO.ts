export default interface ICreateProductDTO {
  name: string;
  cod: number;
  price: number;
  quantity?: number;
  description: string;
}
