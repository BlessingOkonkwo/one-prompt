import { useStateContext } from "@/state/provider";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  children: React.ReactNode;
  engineId: number;
  categoryId: number;
  // onClick: () => void;
}

const SubCategoryCard = ({ children, engineId,categoryId }: IProps) => {
  const router = useRouter();
  const { setActiveEngine, activeChatId } = useStateContext();
  return (
    <div
      onClick={() => {
        setActiveEngine(engineId,categoryId);
        router.push(`/chatbot?engineId=${engineId}&chatId=${activeChatId}`);
      }}

      // setActiveEngine(item.engineId);
      //               router.push(
      //                 `/chatbot?engineId=${item.engineId}&chatId=${activeChatId}`
      //               );
      className="bg-subCategory border border-subCategoryBorder p- flex items-center flex-col justify-center rounded w-[171px] h-[80px] cursor-pointer"
    >
      {children}
    </div>
  );
};

export default SubCategoryCard;
