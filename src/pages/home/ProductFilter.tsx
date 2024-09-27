import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProductFilterProps = {
  category: string;
  setCategory: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ category, setCategory }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          className="bg-green-700 text-xl font-semibold"
        >
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
          <DropdownMenuRadioItem value="Indoor Plants">
            Indoor Plants
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medicinal Plants">
          Medicinal Plants
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Herbs">
          Herbs
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Flowering Plants">
          Flowering Plants
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Succulents">
          Succulents
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Climbers">Climbers</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Fruit Plants">Fruit Plants</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductFilter;
