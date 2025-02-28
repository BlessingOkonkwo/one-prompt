import React from "react";

interface IProps {
  title: string;
}

const SidebarItem = ({ title }: IProps) => {
  return (
    <>
      <p className="text-sidebarForeground text-bold">{title}</p>
    </>
  );
};

export default SidebarItem;
