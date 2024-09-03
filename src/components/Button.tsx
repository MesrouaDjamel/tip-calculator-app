"use client";

import React from "react";
import { cn } from "../../lib/utils";
type ButtonProps = {
  isDisable?: boolean;
  value: number | string;
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isClicked?: number | null;
};
const Button = ({
  value,
  className,
  handleClick,
  isDisable,
  isClicked,
}: ButtonProps ) => {
  return (
    <button
      disabled={isDisable}
      value={value}
      onClick={handleClick}
      type="button"
      className={cn(
        `bg-veryDarkCyan text-white hover:bg-cyanStrong 
        hover:text-darkGrayishCyan cursor-pointer transition-all ease-in-out duration-300 px-4 py-2 rounded-lg`,
        className,
        isClicked === value && "bg-cyanStrong text-veryDarkCyan",
        isDisable && "bg-[#0D686D] text-veryDarkCyan hover:text-veryDarkCyan hover:bg-[#0D686D] cursor-not-allowed"
      )}
    >
      {typeof value === "number" ? `${value}%` : value}
    </button>
  );
};

export default React.memo(Button);
