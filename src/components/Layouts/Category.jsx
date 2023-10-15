import HomeCardCategory from "../Fragments/HomeCardCategory";

const Category = () => {
  return (
    <section className="transition-all destinations section duration-400 dark:bg-gray-900">
      <div className="container grid gap-12 ">
        <div className="text-center ">
          <p className="destinations__subtitle section-subtitle">
            Best Destinations
          </p>
          <h1 className="destinations__title section-title">
            Explore the best places with us
          </h1>
        </div>

        <div className=" grid grid-cols-[.8fr] justify-center gap-8 xs:mx-auto xs:max-w-sm xs:grid-cols-1 lg:max-w-2xl lg:grid-cols-2 xl:max-w-5xl xl:grid-cols-3">
          <HomeCardCategory />
        </div>
      </div>
    </section>
  );
};

export default Category;
