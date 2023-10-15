import useApi from "../../hooks/useApi";
import Modal from "../Fragments/Modal";
import Table from "../Fragments/Table";
import { useEffect, useState } from "react";

const ManageLayout = ({ title, titleButton }) => {
  const endpoint = "api/v1/create-banner";
  const { createApiData } = useApi(endpoint);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleAddBanner = async (event) => {
    event.preventDefault();
    try {
      const formData = { name: name, imageUrl: imageUrl };
      await createApiData(endpoint, formData);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding banner:", error);
    }
  };

  return (
    <>
      <div className="p-6 bg-white border border-gray-100 rounded-md shadow-md shadow-black/5 ">
        <div className="flex items-start justify-between mb-4">
          <div className="font-medium">{title}</div>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="py-[4px] px-2 bg-green-500 rounded"
            >
              {titleButton}
            </button>
          </div>
        </div>
        <form className="flex items-center mb-4">
          <div className="w-full mr-2 ">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm border border-gray-100 rounded-md outline-none bg-gray-50 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button className="text-sm py-2 pl-4 pr-10 bg-gray-50 border border-gray-100 rounded-md focus:border-blue-500 outline-none appearance-none bg-select-arrow bg-no-repeat bg-[length:16px_16px] bg-[right_16px_center]">
            Search
          </button>
        </form>
        <div className="overflow-x-auto">
          <Table />
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-4 bg-white rounded">
          <h2 className="mb-4 text-lg font-semibold">Add Banner</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 mt-1 border rounded"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-600"
              >
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                className="w-full p-2 mt-1 border rounded"
                onChange={(event) => setImageUrl(event.target.value)}
              />
            </div>
            <button
              onClick={handleAddBanner}
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ManageLayout;
