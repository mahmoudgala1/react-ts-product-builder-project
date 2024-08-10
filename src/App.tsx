import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colorsList, formInputsList, ProductList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { productValidation } from "./validations";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { ICategory, IProduct } from "./interfaces";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const defaultProductObj: IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    categories[0]
  );

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsEditOpen(false);
  const openEditModal = () => setIsEditOpen(true);
  const closeRemoveModal = () => setIsRemoveOpen(false);
  const openRemoveModal = () => setIsRemoveOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const renderProductList = products.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      productToEditIndex={idx}
      setProductToEditIndex={setProductToEditIndex}
      setTempColors={setTempColors}
      openRemoveModal={openRemoveModal}
    />
  ));

  const renderFormInputsList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));

  const renderColors = colorsList.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
        setErrors({ ...errors, colors: "" });
      }}
    />
  ));

  const submitHander = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const colors = tempColors;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors,
    });
    const hasErroeMsg =
      Object.values(errors).some((value) => value.length === 0) &&
      Object.values(errors).every((value) => value.length === 0);
    if (!hasErroeMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColors([]);
    closeModal();
  };

  const submitEditHander = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price, colors } = productToEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors,
    });
    const hasErroeMsg =
      Object.values(errors).some((value) => value.length === 0) &&
      Object.values(errors).every((value) => value.length === 0);
    if (!hasErroeMsg) {
      setErrors(errors);
      return;
    }
    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempColors,
    };
    setProducts(updatedProducts);
    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
  };

  const onCancel = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setProduct(defaultProductObj);
    setTempColors([]);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    closeModal();
  };

  const onEditCancel = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setProductToEdit(defaultProductObj);
    setTempColors([]);
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
      colors: "",
    });
    closeEditModal();
  };

  const removeProductHandler = () => {
    const filterd = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filterd);
    closeRemoveModal();
    toast("Product has been deleted", {
      icon: "👏",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });
  };

  return (
    <main className="container">
      <Button onClick={openModal} className="bg-indigo-700 p-3 w-full">
        Add
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={"ADD A NEW PRODUCT"}
      >
        <form className="space-y-3" onSubmit={submitHander}>
          {renderFormInputsList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center flex-wrap space-x-1">
            {renderColors}
          </div>
          <div className="flex flex-wrap">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <ErrorMessage message={errors["colors"]} />
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800 p-2 w-full">
              Submit
            </Button>
            <Button
              onClick={onCancel}
              className="bg-gray-400 hover:bg-gray-500 p-2 w-full"
            >
              Cansel
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={isEditOpen}
        closeModal={closeEditModal}
        title={"EDIT THIS PRODUCT"}
      >
        <form className="space-y-3" onSubmit={submitEditHander}>
          {formInputsList.map((input) => (
            <div key={input.id} className="flex flex-col">
              <label
                htmlFor={input.id}
                className="mb-[2px] text-sm font-medium text-gray-700"
              >
                {input.label}
              </label>
              <Input
                type={input.type}
                id={input.id}
                name={input.name}
                value={productToEdit[input.name]}
                onChange={onChangeEditHandler}
              />
              <ErrorMessage message={errors[input.name]} />
            </div>
          ))}
          <Select
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />
          <div className="flex items-center flex-wrap space-x-1">
            {renderColors}
          </div>
          <div className="flex flex-wrap">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <ErrorMessage message={errors["colors"]} />
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800 p-2 w-full">
              Submit
            </Button>
            <Button
              onClick={onEditCancel}
              className="bg-gray-400 hover:bg-gray-500 p-2 w-full"
            >
              Cansel
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={isRemoveOpen}
        closeModal={closeRemoveModal}
        title={"EDIT THIS PRODUCT"}
      >
        <div className="flex items-center space-x-3">
          <Button onClick={removeProductHandler} className="bg-indigo-700 hover:bg-indigo-800 p-2 w-full">
            Yes, Remove it
          </Button>
          <Button
            // onClick={}
            className="bg-gray-400 hover:bg-gray-500 p-2 w-full"
          >
            Cansel
          </Button>
        </div>
      </Modal>
      <Toaster />
    </main>
  );
}

export default App;
