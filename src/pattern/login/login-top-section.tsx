"use client";
import SterlingLogo from "@/pattern/shared/icons/sterling-logo";
import React from "react";
import { Button } from "../../components/ui/button";
import { show } from "@ebay/nice-modal-react";
import LoginModal from "@/pattern/auth/login-modal";

function LoginTopSection() {
  return (
    <div className="border-b  border-navBorder w-full">
    <div className="flex container mx-auto place-content-between items-center w-full h-[80px] bg-nav ">
      <SterlingLogo className="fill-logoTint" />

      <Button
        variant="outline"
        className="py- px- w-[152px]"
        onClick={() => show(LoginModal)}
      >
        Login
      </Button>
    </div>
    </div>
  );
}

export default LoginTopSection;
