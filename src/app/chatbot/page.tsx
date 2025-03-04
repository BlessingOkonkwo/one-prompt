"use client";
import MessageList from "@/pattern/chat/messagelist";
import AddMessageField from "@/pattern/chat/textfield";
import Suggestions from "@/pattern/dashboard/suggestions";
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
    <div className="flex grow w-screen bg- min-h-screen">
      {/* <div className="flex flex-col bg-white w-[20vw] place-items-center">
        <p>Your recent searches</p>
        {activeEngine?.searchHistory.map((re, i) => (
          <p key={i}>{re.title}</p>
        ))}
      </div> */}

      <Sidebar />

      <div className="w-ful px-4 pt-[102px] flex flex-col gap-10 w-[740px w-full">
        <Link
          className="flex items-center gap-2 text-prompt mt-[22px] ml-[32px] hover:bg-iconHover w-fit p-1 rounded"
          href={`/`}
        >
          <ChevronBackIcon /> Back
        </Link>

        <div className="h-full justify-end min-w-[740px] self-center mx-auto">
          <MessageList />

          {/* <p>paragraph</p> */}

          <div className="flex flex-col gap-[10px]">
            <Suggestions />
            <AddMessageField />
          </div>
        </div>
        {/* <p>paragraph2</p> */}
      </div>
    </div>
  );
}

export default Page;
