"use client";
import React from "react";
import { cn } from "@/lib/utils";
import ChatBotHeader from "@/pattern/shared/chatbot-header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className={cn(
          "bg-background containe mx-auto pt-[102p] w-full min-h-screen h-full flex flex-col items-center"
        )}
      >
        <ChatBotHeader />
        <>{children}</>
      </div>
    </>
  );
};

export default Layout;
