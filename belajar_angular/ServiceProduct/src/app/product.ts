export class Product {
  constructor(productID:number, name: String, price: number){
    this.productID = productID
    this.name = name
    this.price = price
  }

  productID: number
  name: String
  price: number
}
