import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const nav = useNavigate();
  const disatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);
  return (
    <div className="">
      <div className="container">
        <div className=" flex items-center justify-between py-5">
          <div className=" text-[25px]">
            <h1 onClick={() => nav("/")}>ShopVerse</h1>
          </div>
          <div className=" flex items-center gap-5 text-[20px]">
            <Link to="/">Home</Link>
            <a href="#">Categories</a>
            <Link to="/product">Shop</Link>
            <Link to="/admin">About</Link>
          </div>
          <div className=" flex items-center gap-5">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-[140px] pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2   text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups"
                  onChange={(e) => {
                    setSearchInput(e.target.value)
                    disatch({ type: "SEARCH", payload: searchInput });
                  }}
                />
              </div>
            </form>

            <a className=" text-[25px]">
              <MdOutlineFavoriteBorder />
            </a>
            <Link to={'basket'} className=" text-[25px]">
              <LuShoppingBag />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
