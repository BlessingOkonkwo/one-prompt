"use client";
import React from "react";
import { cn } from "@/lib/utils";
import LoginTopSection from "@/components/login/login-top-section";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className={cn(
          "bg-white containe mx-auto w-full min-h-screen h-full flex flex-col items-center space-y-5"
        )}
      >
        <LoginTopSection />
        <>{children}</>
      </div>
    </>
  );
};

export default Layout;
