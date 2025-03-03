import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import DarkmodeIcon from "../shared/icons/darkmode-icon";
import LogoutIcon from "../shared/icons/logout-icon";
import ChevronDownIcon from "../shared/icons/chevron-down-icon";
import ThemeSwitcher from "@/components/theme/Themeswitcher";

const TopbarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-iconHover">
        <ChevronDownIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="!text-primary">
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
