import useCategory from "../../hooks/useCategory";
import { useState, useEffect } from "react";

const HomeCardCategory = () => {
  const { data, loading, error, setConfigCategory, configCategory } =
    useCategory();
  const [datalist, setDatalist] = useState([]);

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
    <>
      {datalist.slice(0, 6).map((v, i) => (
        <div
          key={i}
          className="duration-500 bg-white shadow-md w-66 rounded-xl hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={v.imageUrl}
              alt="Product"
              className="object-cover w-full h-44 rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="block text-lg font-bold text-black capitalize truncate">
                {v.name}
              </p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default HomeCardCategory;
