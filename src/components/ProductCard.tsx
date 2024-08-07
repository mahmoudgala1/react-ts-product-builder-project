import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const renderColors = product.colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  return (
    <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:mx-0">
      <Image
        imageUrl={product.imageURL}
        alt={product.title}
        className="rounded-md"
      />
      <h3>{product.title}</h3>
      <p>{txtSlicer(product.description)}</p>
      <div className="flex items-center flex-wrap my-4 space-x-2">{renderColors}</div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-indigo-700 text-xl">${product.price}</span>
        <Image
          imageUrl={product.category.imageUrl}
          alt={product.category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>
      <div className="flex justify items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 p-2">EDIT</Button>
        <Button className="bg-red-700 p-2 w-full">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
