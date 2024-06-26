import React, { useContext, useState } from "react";

import bookImage from "../icons/icon _book_open.png";
import worldImage from "../icons/world.png";
import profileImage from "../icons/profile.png";
import searchImage from "../icons/search.png";
import profileLogin from "../icons/profile-login.png";
import addPageImage from "../icons/add_page.png";
import editPageImage from "../icons/edit-page.png";
import logout from "../icons/logout.svg";

import { Link, useNavigate, useParams } from "react-router-dom";

import {WikiContext} from '../context/WikiContext';
import Select from "react-select";

const options = [
    {
        value: 'name',
        label: 'name',
    },
    {
        value: 'tag',
        label: 'tag',
    },
]

export const Header = (props) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    languages,
    language,
    setLanguage,
    pages,
    isLogged,
    setIsLogged,
    openSideBar,
    setOpenSideBar,
    openSearch,
    setOpenSearch
  } = useContext(WikiContext);

  const [openLanugage, setOpenLanguage] = useState(false);

  const [searchMethod, setSearchMethod] = useState(options[0])
  const [valueSearch, setValueSearch] = useState('')

  // retrieve all the languages available if the page is available in that language and retrieve all other pages with the same id to do same check
  const pagesAvailable = pages.filter(
    (page) => page.id === (id === undefined ? 1 : parseInt(id))
  );
  const languagesAvailable = languages
    .filter((lang) => pagesAvailable.some((page) => page.language === lang))
    .map((lang) => lang);

    const filterMethod = (page) => {
      if(searchMethod.value === 'tag') {
          return page.tags.some(tag => tag.toLowerCase().includes(valueSearch.toLowerCase())) && language === page.language
      }
      return page.title.toLowerCase().includes(valueSearch.toLowerCase()) && language === page.language
  }  

  return (
    <div className="flex flex-auto flex-col  mt-5 text-xl font-bold text-center text-black border-b border-black border-solid ">
      <div className="flex justify-between text-center ">
        <div className="flex flex-auto  px-3 items-center">
        <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            class="flex self-center inline-flex items-center p-2  ms-3 text-sm  rounded-lg sm:hidden focus:outline-none "
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-7 h-7"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <h1 className={`flex self-center mx-3 text-2xl`}>
            {isLogged ? "Wiki Admin" : "Wiki for immigrants"}
          </h1>


         
        </div>
      </div>
      <div className="mt-6 w-full bg-zinc-300 min-h-[1px]" />

      {openSearch &&
                <>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <img src={searchImage} className="w-6 h-6 flex self-center" alt='search'/>
                        </div>
                        <input type="text"
                               className="block w-full py-3 pl-10 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                               placeholder="Search" value={valueSearch} onChange={e => setValueSearch(e.target.value)}/>
                    </div>
                    <div className={'w-full text-left pl-2 flex pr-10 start-0 items-center p-2'}>
                        <span className={'font-normal'} style={{fontSize: '16px'}}>Search by</span>
                        <Select styles={{width: '200px'}} className={'ml-5 font-normal'}
                                placeholder={'Select a language'}
                                value={searchMethod}
                                options={options}
                                onChange={setSearchMethod}
                        />
                    </div>
                </>

            }


            {openLanugage && <div
                className="absolute right-0 z-10 mt-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    {languagesAvailable.map((languageAvailable) => (
                        <a className={` ${languageAvailable == language ? 'bg-blue-500' : 'text-gray-700 '} block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0"`} onClick={() => {
                            setLanguage(languageAvailable);
                            setOpenLanguage(false)
                        }} key={languageAvailable}>{languageAvailable}</a>
                    ))}

                </div>
            </div>}


            {valueSearch !== '' &&  <div id="extralarge-modal" tabIndex="-1" className="fixed top-40 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-7xl max-h-full">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Search modal
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal" onClick={() => setValueSearch('')}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5 space-y-4">
                            {pages.filter(page => filterMethod(page)).map(page => (
                                <div className="flex items center justify-between" key={page.id}>
                                    <div className="flex flex-col" onClick={() => {
                                        setOpenSearch(false)
                                        setValueSearch('')
                                    }}>
                                        <Link to={"/page/"+ page.id} className="text-lg font-medium text-gray-900 dark:text-white">{page.title}</Link>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>}
    </div>
  );
};
