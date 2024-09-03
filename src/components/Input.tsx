"use client"
import React from "react";
import { cn } from "../../lib/utils";

type InputProps = {
  className?: string;
  id?: string;
  value?: number|string;  
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError?: boolean | null;
};
const Input = ({
  className,
  onChange,
  id,
  value,
  inputError
}: InputProps) => {
  return (
    <input
      type="number"
      id={id}
      value={value}
      onChange={onChange}
      placeholder="Custom"
      className={cn(
        "focus:outline-green-300  transition-all ease-in-out duration-300 ",
        className,
        inputError && "focus:outline-[#FE1111] "
      )}
    />
  );
};

export default React.memo(Input);
