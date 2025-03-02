import React from "react";

type CustomSVGProps = React.SVGProps<SVGSVGElement>;

const ChevronBackIcon: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.73066 7.00005L9.09316 12.3625L7.56133 13.8944L0.666992 7.00005L7.56133 0.105713L9.09316 1.63755L3.73066 7.00005Z"
        fill="#495057"
      />
    </svg>
  );
};

export default ChevronBackIcon;
