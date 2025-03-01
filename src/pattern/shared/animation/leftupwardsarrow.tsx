import React from "react";

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> { }

const LeftUpwardsArrow: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%" height="100%"
      fill="none"
      {...props}
      viewBox="0 0 48 88"
    >


      <path d="M47.8756 0.679443L42.1254 1.19825L45.4498 5.91862L47.8756 0.679443ZM1.35474 87.8449C1.35474 53.4822 18.2805 22.9501 44.4951 3.67158L43.9027 2.86597C17.4489 22.3203 0.354736 53.1434 0.354736 87.8449H1.35474Z" fill="#6C757D" />
    </svg>


  );
};



const LeftUpwardsDownArrow: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%" height="100%"
      fill="none"
      {...props}
      viewBox="0 0 113 21"
    >


      <path d="M0.247601 20.6431L2.90895 15.5018L6.05661 20.2651L0.247601 20.6431ZM111.988 3.93571C95.781 1.0867 75.9795 0.409102 56.6623 2.6178C37.3397 4.82712 18.5439 9.91947 4.32143 18.5784L3.80304 17.7365C18.2001 8.97127 37.1585 3.85058 56.5637 1.63182C75.9742 -0.587548 95.8744 0.0917444 112.182 2.95841L111.988 3.93571Z" fill="#6C757D" />
    </svg>


  );
};

export { LeftUpwardsArrow, LeftUpwardsDownArrow };
