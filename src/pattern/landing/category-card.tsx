import React from "react";

interface IProps {
  children?: React.ReactNode;
  title: string;
  desc: string;
  icon: any;
}

const CategoryCard = ({ children, title, desc, icon }: IProps) => {
  return (
    <div className="relative w-[400px] bg-card text-cardForeground border border-cardBorder p-7 cursor-pointer">
      <div className="flex flex-col gap-1 w-[280px]">
        <p className="text-cardTitle font-bold text-lg">{title}</p>
        <p className="font-normal text-xs">{desc}</p>
      </div>

      <span className="absolute top-0 right-0">{icon}</span>
    </div>
  );
};

export default CategoryCard;
