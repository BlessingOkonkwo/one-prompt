import React from "react";

type CustomSVGProps = React.SVGProps<SVGSVGElement>;

const NipCategoryIcon: React.FC<CustomSVGProps> = (props) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.75"
        y="1.0415"
        width="30.5"
        height="30.5"
        rx="15.25"
        fill="white"
      />
      <rect
        x="0.75"
        y="1.0415"
        width="30.5"
        height="30.5"
        rx="15.25"
        stroke="#4B9560"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_695_5985)">
        <path
          d="M11.3792 22.1248L7.66675 25.0415V9.62484C7.66675 9.40382 7.75455 9.19186 7.91083 9.03558C8.06711 8.8793 8.27907 8.7915 8.50008 8.7915H23.5001C23.7211 8.7915 23.9331 8.8793 24.0893 9.03558C24.2456 9.19186 24.3334 9.40382 24.3334 9.62484V21.2915C24.3334 21.5125 24.2456 21.7245 24.0893 21.8808C23.9331 22.037 23.7211 22.1248 23.5001 22.1248H11.3792ZM10.8026 20.4582H22.6667V10.4582H9.33341V21.6123L10.8026 20.4582ZM15.1667 14.6248H16.8334V16.2915H15.1667V14.6248ZM11.8334 14.6248H13.5001V16.2915H11.8334V14.6248ZM18.5001 14.6248H20.1667V16.2915H18.5001V14.6248Z"
          fill="#4B9560"
        />
      </g>
      <defs>
        <clipPath id="clip0_695_5985">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(6 6.2915)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NipCategoryIcon;
