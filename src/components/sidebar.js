import React, { useContext, useState } from "react";
import addPageImage from "../icons/add_page.png";
import editPageImage from "../icons/edit-page.png";
import bookImage from "../icons/icon _book_open.png";

import { Link, useNavigate, useParams } from "react-router-dom";

import { WikiContext } from "../context/WikiContext";

export const Sidebar = ({ openAddPagePopup }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    languages,
    language,
    setLanguage,
    openSideBar,
    isLogged,
    setIsLogged,
    setShowToast,
    setOpenSideBar,
    setOpenSearch,
    openSearch
  } = useContext(WikiContext);

  const [openLanugage, setOpenLanguage] = useState(false);

  return (
    <aside
      id="default-sidebar"
      class={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
        !openSideBar && "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li className="text-center">
            <img
              src={bookImage}
              className="w-9 h-9"
              alt="icon_book_open"
              onClick={() => navigate("/")}
            />
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.5L3 10h2v10h6V14h2v6h6V10h2L12 2.5z" />
              </svg>
              <span class="ms-3">Home</span>
            </a>
          </li>
          <li onClick={() => setOpenLanguage(!openLanugage)}>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 420 420"
              >
                <path strokeWidth="26" d="M209,15a195,195 0 1,0 2,0z" />
                <path
                  strokeWidth="18"
                  d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Language</span>
            </a>

            {openLanugage && (
              <div
                className="absolute right-10 z-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {languages.map((languageAvailable) => (
                    <a
                      className={` ${
                        languageAvailable == language
                          ? "bg-blue-500"
                          : "text-gray-700 "
                      } block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0"`}
                      onClick={() => {
                        setLanguage(languageAvailable);
                        setOpenLanguage(false);
                      }}
                      key={languageAvailable}
                    >
                      {languageAvailable}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li onClick={() => {setOpenSearch(!openSearch); setOpenSideBar(false)}}>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.707 20.293l-5.396-5.396A7.92 7.92 0 0018 10a8 8 0 10-8 8 7.92 7.92 0 004.897-1.689l5.396 5.396a1 1 0 001.414-1.414zM10 16a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Search</span>
            </a>

            {openLanugage && (
              <div
                className="absolute right-10 z-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {languages.map((languageAvailable) => (
                    <a
                      className={` ${
                        languageAvailable == language
                          ? "bg-blue-500"
                          : "text-gray-700 "
                      } block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0"`}
                      onClick={() => {
                        setLanguage(languageAvailable);
                        setOpenLanguage(false);
                      }}
                      key={languageAvailable}
                    >
                      {languageAvailable}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>

          {isLogged && (
            <>
              <li onClick={openAddPagePopup}>
                <Link
                  to={"/edit/" + (id || 1)}
                  className="flex items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 76 76"
                  >
                    <path d="M 43,30L 50.75,30L 43,22.25L 43,30 Z M 52,34L 39,34L 39,21L 24,21L 24,45L 20,45L 20,17L 43.25,17L 56,29.75L 56,59L 34,59L 34,55L 52,55L 52,34 Z M 28,38L 33,38L 33,46L 41,46L 41,51L 33,51L 33,59L 28,59L 28,51L 20,51L 20,46L 28,46L 28,38 Z M 20,59L 20,52L 24,52L 24,55L 27,55L 27,59L 20,59 Z" />
                  </svg>
                  <span class="flex-1 ms-2 whitespace-nowrap">Add Page</span>
                </Link>
              </li>
              <li>
              <Link
                  to={"/edit/" + (id || 1)}
                  className="flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Edit Page</span>
                </Link>
              </li>
            </>
          )}
          {!isLogged ? (
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
          ) : (
            <li
              onClick={() => {
                setOpenSideBar(false)
                setIsLogged(false);
                setShowToast({
                  mode: "success",
                  message: "Logged out!",
                  show: true,
                });
              }}
            >
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          )}
            <li
            className="flex items-center justify-center pt-6 text-gray-900 dark:text-white cursor-pointer border-t border-white"
            onClick={() => {
              // Logic to close the sidebar
                setOpenSideBar(false); 
            }}
          >
            <span className="text-sm">Close</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};
