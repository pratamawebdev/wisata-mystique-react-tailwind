import { useEffect, useState } from "react";
import useCategory from "../hooks/useCategory";

const CategoryPage = () => {
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
          <div className="w-64 duration-500 bg-black shadow-md rounded-xl hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="object-cover w-full h-44 rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <p className="block text-lg font-bold text-black capitalize truncate">
                  Product Name
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
