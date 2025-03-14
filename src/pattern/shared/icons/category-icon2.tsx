import React from "react";

type CustomSVGProps = React.SVGProps<SVGSVGElement>;

const CategoryIcon2: React.FC<CustomSVGProps> = (props) => {
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
        stroke="#34C759"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_525_3709)">
        <path d="M6 6.2915H26V26.2915H6V6.2915Z" fill="white" />
        <path
          d="M10.1667 16.7082C10.1667 16.969 10.5508 17.4232 11.4417 17.869C12.595 18.4457 14.2308 18.7915 16 18.7915C17.7692 18.7915 19.405 18.4457 20.5583 17.869C21.4492 17.4232 21.8333 16.969 21.8333 16.7082V14.899C20.4583 15.749 18.3558 16.2915 16 16.2915C13.6442 16.2915 11.5417 15.7482 10.1667 14.899V16.7082ZM21.8333 19.0657C20.4583 19.9157 18.3558 20.4582 16 20.4582C13.6442 20.4582 11.5417 19.9148 10.1667 19.0657V20.8748C10.1667 21.1357 10.5508 21.5898 11.4417 22.0357C12.595 22.6123 14.2308 22.9582 16 22.9582C17.7692 22.9582 19.405 22.6123 20.5583 22.0357C21.4492 21.5898 21.8333 21.1357 21.8333 20.8748V19.0657ZM8.5 20.8748V12.5415C8.5 10.4707 11.8583 8.7915 16 8.7915C20.1417 8.7915 23.5 10.4707 23.5 12.5415V20.8748C23.5 22.9457 20.1417 24.6248 16 24.6248C11.8583 24.6248 8.5 22.9457 8.5 20.8748ZM16 14.6248C17.7692 14.6248 19.405 14.279 20.5583 13.7023C21.4492 13.2565 21.8333 12.8023 21.8333 12.5415C21.8333 12.2807 21.4492 11.8265 20.5583 11.3807C19.405 10.804 17.7692 10.4582 16 10.4582C14.2308 10.4582 12.595 10.804 11.4417 11.3807C10.5508 11.8265 10.1667 12.2807 10.1667 12.5415C10.1667 12.8023 10.5508 13.2565 11.4417 13.7023C12.595 14.279 14.2308 14.6248 16 14.6248Z"
          fill="#34C759"
        />
      </g>
      <defs>
        <clipPath id="clip0_525_3709">
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

export default CategoryIcon2;
