import React, {useContext, useState} from "react";

import bookImage from "../icons/icon _book_open.png";
import worldImage from "../icons/world.png";
import profileImage from "../icons/profile.png";
import searchImage from "../icons/search.png";
import {Link, useParams} from 'react-router-dom';

import { WikiContext } from '../context/WikiContext';

export const Header = () => {

    const {languages,language, setLanguage, pages } = useContext(WikiContext)

    const [openLanugage, setOpenLanguage] = useState(false)

    const [openSearch, setOpenSearch] = useState(false)

    const [valueSearch, setValueSearch] = useState('')

  return (
    <div className="flex flex-auto flex-col pt-3 mt-5 text-xl font-bold text-center text-black border-b border-black border-solid max-w-[600px]">
      <div className="flex self-center max-w-[404px]">
        <div className="flex flex-auto  px-3">
          <img src={bookImage} className="w-9 h-9" alt='icon_book_open' />
          <div className="flex self-center mx-5">Wiki for immigrants</div>
          <button type="button" class="inline-flex justify-center  text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setOpenLanguage(!openLanugage)}>
            <img src={worldImage} className="w-6 h-6 mx-1 flex self-center" alt='icon_book_open' />
          </button>
          <img src={searchImage} className="w-6 h-6 mx-2 flex self-center" alt='search' onClick={() => setOpenSearch(!openSearch)} />
          <img src={profileImage} className="w-6 h-6 mx-1 flex self-center" alt='profile' />
        </div>

      </div>
      <div className="mt-6 w-full bg-zinc-300 min-h-[1px]" />

      {openSearch && <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={searchImage} className="w-6 h-6 flex self-center" alt='search' />
                        </div>
                        <input type="text" class="block w-full py-3 pl-10 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search" value={valueSearch} onChange={e => setValueSearch(e.target.value)} />
                      </div>

        }


      
    {openLanugage && <div class="absolute right-0 z-10 mt-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none">
            {languages.map((languageAvailable) => (
                <a href="#" class={` ${languageAvailable == language ? 'bg-blue-500' : 'text-gray-700 '} block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"`} onClick={() => setLanguage(languageAvailable)}>{languageAvailable}</a>
            ))}

        </div>
    </div>}


      {valueSearch !== '' &&  <div id="extralarge-modal" tabindex="-1" class="fixed top-40 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-7xl max-h-full">
              
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                            Search modal
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal" onClick={() => setValueSearch('')}>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                  
                    <div class="p-4 md:p-5 space-y-4">
                        {pages.filter(page => (page.tags.some(tag => tag.toLowerCase().includes(valueSearch.toLowerCase())) && language === page.language  )).map(page => (
                            <div class="flex items center justify-between">
                                <div class="flex flex-col">
                                    <Link to={"/page/"+ page.id} class="text-lg font-medium text-gray-900 dark:text-white">{page.title}</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                  
                </div>
            </div>
        </div>}
   
        
    </div>
  );
}
