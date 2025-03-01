import React from "react";
interface CustomSVGProps extends React.SVGProps<SVGSVGElement> { }
const SterlingLogoOnly: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="43"
      viewBox="0 0 41 43" 
      fill="none"
      {...props}
 
    >

 
  
      <ellipse
        cx="18.3771"
        cy="17.9179"
        rx="18.3771"
        ry="17.9179"
        fill="#DB353A"
      />
      <ellipse
        cx="24.8857"
        cy="10.8254"
        rx="5.74285"
        ry="5.59934"
        fill="white"
      />
    </svg>
  );
};

export default SterlingLogoOnly;
