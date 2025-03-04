import { useStateContext } from "@/state/provider";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  children: React.ReactNode;
  engineId: number;
  // onClick: () => void;
}

const SubCategoryCard = ({ children, engineId }: IProps) => {
  const router = useRouter();
  const { setActiveEngine, activeChatId } = useStateContext();
  return (
    <div
      onClick={() => {
        console.log("clicked me!!!");
        setActiveEngine(engineId);
        router.push(`/chatbot?engineId=${engineId}&chatId=${activeChatId}`);
      }}
      className="bg-subCategory border border-subCategoryBorder p- flex items-center flex-col justify-center rounded w-[171px] h-[80px] cursor-pointer"
    >
      {children}
    </div>
  );
};

export default SubCategoryCard;
