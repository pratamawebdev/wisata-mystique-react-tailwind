import React from "react";
import useActivities from "../../hooks/useActivities";
import { useState, useEffect } from "react";

const GalleryActivities = () => {
  const { data, loading, error, setConfigActivities, configActivities } =
    useActivities();
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    if (data && configActivities.key === "get") {
      setDatalist(data?.data);
    }
    if (configActivities.key === "create") {
      console.log(data?.message);
    }
    return () => {};
  }, [data, loading, error, configActivities]);

  if (loading) return <div>Loading!!</div>;

  return (
    <div className="grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
      {datalist.slice(0, 1).map((v, i) => (
        <img
          key={i}
          className="object-cover object-center w-full h-full col-span-2 row-span-2 md:col-span-3 "
          src={v.imageUrls}
          alt={`Activity ${v.name}`}
        />
      ))}
      {datalist.slice(2).map((v, i) => (
        <img
          key={i}
          className="object-cover w-full h-full"
          src={v.imageUrls}
          alt={`Activity ${v.name}`}
        />
      ))}
    </div>
  );
};

export default GalleryActivities;
