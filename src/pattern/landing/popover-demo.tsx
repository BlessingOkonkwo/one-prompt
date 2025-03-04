import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Engine } from "@/types";
import SubCategoryCard from "./sub-category-card";

interface IProps {
  engine: Engine;
}

export function PopoverDemo({ engine }: IProps) {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        // className={`absolute flex items-center gap-2 ${engine.position} cursor-pointer borde rounded-md px-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1`}
      >
        <div
          className={`absolute flex items-center gap-2 ${engine.position} cursor-pointer borde rounded-md px-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1`}
        >
          {engine.position.includes("right") && engine.icon}
          <p className={`text-sm font-semibold mt-2 text-mainCategories`}>
            {engine.engineName}
          </p>
          {engine.position.includes("left") && engine.icon}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[402.5px] flex flex-wrap gap-5">
        {engine?.subCategories?.map((item, i) => (
          <SubCategoryCard key={i} categoryId={item.id} engineId={engine.engineId}>
            {item.sub}
          </SubCategoryCard>
        ))}
      </PopoverContent>
    </Popover>
  );
}
