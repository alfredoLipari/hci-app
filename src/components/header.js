import * as React from "react";

import bookImage from "../icons/icon _book_open.png";
import worldImage from "../icons/world.png";
import profileImage from "../icons/profile.png";
import searchImage from "../icons/search.png";

export const Header = () => {
  return (
    <div className="flex flex-auto flex-col pt-3 mt-5 text-xl font-bold text-center text-black border-b border-black border-solid max-w-[600px]">
      <div className="flex self-center w-full max-w-[404px]">
        <div className="flex flex-auto  px-3">
          <img src={bookImage} className="w-9 h-9" alt='icon_book_open' />
          <div className="flex self-center mx-5">Wiki for immigrants</div>
          <img src={worldImage} className="w-6 h-6 mx-1 flex self-center" alt='icon_book_open' />
          <img src={searchImage} className="w-6 h-6 mx-2 flex self-center" alt='search' />
          <img src={profileImage} className="w-6 h-6 mx-1 flex self-center" alt='profile' />
        </div>

      </div>

      <div className="mt-6 w-full bg-zinc-300 min-h-[1px]" />

    </div>
  );
}

