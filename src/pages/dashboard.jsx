const DashboardPage = () => {
  return (
    <>
      <p className="mb-16 text-3xl font-bold text-gray-700">Dashboard</p>
      <div className="grid gap-5 mb-16 lg:grid-cols-3">
        <div className="h-40 bg-white rounded-lg shadow-lg"></div>
        <div className="h-40 bg-white rounded-lg shadow-lg"></div>
        <div className="h-40 bg-white rounded-lg shadow-lg"></div>
        <div className="h-40 bg-white rounded-lg shadow-lg"></div>
        <div className="h-40 bg-white rounded-lg shadow-lg"></div>
        <div className="h-40 bg-white rounded-lg shadow-lg"></div>
      </div>

      <div className="grid bg-white rounded-lg shadow-lg col-1 h-96 "></div>
    </>
  );
};

export default DashboardPage;
