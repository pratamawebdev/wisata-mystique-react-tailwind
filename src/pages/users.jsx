import UserCard from "../components/Fragments/UserCard";

const UsersPage = () => {
  return (
    <>
      <p className="mb-16 text-3xl font-bold text-gray-700">User</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
        <UserCard />
      </div>
    </>
  );
};

export default UsersPage;
