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
        <div className="bg-messageCard max-w-[60%] text-messageCardForeground text-base rounded-2xl  !break-words text-ellipsis rounded-br-none py-3 px-[18px] max-w-[50vw self-end">
          {text}
        </div>
      ) : (
        <div className="flex gap-3 bg-aiMessageCard max-w-[60%] text-aiMessageCardForeground w-[50vw] !break-words text-ellipsis text-base ">
          <EngineLogo />
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
    </>
  );
};

export default MessageCard;
