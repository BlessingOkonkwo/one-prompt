import React from "react";
import EngineLogo from "@/pattern/shared/icons/engine";

interface IProps {
  text: string;
  isAi: boolean;
}

const MessageCard = ({ text, isAi }: IProps) => {
  return (
    <>
      {!isAi ? (
        <div className="bg-messageCard text-messageCardForeground text-base rounded-2xl rounded-br-none py-3 px-[18px] max-w-[536px] self-end">
          {text}
        </div>
      ) : (
        <div className="flex gap-3 bg-aiMessageCard text-aiMessageCardForeground text-base">
          <EngineLogo />
          <div>{text}</div>
        </div>
      )}
    </>
  );
};

export default MessageCard;
