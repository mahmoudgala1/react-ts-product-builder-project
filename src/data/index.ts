import { v4 as uuid } from "uuid";
import { IFormInput, IProduct } from "../interfaces";

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageURL:
      "https://th.bing.com/th?id=OIP.w8jG49dmW_kuLi82ygGfGQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    price: "19.99",
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category 1",
      imageUrl:
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
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category 2",
      imageUrl:
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
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category 3",
      imageUrl:
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
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category 1",
      imageUrl:
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
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category 2",
      imageUrl:
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
    colors: ["#FF0000", "#00FF00", "#0000FF"],
    category: {
      name: "Category 3",
      imageUrl:
        "https://th.bing.com/th?id=OIP.9TR1MpjGeOCnG9cwfOUDbwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
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
export const colors: string[] = [
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



