"use client";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/ContextProvider";

// Profile Dropdown
const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();
  const { currentUser } = useAuth();
  const navigation = [
    { title: "Dashboard", path: "/admin" },
    { title: "Settings", path: "#" },
    { title: "Log out", path: "admin/logout" },
  ];

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img src="/images/profile.png" className="w-full h-full rounded-full" />
        </button>
        <div className="">
          <span className="block">{currentUser?.fullname}</span>
          <span className="block text-sm text-gray-500">{currentUser?.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <Link className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" href={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const { isLoggedIN } = useAuth();

  if (pathname.startsWith("/admin")) {
    return;
  }

  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Latest Posts", path: "#" },
    { title: "About us", path: "#" },
    { title: "Contact us", path: "/contactus" },
  ];
  return (
    <div className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link href="/">
            <h1 className="font-extrabold text-pretty text-3xl font-sans">Blog Admin</h1>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? "" : "hidden"}`}>
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            {/* <ProfileDropDown className="mt-5 pt-5 border-t lg:hidden" /> */}
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto" type="text" placeholder="Search" />
            </form>

            {isLoggedIN ? (
              <>
                <ProfileDropDown className="hidden lg:block" />
                <button className="outline-none text-gray-400 block lg:hidden" onClick={() => setMenuState(!menuState)}>
                  {menuState ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </>
            ) : (
              <Link
                href="/admin"
                className="w-full py-3 px-4 font-medium text-sm text-center text-white bg-black hover:bg-black/80 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
