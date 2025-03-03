"use client";
import SterlingLogo from "@/pattern/shared/icons/sterling-logo";
import React from "react";
import OutlinedButton from "../button";
import { Button } from "../ui/button";

function LoginTopSection() {
  return (
    <div className="flex place-content-between items-center w-full h-[80px] bg-nav border-b border-navBorder">
      <SterlingLogo className="fill-logoTint" />

      {/* <OutlinedButton onClick={() => {}}> Login </OutlinedButton> */}

      <Button variant="outline" className="py- px- w-[152px]">Login</Button>
    </div>
  );
}

export default LoginTopSection;
