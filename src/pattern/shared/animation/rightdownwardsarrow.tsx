import React from "react";

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {}

const RightDownwardsArrow: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
 width="100%" height="100%"
    fill="none"
    {...props}
 viewBox="0 0 38 80"
  >
  

  <path d="M0.51078 79.2L6.15125 77.9677L2.26387 73.699L0.51078 79.2ZM36.2067 0.288811C36.2067 29.8887 23.6792 56.6431 3.49631 75.805L4.18484 76.5302C24.555 57.1904 37.2067 30.1784 37.2067 0.288811H36.2067Z" fill="#6C757D"/>
</svg>



  );
};

export default RightDownwardsArrow;
