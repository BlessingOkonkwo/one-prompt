import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";
import { create, useModal } from "@ebay/nice-modal-react";
import SubCategoryCard from "./sub-category-card";

interface IProps {
  arr: [];
}

const ProductsPopover = create(({ arr }: IProps) => {
  const { resolve, remove, visible } = useModal();
  const handleCloseModal = () => {
    resolve({ resolved: true });
    remove();
  };
  return (
    <Popover modal open={visible} onOpenChange={handleCloseModal}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[402.5px] flex flex-wrap gap-5" sideOffset={5}>
        {arr.map((item, i) => (
          <SubCategoryCard key={i} engineId={item.id}>
            {item.sub}
          </SubCategoryCard>
        ))}
        <PopoverAnchor />
      </PopoverContent>
    </Popover>
  );
});

export default ProductsPopover;
