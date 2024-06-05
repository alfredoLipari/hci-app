import * as React from "react";

export const FirstTitle = ({title}) => {
  return (
    <div className="flex flex-col text-2xl font-bold text-blue-700 whitespace-nowrap max-w-[412px] mt-5 mb-3 px-5">
      <div className="w-full">{title}</div>
      <div className="mt-3 w-full bg-blue-700 shadow-sm min-h-[1px] rounded-[100px]" />
    </div>
  );
}

