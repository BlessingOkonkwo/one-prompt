import { useStateContext } from "@/state/provider";
import React, { useEffect, useRef, useState } from "react";
import MessageCard from "./message-card";
import EngineLogo from "../shared/icons/engine";

interface MessageListProps {
  isTyping: boolean;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  sendAiMessage: () => void
}

const MessageList: React.FC<MessageListProps> = ({ isTyping, setIsTyping, sendAiMessage }) => {
  const { engines, activeEngineId, activeChatId } = useStateContext();
  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );
  const activeState = activeEngine?.searchHistory.find(
    (state) => state.id === activeChatId
  );

  const [lastSize, setLastSize] = useState(0);
  const [startingSize, setStartSize] = useState(0);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
   setStartSize(activeState?.messages?.length??0)
  }, [])
  
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const newMessages = activeState?.messages?.length??0;
    if ((activeState?.messages?.length ?? 0) > lastSize) {
      const previousSize = lastSize;
      setLastSize(newMessages);

      if (previousSize != 0 || (newMessages==1 && startingSize==0)) {
        const lastMessage = activeState?.messages?.at(-1);
        if (lastMessage?.isAi != true) {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            sendAiMessage();
          }, 2000);
        }
      }
    }
  }, [activeState?.messages]);

  if (!activeState) {
    return <div>Please select a chat session to view messages.</div>;
  }

  return (
    <div className="flex-grow overflow-y-scroll overflow-x-hidden">
      {activeState.messages.length === 0 ? (
        <div className="w-full place-items-center mt-40 flex flex-col">
          <EngineLogo className="w-20 h-20 animate-pulse" />
          <p className="text-2xl font-medium mt-4">No messages yet!</p>
        </div>
      ) : (
        <div className="h-full flex flex-col gap-5 justify-en">
          {activeState.messages.map((msg) => (
            <MessageCard key={msg.id} isAi={msg.isAi} text={msg.message} />
          ))}
          {isTyping == true && <Typing />}

          <div ref={endOfMessagesRef} />
        </div>
      )}
    </div>
  );
};

const Typing = () => (
  <div className="flex gap-x-2 place-items-center mt-6">
    <EngineLogo />
    <div className="typing">
      <div className="typing__dot"></div>
      <div className="typing__dot"></div>
      <div className="typing__dot"></div>
    </div>
  </div>
);

export default MessageList;
