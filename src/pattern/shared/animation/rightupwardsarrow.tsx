import React from "react";

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {}

const RightUpwardsArrow: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
 width="100%" height="100%"
    fill="none"
    {...props}
viewBox="0 0 60 89"
  >
  
<path d="M0.244081 0.39707L3.20554 5.2916L6.04761 0.242718L0.244081 0.39707ZM3.92634 2.95862C18.355 11.2733 31.9718 24.7743 42.039 40.1968C52.1079 55.622 58.5978 72.9254 58.8302 88.8309L59.8353 88.8016C59.5995 72.6567 53.0211 55.1751 42.8858 39.6484C32.7488 24.1189 19.0254 10.501 4.44193 2.09715L3.92634 2.95862Z" fill="#6C757D"/>
</svg>




  );
};



const RightDownUpwardsArrow: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
 width="100%" height="100%"
    fill="none"
    {...props}
    viewBox="0 0 96 35" 
  >
  

<path d="M95.3355 0.34124L89.5181 0.870088L92.8839 5.52496L95.3355 0.34124ZM91.3222 2.50927C75.4595 13.3277 62.1113 20.5679 48.0997 25.3926C34.0886 30.2171 19.3895 32.6348 0.814766 33.781L0.87619 34.7671C19.5078 33.6175 34.3064 31.189 48.4341 26.3244C62.5612 21.4599 75.9926 14.168 91.9002 3.31897L91.3222 2.50927Z" fill="#6C757D"/>
</svg>





  );
};

export  {RightDownUpwardsArrow,RightUpwardsArrow};
