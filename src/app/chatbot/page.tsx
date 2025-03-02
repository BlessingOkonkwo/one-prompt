"use client";
import MessageList from "@/components/chat/messagelist";
import AddMessageField from "@/components/chat/textfield";
import ChevronBackIcon from "@/pattern/shared/icons/chevron-back-icon";
import Sidebar from "@/pattern/shared/sidebar";
import { useStateContext } from "@/state/provider";
import Link from "next/link";
import React from "react";

function Page() {
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
    <div className="flex grow w-screen bg-">
      {/* <div className="flex flex-col bg-white w-[20vw] place-items-center">
        <p>Your recent searches</p>
        {activeEngine?.searchHistory.map((re, i) => (
          <p key={i}>{re.title}</p>
        ))}
      </div> */}

      <Sidebar />

      <div className="w-ful px-4 flex flex-col gap-10 w-[740px]">
        <Link
          className="flex items-center gap-2 text-prompt mt-[22px] ml-[32px] hover:bg-iconHover w-fit p-1 rounded"
          href={`/`}
        >
          <ChevronBackIcon /> Back
        </Link>
        <MessageList />
        <AddMessageField />
      </div>
    </div>
  );
}

export default Page;
