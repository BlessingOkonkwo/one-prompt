"use client";
import MessageList from "@/pattern/chat/messagelist";
import AddMessageField from "@/pattern/chat/textfield";
import ChevronBackIcon from "@/pattern/shared/icons/chevron-back-icon";
import Sidebar from "@/pattern/shared/sidebar";
import { useStateContext } from "@/state/provider";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const searchParams = useSearchParams();

  const chatId = searchParams.get("chatId");
  const engineId = searchParams.get("engineId");

  const {
    engines,
    activeEngineId,
    activeChatId,
    addAiMessage,
    setActiveChat,
    setActiveEngine,
  } = useStateContext();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (chatId != null && engineId != null) {
      setActiveChat(chatId);
      setActiveEngine(parseInt(engineId));
    }
  }, []);

  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );

  const activeState = activeEngine?.searchHistory.find(
    (state) => state.id === activeChatId
  );

  if (!activeState) {
    return <div className="pt-[102px]">Please select a chat session to view messages.</div>;
  }

  return (
    <div className="flex w-screen h-full ">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className="grow px-4 pt-[102px] flex flex-col gap-10 ">
        <Link
          className="flex items-center gap-2 text-prompt mt-[22px] ml-[32px] hover:bg-iconHover w-fit p-1 rounded"
          href={`/`}
        >
          <ChevronBackIcon /> Back
        </Link>
        {/* <div className="  grow overflow-y-auto  w-full flex flex-col">
          <MessageList
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            sendAiMessage={addAiMessage}
          />
        </div>

        <AddMessageField isTyping={isTyping} /> */}

        <div
          className={`grow overflow-y-auto flex flex-col mx-auto transition-all duration-300 ${
            isCollapsed ? "max-w-[800px]" : "max-w-[740px]"
          } w-full`}
        >
          <MessageList
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            sendAiMessage={addAiMessage}
          />
          <AddMessageField isTyping={isTyping} />
        </div>
      </div>
    </div>
  );
}

export default Page;
