import ManageLayout from "../components/Layouts/Manage";

const PromosPage = () => {
  return (
    <>
      <p className="mb-16 text-3xl font-bold text-gray-700">Promos</p>
      <ManageLayout title="Manage Promo" titleButton="Add Promo" />
    </>
  );
};

export default PromosPage;
