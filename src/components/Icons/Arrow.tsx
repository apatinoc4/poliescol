import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const ARROW_SVG = {
  left: (
    <svg
      width="23"
      height="46"
      viewBox="0 0 23 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="&#240;&#159;&#166;&#134; icon &#34;arrow right 1&#34;"
        opacity="0.75"
      >
        <path
          id="Vector"
          d="M20.418 43.1049L3.49859 26.1855C1.50043 24.1873 1.50043 20.9176 3.49859 18.9195L20.418 1.99994"
          stroke="white"
          stroke-width="3.89251"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  ),
  right: (
    <svg
      width="23"
      height="46"
      viewBox="0 0 23 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="&#240;&#159;&#166;&#134; icon &#34;arrow right 1&#34;"
        opacity="0.75"
      >
        <path
          id="Vector"
          d="M2 43.1049L18.9194 26.1855C20.9175 24.1873 20.9175 20.9176 18.9194 18.9195L2 1.99994"
          stroke="white"
          stroke-width="3.89251"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  ),
  up: (
    <svg
      width="23"
      height="46"
      viewBox="0 0 23 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="&#240;&#159;&#166;&#134; icon &#34;arrow right 1&#34;"
        opacity="0.75"
      >
        <path
          id="Vector"
          d="M20.418 43.1049L3.49859 26.1855C1.50043 24.1873 1.50043 20.9176 3.49859 18.9195L20.418 1.99994"
          stroke="white"
          stroke-width="3.89251"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  ),
  down: (
    <svg
      width="23"
      height="46"
      viewBox="0 0 23 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="&#240;&#159;&#166;&#134; icon &#34;arrow right 1&#34;"
        opacity="0.75"
      >
        <path
          id="Vector"
          d="M20.418 43.1049L3.49859 26.1855C1.50043 24.1873 1.50043 20.9176 3.49859 18.9195L20.418 1.99994"
          stroke="white"
          stroke-width="3.89251"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  ),
};

interface ArrowIconProps {
  direction: "left" | "right" | "up" | "down";
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction }) => {
  return <SvgIcon>{ARROW_SVG[direction]}</SvgIcon>;
};

export default ArrowIcon;
