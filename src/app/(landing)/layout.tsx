"use client";
import React from "react";
import { cn } from "@/lib/utils";
import LoginTopSection from "@/pattern/login/login-top-section";
import ChatBotHeader from "@/pattern/shared/chatbot-header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className={cn(
          "bg-white containe mx-auto w-full min-h-screen h-full flex flex-col items-center space-y-"
        )}
      >
        {/* <LoginTopSection /> */}
        <ChatBotHeader />
        <>{children}</>
      </div>
    </>
  );
};

export default Layout;
