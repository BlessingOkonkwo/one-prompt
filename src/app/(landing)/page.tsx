"use client";
import LoginTopSection from "@/pattern/login/login-top-section";
import GlobeVisualization from "@/pattern/landing/landing-animation";
import MoreCategoriesIcon from "@/pattern/shared/icons/more-categories-icon";
import Link from "next/link";
// import SterlingLogo from "@/pattern/shared/icons/sterling-logo";
// import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex flex-col container pb-9 w-screen min-h-screen place-items-center mx-auto">
      <div className="mx-auto flex flex-col items-center w-full  ">
        {/* <LoginTopSection /> */}

        <p className=" font-medium text-subHeading text-[1.5rem] place-self-center">
          One
          <span className="font-BalloBhaina text-primary_color font-normal">
            Prompt
          </span>
        </p>
        <p className="text-subHeading font-inter text-[1rem] font-normal text-center mx-auto">
          Explore unlimited information at your fingertips like never
          before...fast, easy & accessible. <br />
          All the information you need, just a few clicks away!
        </p>
        <div className="mt-[2.6rem]" />

        <GlobeVisualization />

        <Link
          href={`/all-categories`}
          className="flex items-center mt-[48px] gap-2 text-primary font-nunito text-base font-semibold"
        >
          <MoreCategoriesIcon />
          View more categories
        </Link>
      </div>
    </main>
  );
}
