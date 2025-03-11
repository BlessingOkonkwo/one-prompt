"use client";
import React, { useState } from "react";
import CategoryCard from "@/pattern/landing/category-card";
import { useStateContext } from "@/state/provider";
import { useRouter } from "next/navigation";
import SubCategoryCard from "@/pattern/landing/sub-category-card";

interface ExpandedItem {
  index: number;
  engineId: number;
}
const Page = () => {
  const router = useRouter();

  const { engines, activeEngineId, activeChatId, setActiveEngine } =
    useStateContext();

  const [expandedCategory, setExpandedCategory] = useState<ExpandedItem | null>(
    null
  );

  const handleCategoryClick = (
    engineId: number,
    hasSubcategories: number | undefined,
    index: number
  ) => {
    if (hasSubcategories) {
      setExpandedCategory((re) =>
        re?.engineId == engineId ? null : { index: index, engineId: engineId }
      );
    } else {
      setExpandedCategory(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-[102px]">
      <div className="flex flex-col gap-1">
        <h1 className="font-nunito font-bold text-2xl">Welcome John,</h1>
        <p className="font-albert text-subHeading text-base">
          Select a category below to proceed with your query...
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {engines.map((item, i) => {
          const isExpanded = expandedCategory?.index == i;

          return (
            <React.Fragment key={item.engineId}>
              <CategoryCard
                title={item.engineName}
                desc={item.description}
                icon={item.cardIcon}
                engineId={item.engineId}
                isActive={expandedCategory?.engineId === item.engineId}
                onClick={() => {
                  if (item.subCategories?.length) {
                    handleCategoryClick(
                      item.engineId,
                      item.subCategories.length,
                      i % 2 != 0 ? i : i + 1
                    );
                  } else {
                    setActiveEngine(item.engineId);
                    router.push(
                      `/chatbot?engineId=${item.engineId}&chatId=${activeChatId}`
                    );
                  }
                }}
              />

              {isExpanded &&
                engines.find((re) => re.engineId == expandedCategory.engineId)
                  ?.subCategories?.length &&
                i % 2 != 0 && (
                  <div
                    key={`drop-${item.engineId}`}
                    className="col-span-2 flex flex-wrap gap-7 bg-cardDropdown p-6 transition-all ease-in-out duration-400"
                  >
                    {engines
                      .find((re) => re.engineId == expandedCategory.engineId)
                      ?.subCategories?.map((sub, i) => (
                        <SubCategoryCard
                          categoryId={item.engineId}
                          key={`sub-${sub.id}`}
                          engineId={sub.id}
                        >
                          {sub.sub}
                        </SubCategoryCard>
                      ))}
                  </div>
                )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
