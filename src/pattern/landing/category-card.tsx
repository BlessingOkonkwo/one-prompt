"use client";
import React from "react";
import { useStateContext } from "@/state/provider";
import { useRouter } from "next/navigation";

interface IProps {
  children?: React.ReactNode;
  title: string;
  desc: string;
  icon: any;
  engineId: number;
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard = ({
  children,
  title,
  desc,
  icon,
  engineId,
  isActive,
  onClick,
}: IProps) => {
  const router = useRouter();

  const { engines, activeEngineId, activeChatId, setActiveEngine } =
    useStateContext();

  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );

  return (
    <div
      // onClick={() => {
      //   setActiveEngine(engineId);
      //   router.push(`/chatbot?engineId=${engineId}&chatId=${activeChatId}`);
      // }}
      onClick={onClick}
      className={`relative w-[400px] bg-car ${isActive ? 'bg-cardActive' : 'bg-card'} text-cardForeground border border-cardBorder p-7 cursor-pointer`}
    >
      <div className="flex flex-col gap-1 w-[280px]">
        <p className="text-cardTitle font-bold text-lg">{title}</p>
        <p className="font-normal text-xs leading-5">{desc}</p>
      </div>

      <span className="absolute top-0 right-0">{icon}</span>
    </div>
  );
};

export default CategoryCard;
