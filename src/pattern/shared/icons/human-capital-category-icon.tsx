import React from "react";

type CustomSVGProps = React.SVGProps<SVGSVGElement>;

const HumanCapitalCategoryIcon: React.FC<CustomSVGProps> = (props) => {
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
        stroke="#FF9500"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_695_5968)">
        <path
          d="M11.8334 10.4582V7.95821C11.8334 7.7372 11.9212 7.52524 12.0775 7.36896C12.2338 7.21268 12.4457 7.12488 12.6667 7.12488H19.3334C19.5544 7.12488 19.7664 7.21268 19.9227 7.36896C20.079 7.52524 20.1667 7.7372 20.1667 7.95821V10.4582H23.5001C23.7211 10.4582 23.9331 10.546 24.0893 10.7023C24.2456 10.8586 24.3334 11.0705 24.3334 11.2915V22.9582C24.3334 23.1792 24.2456 23.3912 24.0893 23.5475C23.9331 23.7037 23.7211 23.7915 23.5001 23.7915H8.50008C8.27907 23.7915 8.06711 23.7037 7.91083 23.5475C7.75455 23.3912 7.66675 23.1792 7.66675 22.9582V11.2915C7.66675 11.0705 7.75455 10.8586 7.91083 10.7023C8.06711 10.546 8.27907 10.4582 8.50008 10.4582H11.8334ZM9.33341 19.6249V22.1249H22.6667V19.6249H9.33341ZM9.33341 17.9582H22.6667V12.1249H9.33341V17.9582ZM13.5001 8.79154V10.4582H18.5001V8.79154H13.5001ZM15.1667 15.4582H16.8334V17.1249H15.1667V15.4582Z"
          fill="#FF9500"
        />
      </g>
      <defs>
        <clipPath id="clip0_695_5968">
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

export default HumanCapitalCategoryIcon;
