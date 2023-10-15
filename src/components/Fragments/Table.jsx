import useApi from "../../hooks/useApi";
import Modal from "./Modal";
import { useEffect, useState } from "react";
const Table = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const endpoint = "api/v1/banners";
  const { data, loading, error, fetchApiData } = useApi(endpoint);

  useEffect(() => {
    fetchApiData();
  }, [endpoint]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data && data.data ? (
        <table className="w-full min-w-[540px]">
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                Name
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Created At
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Updated At
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((v, i) => (
              <tr key={i}>
                <td className="px-4 py-2 border-b border-b-gray-50">
                  <span className="ml-2 text-sm font-medium text-gray-600 truncate hover:text-blue-500">
                    {v.name}
                  </span>
                </td>

                <td className="px-4 py-2 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {v.createdAt}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {v.updatedAt}
                  </span>
                </td>
                <td className="flex gap-2 px-4 py-2 border-b border-b-gray-50">
                  <button
                    onClick={() => setShowModal(true)}
                    className="py-[4px] px-2 bg-blue-400 rounded"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => setShowModal2(true)}
                    className="py-[4px] px-2 bg-orange-400 rounded"
                  >
                    Edit
                  </button>
                  <button className="py-[4px] px-2 bg-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)} />
    </>
  );
};

export default Table;
