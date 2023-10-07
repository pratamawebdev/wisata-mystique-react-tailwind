import { useEffect, useState } from "react";
import useCategory from "../hooks/useCategory";

const CategoryPage = () => {
  const { data, loading, error, setConfigCategory, configCategory } =
    useCategory();
  const [datalist, setDatalist] = useState([]);

  const handleTambah = () => {
    setConfigCategory({
      key: "create",
      data: {
        name: "Category 1",
        imageUrl:
          "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/12/08/9c6ae660-1799-4276-b81d-f8b0b85669d6-1638949473006-1e6c55a1b1edca6bf250012af2cc79e2.jpg",
      },
    });
  };

  const handleEdit = () => {
    setConfigCategory({
      key: "update",
      data: {
        name: "Category 1",
        imageUrl:
          "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/12/08/9c6ae660-1799-4276-b81d-f8b0b85669d6-1638949473006-1e6c55a1b1edca6bf250012af2cc79e2.jpg",
      },
    });
  };

  useEffect(() => {
    if (data && configCategory.key === "get") {
      setDatalist(data?.data);
    }
    if (configCategory.key === "create") {
      console.log(data?.message);
    }
    return () => {};
  }, [data, loading, error, configCategory]);

  if (loading) return <div>Loading!!</div>;

  return (
    <section className="transition-all bg-gray-600 destinations section duration-400 dark:bg-gray-900">
      <div className="container grid gap-12 destinations__container">
        <div className="text-center destinations__data">
          <p className="destinations__subtitle section-subtitle">
            Best Destinations
          </p>
          <h1 className="destinations__title section-title">
            Explore the best places with us
          </h1>
        </div>

        <div className="destinations__group grid grid-cols-[.8fr] justify-center gap-8 xs:mx-auto xs:max-w-sm xs:grid-cols-1 lg:max-w-2xl lg:grid-cols-2 xl:max-w-5xl xl:grid-cols-3 bg-blue-400">
          <div className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="object-cover h-80 w-72 rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="mr-3 text-xs text-gray-400 uppercase">
                  Brand
                </span>
                <p className="block text-lg font-bold text-black capitalize truncate">
                  Product Name
                </p>
                <div className="flex items-center">
                  <p className="my-3 text-lg font-semibold text-black cursor-auto">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 text-sm text-gray-600 cursor-auto">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="object-cover h-80 w-72 rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="mr-3 text-xs text-gray-400 uppercase">
                  Brand
                </span>
                <p className="block text-lg font-bold text-black capitalize truncate">
                  Product Name
                </p>
                <div className="flex items-center">
                  <p className="my-3 text-lg font-semibold text-black cursor-auto">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 text-sm text-gray-600 cursor-auto">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="object-cover h-80 w-72 rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="mr-3 text-xs text-gray-400 uppercase">
                  Brand
                </span>
                <p className="block text-lg font-bold text-black capitalize truncate">
                  Product Name
                </p>
                <div className="flex items-center">
                  <p className="my-3 text-lg font-semibold text-black cursor-auto">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 text-sm text-gray-600 cursor-auto">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="object-cover h-80 w-72 rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="mr-3 text-xs text-gray-400 uppercase">
                  Brand
                </span>
                <p className="block text-lg font-bold text-black capitalize truncate">
                  Product Name
                </p>
                <div className="flex items-center">
                  <p className="my-3 text-lg font-semibold text-black cursor-auto">
                    $149
                  </p>
                  <del>
                    <p className="ml-2 text-sm text-gray-600 cursor-auto">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
