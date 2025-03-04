// components/MessageList.tsx
// import ChevronBackIcon from "@/pattern/shared/icons/chevron-back-icon";
import { useStateContext } from "@/state/provider";
// import Link from "next/link";
import React from "react";
import MessageCard from "./message-card";

const MessageList = () => {
  const { engines, activeEngineId, activeChatId } = useStateContext();
  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );
  const activeState = activeEngine?.searchHistory.find(
    (state) => state.id === activeChatId
  );

  if (!activeState) {
    return <div>Please select a chat session to view messages.</div>;
  }

  return (
    <div className="h-full">
      {activeState.messages.length === 0 ? (
        <p>No messages yet!</p>
      ) : (
        <div className="h-full flex flex-col gap-5 justify-en">
          {activeState.messages.map((msg) => (
            <MessageCard key={msg.id} isAi={msg.isAi} text={msg.message} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageList;
