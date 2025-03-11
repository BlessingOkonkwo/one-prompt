import { useStateContext } from "@/state/provider";
import React, { useState } from "react";
import SidebarItem from "./sidebar-item";
import SidebarCollapseIcon from "./icons/sidebar-collapse-icon";
import NewChatIcon from "./icons/new-chat-icon";
import SidebarExpandIcon from "./icons/sidebar-expand-icon";

interface IProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: IProps) => {
  const { engines, activeEngineId } = useStateContext();

  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );

  // const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`grow overflow-y-auto  text-sm transition-all duration-300 ease-in-out flex flex-col px-5 py-[22px] pt-[102px] space-y-4 ${
        isCollapsed ? "max-w-[7vw] bg-background" : "max-w-[16vw] bg-sidebar"
      }`}
    >
      <div className="flex items-center justify-end">
        {/* <button
          className="p-2 hover:bg-iconHover rounded h-10"
          aria-label="New chat"
          title="New chat"
        >
          <NewChatIcon />
        </button> */}

        <button
          className="p-2 hover:bg-iconHover rounded h-10"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Open sidebar" : "Close sidebar"}
          title={isCollapsed ? "Open sidebar" : "Close sidebar"}
        >
          {isCollapsed ? <SidebarExpandIcon /> : <SidebarCollapseIcon />}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <p className="font-semibold text-sidebarHeading">
            Your recent queries
          </p>

          <div className="space-y-7">
            <div className="space-y-3">
              <p className="text-sidebarSub font-semibold text-xs text-right">
                Last 7 days
              </p>
              <div className="flex flex-col space-y-2">
                {activeEngine?.searchHistory.map((history, i) => (
                  <SidebarItem
                    key={i}
                    title={history.title}
                    chatId={history.id}
                    href={`/chatbot?engineId=${activeEngineId}&chatId=${history.id}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sidebarSub font-semibold text-xs text-right">
                Last 30 days
              </p>
              <div className="flex flex-col space-y-2">
                {activeEngine?.searchHistory.map((history, i) => (
                  <SidebarItem
                    key={i}
                    title={history.title}
                    chatId={history.id}
                    href={`/chatbot?engineId=${activeEngineId}&chatId=${history.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
