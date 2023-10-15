const FormRegister = () => {
  return (
    <form
      className="flex flex-col pt-3 md:pt-8"
      // onSubmit="event.preventDefault();"
    >
      <div className="flex flex-row gap-2">
        <div className="flex flex-col pt-4">
          <label htmlFor="email" className="text-lg dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-col pt-4">
          <label htmlFor="email" className="text-lg dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="your name"
            className="w-full px-1 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none md:w-full focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <div className="flex flex-col pt-4">
        <label htmlFor="password" className="text-lg dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex flex-col pt-4">
        <label htmlFor="password" className="text-lg dark:text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        className="p-2 mt-8 text-lg font-bold text-white bg-[#015AB8] hover:bg-gray-700"
      >
        Register
      </button>
    </form>
  );
};

export default FormRegister;
