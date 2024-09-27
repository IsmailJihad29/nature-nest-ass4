import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useAddProductsMutation } from "@/redux/api/productApi";
import Swal from "sweetalert2";

const AddProductModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");

  const [addProduct] = useAddProductsMutation();

  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const products = {
      title,
      description,
      price: parseFloat(price),   // Convert to number
      quantity: parseInt(quantity), // Convert to number
      image,
      rating: parseFloat(rating),   // Convert to number
      category,
    };

    try {
      await addProduct(products);
      // Close modal when submission is successful
      setIsModalOpen(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Edited Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.log('Error adding product:', error);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          className="mb-4 bg-green-600 text-white text-xl font-semibold"
        >
          Add Product
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              Add your Product With These Fields
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* //*  title */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>
            {/* //* description */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            {/*//* price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                type="number"
                className="col-span-3"
              />
            </div>
            {/* //* Quantity */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                onBlur={(e) => setQuantity(e.target.value)}
                id="quantity"
                type="number"
                className="col-span-3"
              />
            </div>
            {/* //*image */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                onBlur={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>
            {/* //* rating */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                type="number"
                onBlur={(e) => setRating(e.target.value)}
                id="rating"
                className="col-span-3"
              />
            </div>

            {/* //* Category */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Category</Label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Your Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="indoor plants">Indoor Plants</SelectItem>
                    <SelectItem value="medicinal plants">
                      Medicinal Plants
                    </SelectItem>
                    <SelectItem value="herbs">Herbs</SelectItem>
                    <SelectItem value="flowering plants">
                      Flowering Plants
                    </SelectItem>
                    <SelectItem value="succulents">Succulents</SelectItem>
                    <SelectItem value="climbers">Climbers</SelectItem>
                    <SelectItem value="fruit plants">Fruit Plants</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/*//? submit button */}
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
