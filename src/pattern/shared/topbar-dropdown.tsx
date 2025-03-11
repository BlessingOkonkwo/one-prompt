import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import DarkmodeIcon from "./icons/darkmode-icon";
import LogoutIcon from "./icons/logout-icon";
import ChevronDownIcon from "./icons/chevron-down-icon";
import ThemeSwitcher from "@/components/theme/Themeswitcher";
import { useStateContext } from "@/state/provider";
import { useRouter } from "next/navigation";

const TopbarDropdown = () => {
  const { isLoggedIn, setIsLoggedIn } = useStateContext();
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
    setIsLoggedIn(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-iconHover">
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleLogout} className="!text-primary">
          <LogoutIcon />
          Logout
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* <DropdownMenuItem> */}
        <ThemeSwitcher />
        {/* </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TopbarDropdown;
