"use client";
import MessageList from "@/pattern/chat/messagelist";
import AddMessageField from "@/pattern/chat/textfield";
import Suggestions from "@/pattern/dashboard/suggestions";
import ChevronBackIcon from "@/pattern/shared/icons/chevron-back-icon";
import Sidebar from "@/pattern/shared/sidebar";
import SidebarItem from "@/pattern/shared/sidebar-item";
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
    <div className="flex w-screen h-full ">
      <Sidebar />

      <div className="grow px-4 pt-[102px] flex flex-col gap-10 ">
        <Link
          className="flex items-center gap-2 text-prompt mt-[22px] ml-[32px] hover:bg-iconHover w-fit p-1 rounded"
          href={`/`}
        >
          <ChevronBackIcon /> Back
        </Link>
        <div className="  grow overflow-y-auto  w-full flex flex-col">

          <MessageList />
        </div>
        <div className="flex flex-col gap-[10px]">
          <Suggestions />
          <AddMessageField />
        </div>
      </div>
    </div>

  );
}

export default Page;
{/* <div className="grow px-4 pt-[102px] flex flex-col gap-10 w-full">
<Link
  className="flex items-center gap-2 text-prompt mt-[22px] ml-[32px] hover:bg-iconHover w-fit p-1 rounded"
  href={`/`}
>
  <ChevronBackIcon /> Back
</Link>

<div className="flex-grow bg-blue-400 justify-end w-full self-center mx-auto">
  <div className="flex-grow"></div>
  <div className="flex flex-col gap-[10px]">
    <Suggestions />
    <AddMessageField />
  </div>
</div>
</div> */}