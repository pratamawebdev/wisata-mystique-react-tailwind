import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import useUsers from "../../hooks/useUsers";

const UserCard = () => {
  const { data, loading, error, setConfigUsers, configUsers, token } =
    useUsers();
  const [datalist, setDatalist] = useState([]);
  const [users, setUsers] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    if (data && configUsers.key === "all_users") {
      setDatalist(data?.data);
    }
  }, [data]);

  const handleUpdateUserRole = async (userId) => {
    try {
      // Determine the new role based on the current role
      const newRole =
        datalist.find((user) => user.userId === userId)?.role === "admin"
          ? "user"
          : "admin";

      // Update the user role using the hook
      console.log(userId);
      setConfigUsers({
        key: "update_user_role",
        data: {
          userId: userId,
          role: newRole,
        },
      });

      // Update the local state immediately for a responsive UI
      // setDatalist((prevDataList) => {
      //   return prevDataList.map((user) =>
      //     user.userId === userId ? { ...user, role: newRole } : user
      //   );
      // });

      alert("Edit Role Success");
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {datalist.map((v, i) => (
        <div key={i} className="text-white bg-white rounded-lg shadow-md h-80">
          <img
            alt="user"
            className="w-32 h-32 mx-auto rounded-full mt-7"
            src={v.profilePictureUrl}
          />
          <figcaption className="mt-5 text-center">
            <p className="mb-2 text-xl font-semibold text-gray-700">{v.name}</p>
            <p className="text-gray-500">
              <span className="font-medium">{v.email}</span>
            </p>
            <p className="text-gray-500">
              <span className="font-medium">{v.phoneNumber}</span>
            </p>
            <div className="mt-4">
              <label
                htmlFor={`roleToggle-${v.id}`}
                className="mr-2 text-gray-700"
              >
                Admin
              </label>
              <Switch
                checked={v.role === "admin"}
                onChange={() => handleUpdateUserRole(v.id)}
                className={`${
                  v.role === "admin" ? "bg-blue-500" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span className="sr-only">Toggle role</span>
                <span
                  className={`${
                    v.role === "admin" ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
              </Switch>
              <label
                htmlFor={`roleToggle-${v.id}`}
                className="ml-2 text-gray-700"
              >
                User
              </label>
            </div>
          </figcaption>
        </div>
      ))}
    </>
  );
};

export default UserCard;
