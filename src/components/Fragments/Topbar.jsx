import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Topbar = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`fixed bg-white w-full h-16 flex justify-between items-center transition-all duration-[400ms] shadow-md ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 text-gray-700 cursor-pointer "
          onClick={() => setShowNav(!showNav)}
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center justify-center w-full">
              <img
                src="https://www.svgrepo.com/show/532362/user.svg"
                className="h-8 border-2 border-white rounded-full shadow-sm md:mr-4"
                alt="profile_picture"
              />
              <span className="hidden font-medium text-gray-700 md:block">
                Willy
              </span>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-sm text-gray-700 transition-colors rounded hover:bg-green-500 hover:text-white group"
                  >
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-sm text-gray-700 transition-colors rounded hover:bg-green-500 hover:text-white group"
                  >
                    Billing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-sm text-gray-700 transition-colors rounded hover:bg-green-500 hover:text-white group"
                  >
                    Settings
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Topbar;
