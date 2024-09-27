import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import { TProduct } from "@/utils/interface";
import { useEditProductsMutation } from "@/redux/api/productApi";
import Swal from "sweetalert2";

interface EditProductModalProps {
  product: TProduct; // Product to edit
  isOpen: boolean; // Modal open state
  setIsOpen: (open: boolean) => void; // Function to set modal state
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  isOpen,
  setIsOpen,
}) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price.toString());
  const [quantity, setQuantity] = useState(product.quantity.toString());
  const [image, setImage] = useState(product.image);
  const [rating, setRating] = useState(product.rating.toString());
  const [category, setCategory] = useState(product.category);

  const [editProduct] = useEditProductsMutation();

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price.toString());
      setQuantity(product.quantity.toString());
      setImage(product.image);
      setRating(product.rating.toString());
      setCategory(product.category);
    }
  }, [product]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = product._id;
    const updatedProduct = {
      title,
      description,
      price: parseFloat(price), // Convert to number
      quantity: parseInt(quantity), // Convert to number
      image,
      rating: parseFloat(rating), // Convert to number
      category,
    };

    try {
      await editProduct({ id, updatedProduct });
      setIsOpen(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>Edit your product details</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Title */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                className="col-span-3"
              />
            </div>

            {/* Description */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>

            {/* Price */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                type="number"
                className="col-span-3"
              />
            </div>

            {/* Quantity */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                id="quantity"
                type="number"
                className="col-span-3"
              />
            </div>

            {/* Image */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>

            {/* Rating */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rating
              </Label>
              <Input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="rating"
                type="number"
                className="col-span-3"
              />
            </div>

            {/* Category */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Category</Label>
              <Select
                value={category}
                onValueChange={(value) => setCategory(value)}
              >
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

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
