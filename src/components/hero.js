import * as React from "react";

export const Hero = ({title, subtitle}) => {
  return (
    <div className="flex flex-col justify-center font-bold">
      <div className="flex flex-col items-start py-7 pr-20 pl-2.5 w-full shadow-sm bg-neutral-100">
        <div className="text-2xl text-neutral-700">
          {title}
        </div>
        <div className="mt-3.5 text-sm text-neutral-500">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

