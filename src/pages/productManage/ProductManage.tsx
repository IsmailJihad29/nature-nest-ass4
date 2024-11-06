import AddProductModal from "@/components/AddProductModal";
import EditProductModal from "@/components/EditProductModal";
import { Button } from "@/components/ui/button";
import {
  useDeleteTodosMutation,
  useGetProductsQuery,
} from "@/redux/api/productApi";
import { TProduct } from "@/utils/interface";
import { useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";
import Swal from "sweetalert2"; // Import SweetAlert

const ProductManage = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery('');
  const [deleteProduct] = useDeleteTodosMutation();

  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditProduct = (product: TProduct) => {
    setSelectedProduct(product); // Set the selected product to edit
    setIsEditModalOpen(true); // Open the modal
  };

  // Delete product with confirmation
  const handleDeleteProduct = async (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(productId);
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the product.",
            icon: "error",
          });
        }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
        <div className="flex items-center space-x-2 text-green-700">
          <div className="w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-2xl font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-2xl text-red-500">
        Error loading data
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-700 mb-8 text-center">
        Manage Products
      </h1>
      <AddProductModal />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Image</th>
              <th className="px-4 py-2 border-b">Title</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((product: TProduct) => (
              <tr key={product._id} className=" text-center">
                <td className="px-4 py-2 border-b">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="px-4 py-2 border-b">{product.title}</td>
                <td className="px-4 py-2 border-b">${product.price}</td>
                <td className="px-4 py-2 border-b ">{product.category}</td>
                <td className="px-4 py-2 border-b  space-x-2 ">
                  <Button
                  onClick={() => handleEditProduct(product)}
                    type="button"
                    className="mb-4 bg-green-600 text-white text-xl font-semibold"
                  >
                    <MdEditSquare className="size-5" />
                  </Button>

                  <Button
                    onClick={() => handleDeleteProduct(product._id)} // Trigger delete with confirmation
                    className="bg-red-600 text-white"
                  >
                    <MdDelete className="size-5" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {/* Edit Product Modal */}
       {selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
        />
      )}
    </div>
  );
};

export default ProductManage;
