import BorderIcon from "@/pattern/shared/animation/border";
import {
  LeftUpwardsArrow,
  LeftUpwardsDownArrow,
} from "@/pattern/shared/animation/leftupwardsarrow";
import { RightDownUpwardsArrow } from "@/pattern/shared/animation/rightupwardsarrow";
import React from "react";

function LandingPageAnimation() {
  return (
    <div className="flex relative w-full place-content-center">
      <img
        src="/world.png"
        className="w-[12.063rem] m-[4.438rem] aspect-square"
      />
      <BorderIcon className=" absolute  w-[16.3753rem] aspect-square left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      <BorderIcon className=" absolute  w-[40.3753rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[12.063rem] aspect-square ">
        <div className="relative w-full h-full">
          <LeftUpwardsArrow className=" absolute -left-12 top-[0.4rem] w-[6.3rem]  h-[5.4rem]" />
          <LeftUpwardsDownArrow className=" absolute left-[1.2rem] -top-[6.8rem] w-[6.3rem]  h-[4.4rem]" />
          <RightDownUpwardsArrow className=" absolute -right-[1.5rem] -bottom-[6.0rem] w-[6.3rem]  h-[4.4rem]" />
        </div>
      </div>
    </div>
  );
}

export default LandingPageAnimation;
