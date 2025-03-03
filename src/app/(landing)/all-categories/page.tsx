import { categoriesList } from "@/constants";
import CategoryCard from "@/pattern/landing/category-card";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-nunito font-bold text-2xl">Welcome John,</h1>
        <p className="font-albert text-subHeading text-base">
          Select a category below to proceed with your query...
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categoriesList.map((item, i) => (
          <CategoryCard
            key={i}
            title={item.title}
            desc={item.description}
            icon={item.cardIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
