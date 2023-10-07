import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
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
        <BsChevronCompactLeft
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? datalist.length - 1 : prev - 1
            )
          }
          size={30}
        />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === datalist.length - 1 ? 0 : prev + 1
            )
          }
          size={30}
        />
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
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
