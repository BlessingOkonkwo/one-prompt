"use client";
import SterlingLogo from "@/pattern/shared/icons/sterling-logo";
import React from "react";
import { Button } from "../../components/ui/button";
import { show } from "@ebay/nice-modal-react";
import LoginModal from "@/pattern/auth/login-modal";

function LoginTopSection() {
  return (
    <div className="flex place-content-between items-center w-full h-[80px] bg-nav border-b border-navBorder">
      <SterlingLogo className="fill-logoTint" />

      <Button
        variant="outline"
        className="py- px- w-[152px]"
        onClick={() => show(LoginModal)}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginTopSection;
