import CardPromo from "../Fragments/CardPromo";

const Promos = () => {
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

        <div className="h-auto p-4 mx-auto overflow-hidden 2xl:max-w-5xl">
          <div className="flex  gap-8 md:w-full sm:w-[50%] xs:w-[50%] w-[480%] animate-slide">
            <CardPromo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promos;
