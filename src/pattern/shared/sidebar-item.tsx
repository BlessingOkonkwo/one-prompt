import { cn } from "@/lib/utils";
import { useStateContext } from "@/state/provider";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  chatId: string;
  className?: string;
}

const active = `bg-sidebarActive text-sidebarActiveForeground`;

const SidebarItem = ({ title, chatId, className, href, ...props }: IProps) => {
  const searchParams = useSearchParams();
  const { setActiveChat } = useStateContext();

  const isActive = useCallback(() => {
    const activeStats = searchParams.get("chatId") == chatId;

    return activeStats;
  }, [searchParams, chatId]);

  if (isActive()) {
    className += ` ${active}`;
  }
  return (
    <>
      <Link
        onClick={() => {
          setActiveChat(chatId);
        }}
        href={href}
        className={cn(
          "font-inter text-sidebarForeground font-medium text-sm py-2 px-1 rounded-lg  max-w-[30vw] text-ellipsis overflow-hidden text-nowrap hover:bg-sidebarActive",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </>
  );
};

export default SidebarItem;
