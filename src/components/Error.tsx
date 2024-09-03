import React from "react";
type ErrorProps = {
  data: number;
};
const Error = ({ data }: ErrorProps) => {
  return (
    <>
      {data < 0 && (
        <p className="text-red-500 text-[0.8rem]">Can&apos;t be negative</p>
      )}
      {data === 0 && (
        <p className="text-[#FE1111] font-extralight text-[0.8rem] ">
          Can&apos;t be zero
        </p>
      )}
    </>
  );
};

export default Error;
