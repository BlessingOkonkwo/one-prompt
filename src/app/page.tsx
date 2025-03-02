import LandingPageAnimation from "@/components/landing_page_animation";
import LoginTopSection from "@/components/login/login-top-section";
import ThemeSwitcher from "@/components/theme/Themeswitcher";
// import SterlingLogo from "@/pattern/shared/icons/sterling-logo";
// import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex flex-col container py-9 w-screen min-h-screen place-items-center mx-auto">
      <div className="mx-auto flex flex-col w-full  ">
        <LoginTopSection />
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
        <ThemeSwitcher />
        <LandingPageAnimation />
      </div>
    </main>
  );
}
