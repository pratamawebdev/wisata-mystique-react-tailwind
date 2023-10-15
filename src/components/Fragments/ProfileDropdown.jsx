import { useRef, useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  // const menus = ["Profile", "Logout"];
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const { data, loading, error, setConfigUsers, configUsers } = useUsers();
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    if (data && configUsers.key === "get") {
      setDatalist(data?.data);
      console.log("aaaa", datalist);
    }

    return () => {};
  }, [data, loading, error, configUsers]);

  if (loading) return <div>Loading!!</div>;

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  return (
    // <div className="flex flex-col items-center ">
    //   <img
    //     ref={imgRef}
    //     onClick={() => setOpen(!open)}
    //     src={
    //       datalist[0]?.profilePictureUrl ||
    //       "data:image/jpeg;base64,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"
    //     }
    //     alt=""
    //     className="object-cover w-12 h-12 border-4 rounded-full cursor-pointer border-primaryColor"
    //   />
    //   {open && (
    //     <div
    //       ref={menuRef}
    //       className="absolute p-4 bg-white shadow-lg w-52 top-24 right-[135px]"
    //     >
    //       <ul>
    //         {menus.map((value, index) => (
    //           <li
    //             onClick={() => setOpen(false)}
    //             key={index}
    //             className="p-2 text-lg rounded cursor-pointer hover:bg-blue-100"
    //           >
    //             {value}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </div>
    <div className="flex items-center justify-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center justify-center w-full">
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
  );
};

export default ProfileDropdown;
