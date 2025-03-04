"use client";
import React, { useState } from "react";
import CategoryCard from "@/pattern/landing/category-card";
import { useStateContext } from "@/state/provider";
import { useRouter } from "next/navigation";
import SubCategoryCard from "@/pattern/landing/sub-category-card";

interface ExpandedItem{
  index:number,
  engineId:number
}
const Page = () => {
  const router = useRouter();

  const { engines, activeEngineId, activeChatId, setActiveEngine } =
    useStateContext();

  const [expandedCategory, setExpandedCategory] = useState<ExpandedItem | null>(null);

  const handleCategoryClick = (
    engineId: number,
    hasSubcategories: number | undefined,
    index:number
  ) => {
    if (hasSubcategories) {
      setExpandedCategory((re)=> re?.engineId==engineId?null:{index:index,engineId:engineId});
    } else {
      setExpandedCategory(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-nunito font-bold text-2xl">Welcome John,</h1>
        <p className="font-albert text-subHeading text-base">
          Select a category below to proceed with your query...
        </p>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        {engines.flatMap((item, i) => {
          const isExpanded = expandedCategory === item.engineId;

          return [
            <CategoryCard
              key={item.engineId}
              title={item.engineName}
              desc={item.description}
              icon={item.cardIcon}
              engineId={item.engineId}
              onClick={() => {
                if (item.subCategories?.length) {
                  handleCategoryClick(
                    item.engineId,
                    item?.subCategories?.length
                  );
                } else {
                  setActiveEngine(item.engineId);
                  router.push(
                    `/chatbot?engineId=${item.engineId}&chatId=${activeChatId}`
                  );
                }
              }}
            />,
            isExpanded && item.subCategories?.length ? (
              <div
                key={`drop-${item.engineId}`}
                className="col-span-2 flex flex-wrap gap-7 bg-cardDropdown p-6"
              >
                {item.subCategories.map((sub, i) => (
                  <SubCategoryCard key={`sub-${i}`} engineId={sub.id}>
                    {sub.sub}
                  </SubCategoryCard>
                ))}
              </div>
            ) : null,
          ];
        })}
      </div> */}

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
                onClick={() => {
                  if (item.subCategories?.length) {
                    handleCategoryClick(
                      item.engineId,
                      item.subCategories.length,
                      i%2!=0?i:i+1
                    );
                  } else {
                    setActiveEngine(item.engineId);
                    router.push(
                      `/chatbot?engineId=${item.engineId}&chatId=${activeChatId}`
                    );
                  }
                }}
              />

              {isExpanded && engines.find((re)=> re.engineId==expandedCategory.engineId)?.subCategories?.length && i%2!=0 && (
                <div
                  key={`drop-${item.engineId}`}
                  className="col-span-2 flex flex-wrap gap-7 bg-cardDropdown p-6 transition-all ease-in-out duration-400"
                >
                  {engines.find((re)=> re.engineId==expandedCategory.engineId)?.subCategories?.map((sub, i) => (
                    <SubCategoryCard categoryId={item.engineId} key={`sub-${sub.id}`} engineId={sub.id}>
                      {sub.sub}
                    </SubCategoryCard>
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
        {engines.flatMap((item, i, arr) => {
          const isExpanded = expandedCategory === item.engineId;
          const nextIndex = i + 1;

          // Collect the base category card
          const elements = [
            <CategoryCard
              key={`card-${item.engineId}`} // Unique key for each card
              title={item.engineName}
              desc={item.description}
              icon={item.cardIcon}
              engineId={item.engineId}
              onClick={() => {
                if (item.subCategories?.length) {
                  handleCategoryClick(
                    item.engineId,
                    item?.subCategories?.length
                  );
                } else {
                  setActiveEngine(item.engineId);
                  router.push(
                    `/chatbot?engineId=${item.engineId}&chatId=${activeChatId}`
                  );
                }
              }}
            />,
          ];

          if (isExpanded && item.subCategories?.length) {
            const shouldSkipNextIndex = nextIndex % 2 !== 0; // Check if next index is odd

            if (shouldSkipNextIndex && nextIndex < arr.length) {
              // Push the next category first to maintain even index placement
              const nextItem = arr[nextIndex];
              elements.push(
                <CategoryCard
                  key={`card-${nextItem.engineId}`} // Ensure unique key for the next item
                  title={nextItem.engineName}
                  desc={nextItem.description}
                  icon={nextItem.cardIcon}
                  engineId={nextItem.engineId}
                  onClick={() => {
                    if (item.subCategories?.length) {
                      handleCategoryClick(
                        item.engineId,
                        item?.subCategories?.length
                      );
                    } else {
                      setActiveEngine(item.engineId);
                      router.push(
                        `/chatbot?engineId=${item.engineId}&chatId=${activeChatId}`
                      );
                    }
                  }}
                />
              );
            }

            // Push expanded dropdown at the next even index
            elements.push(
              <div
                key={`sub-${item.engineId}`} // Ensure unique key for expanded content
                className="col-span-2 flex flex-wrap gap-7 bg-gray-100 p-4 rounded-md"
              >
                {item.subCategories.map((sub, index) => (
                  <SubCategoryCard
                    key={`sub-${item.engineId}-${index}`}
                    engineId={sub.id}
                  >
                    {sub.sub}
                  </SubCategoryCard>
                ))}
              </div>
            );
          }

          return elements;
        })}
      </div> */}
    </div>
  );
};

export default Page;
