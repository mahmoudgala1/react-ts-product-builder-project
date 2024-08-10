import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.w8jG49dmW_kuLi82ygGfGQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "19.99",
    colors: ["#84d2c5", "#13005a", "#a31acb", "#ff6e31", "#3c2a21", "#6c4ab6"],
    category: {
      name: "Category 1",
      imageURL:
        "https://th.bing.com/th?id=OIP.w8jG49dmW_kuLi82ygGfGQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.0H6a4tOc6DItsEWJIU3sEQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "29.99",
    colors: ["#a31acb", "#ff6e31", "#3c2a21"],
    category: {
      name: "Category 2",
      imageURL:
        "https://th.bing.com/th?id=OIP.0H6a4tOc6DItsEWJIU3sEQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.9TR1MpjGeOCnG9cwfOUDbwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "39.99",
    colors: ["#84d2c5", "#13005a", "#a31acb", "#ff6e31", "#3c2a21", "#6c4ab6"],
    category: {
      name: "Category 3",
      imageURL:
        "https://th.bing.com/th?id=OIP.9TR1MpjGeOCnG9cwfOUDbwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  },
  {
    id: uuid(),
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.w8jG49dmW_kuLi82ygGfGQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "19.99",
    colors: ["#6c4ab6", "#cb1cbd", "#000000", "#820000", "#ff0032"],
    category: {
      name: "Category 1",
      imageURL:
        "https://th.bing.com/th?id=OIP.w8jG49dmW_kuLi82ygGfGQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.0H6a4tOc6DItsEWJIU3sEQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "29.99",
    colors: ["#13005a", "#a31acb", "#ff6e31"],
    category: {
      name: "Category 2",
      imageURL:
        "https://th.bing.com/th?id=OIP.0H6a4tOc6DItsEWJIU3sEQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.9TR1MpjGeOCnG9cwfOUDbwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "39.99",
    colors: ["#a855f7", "#2563eb", "#84d2c5"],
    category: {
      name: "Category 3",
      imageURL:
        "https://th.bing.com/th?id=OIP.9TR1MpjGeOCnG9cwfOUDbwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
  },
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Nike",
    imageURL:
      "https://th.bing.com/th/id/OIP.GCsYyF5vzXyknaYnq0HzTAHaFk?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageURL:
      "https://th.bing.com/th?id=OIP.YNlEKwqonnUnW-yKqgYDFAHaJC&w=226&h=276&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
      "https://th.bing.com/th?id=OIP.hF7QTj2zZqAf4Mu0SpB6MgHaE_&w=304&h=205&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: uuid(),
    name: "PC Desktop",
    imageURL:
      "https://th.bing.com/th?id=OIP.WqeKFk9RkJ7fFHQpMTKzFwHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colorsList: string[] = [
  "#a855f7",
  "#2563eb",
  "#84d2c5",
  "#13005a",
  "#a31acb",
  "#ff6e31",
  "#3c2a21",
  "#6c4ab6",
  "#cb1cbd",
  "#000000",
  "#820000",
  "#ff0032",
];
