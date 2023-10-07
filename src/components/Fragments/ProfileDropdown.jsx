import { useRef, useState } from "react";

const ProfileDropdown = () => {
  const menus = ["Profile", "Logout"];
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  return (
    <div className="flex flex-col items-center ">
      <img
        ref={imgRef}
        onClick={() => setOpen(!open)}
        src="https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
        alt=""
        className="object-cover w-12 h-12 border-4 rounded-full cursor-pointer  border-primaryColor"
      />
      {open && (
        <div
          ref={menuRef}
          className="absolute p-4 bg-white shadow-lg w-52 top-24 right-[135px]"
        >
          <ul>
            {menus.map((value, index) => (
              <li
                onClick={() => setOpen(false)}
                key={index}
                className="p-2 text-lg rounded cursor-pointer hover:bg-blue-100"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
