"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EngineLogo from "@/pattern/shared/icons/engine";
import OnePromptLogo from "@/pattern/shared/icons/one-prompt-logo";
import SterlingLogoOnly from "@/pattern/shared/icons/sterling-logo2";
import { useStateContext } from "@/state/provider";
import { User } from "@heroui/react";
import React from "react";
import "../../../public/profile-pic.svg";
import TopbarDropdown from "@/pattern/topbar/topbar-dropdown";

function ChatBotHeader() {
  const {
    engines,
    activeEngineId,
    activeChatId,
    addMessage,
    setActiveChat,
    createNewChat,
    isLoggedIn,
    setIsLoggedIn,
    setActiveEngine,
  } = useStateContext();

  const activeEngine = engines.find(
    (engine) => engine.engineId === activeEngineId
  );

  return (
    <div className="fixed top-0 z-50 w-full py-5 bg-nav border-b-1 border-navBorder">
      <div className=" flex flex-row mx-auto container  place-items-center">
        <OnePromptLogo />
        <div className="flex place-items-center gap-1 ml-20 ">
          <EngineLogo />{" "}
          <p className="text-navCategory ml-1 text-base font-medium font-inter">
            {activeEngine?.engineName}
          </p>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="@shadcn"
            />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>

          <div className="flex flex-col ">
            <p className="text-profile font-bold text-sm">Ciroma Adekunle</p>
            <p className="text-profileSub font-normal text-sm">
              Customer Experience
            </p>
          </div>

          <TopbarDropdown />
        </div>
      </div>
    </div>
  );
}

export default ChatBotHeader;
