import { useState, useEffect } from "react";
import useBanner from "../../hooks/useBanner";

const BannerSlider = () => {
  const { data, loading, error, setConfigBanner, configBanner } = useBanner();
  const [datalist, setDatalist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data && configBanner.key === "get") {
      setDatalist(data?.data);
    }
    if (configBanner.key === "create") {
      console.log(data?.message);
    }

    const autoSlide = () => {
      const isLastSlide = currentIndex === datalist.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const intervalId = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [data, loading, error, configBanner, currentIndex, datalist]);

  if (loading) return <div>Loading!!</div>;

  return (
    <div className="relative w-full h-screen m-auto group">
      <div
        style={{ backgroundImage: `url(${datalist[currentIndex]?.imageUrl})` }}
        className="relative w-full h-full duration-500 bg-center bg-cover"
      >
        <div className="absolute text-4xl font-bold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {datalist[currentIndex]?.name}
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? datalist.length - 1 : prev - 1
            )
          }
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === datalist.length - 1 ? 0 : prev + 1
            )
          }
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="absolute flex justify-center py-2 bottom-4 left-1/2 right-1/2">
        {datalist.slice(0, 5).map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dots"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
