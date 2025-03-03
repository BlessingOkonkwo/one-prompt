import React from "react";

interface IProps {
  title: string;
  desc: string;
}

const SuggestionCard = ({ title, desc }: IProps) => {
  return (
    <div className="flex flex-col bg-suggestionCard border border-suggestionCardBorder rounded-xl py-2 px-3 hover:bg-iconHover cursor-pointer">
      <p className="font-medium text-sm text-suggestionCardTitle">{title}</p>
      <p className="font-normal text-xs text-suggestionCardSub">{desc}</p>
    </div>
  );
};

export default SuggestionCard;
