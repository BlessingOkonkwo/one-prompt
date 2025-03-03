import React from "react";

interface IProps {
  children: React.ReactNode;
}

const SubCategoryCard = ({ children }: IProps) => {
  return <div className="bg-subCategory border border-subCategoryBorder p-7 rounded">{children}</div>;
};

export default SubCategoryCard;
