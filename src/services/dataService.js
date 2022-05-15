import axios from 'axios';

let mockCatalog = [
  {
    _id: "1",
    price: 10,
    stock: '',
    title: "Americano",
    category: "Coffe",
    image: "americano.jpg"
  },
  {
    _id: "3",
    price: 30,
    stock: '',
    title: "Chocolate",
    category: "Dessert",
    image: "chocolate.jpg"
  },
  {
    _id: "4",
    price: 40,
    stock: '',
    title: "Flat White",
    category: "Coffe",
    image: "flat-white.jpg"
  },
  {
    _id: "5",
    price: 50,
    stock: '',
    title: "Latte",
    category: "Coffe",
    image: "latte.jpg"
  },
  {
    _id: "6",
    price: 60,
    stock: '',
    title: "Mocha",
    category: "Dessert",
    image: "mocha.jpg"
  },
  {
    _id: "7",
    price: 60,
    stock: '',
    title: "Long Black",
    category: "Dessert",
    image: "long-black.jpg"
  },
]

class DataService {

  async getCatalog() {
    let response = await axios.get("http://127.0.0.1:5000/api/catalog")

    return response.data

    // get the catalog from the server
    //and return the list of products

    // return mockCatalog;
  }

  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:5000/api/couponCodes")
    return response.data
  }

  //mehtod that receive a coupon object and send it on a post to the server
  async saveCoupon(coupon){
    let response = await axios.post("http://127.0.0.1:5000/api/couponCodes", coupon)
    return response.data
  }

  async getProducts() {
    let response = await axios.get("http://127.0.0.1:5000/api/catalog")
    return response.data
  }

  async saveProduct(product) {
    let response = await axios.post("http://127.0.0.1:5000/api/catalog", product)
    return response.data
  }

};

export default DataService;