import React, { FC } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ICON_SVGS } from "constants/icons";
import { IconName } from "types";

interface CustomIconProps {
  icon: IconName;
}

const CustomIcon: FC<CustomIconProps> = ({ icon }) => {
  return <SvgIcon>{ICON_SVGS[icon as IconName]}</SvgIcon>;
};

export default CustomIcon;
