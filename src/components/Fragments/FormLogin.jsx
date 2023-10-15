import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const { data, setConfigAuth, configAuth, token, error } = useAuth();
  const [email, setEmail] = useState("");
  const [datalist, setDatalist] = useState([]);
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // Set konfigurasi untuk login
    setConfigAuth({
      key: "login_user",
      data: {
        email,
        password,
      },
    });
  };

  // useEffect(() => {
  //   if (!configAuth.key || !email || !password) {
  //     return;
  //   }

  //   if (data && configAuth.key === "get") {
  //     setDatalist(data?.data);
  //   }

  //   if (configAuth.key === "login_user" && token) {
  //     console.log("Login berhasil, token:", token);
  //     navigate("/");
  //   }

  //   // Tambahkan logika penanganan kesalahan
  //   if (configAuth.key === "login_user" && error) {
  //     console.error("Login gagal:", error);
  //     // Tindakan lain yang mungkin Anda inginkan jika login gagal
  //   }

  //   return () => {};
  // }, [data, navigate, configAuth, token, error]);

  return (
    <form className="flex flex-col pt-3 md:pt-8">
      <div className="flex flex-col pt-4">
        <label htmlFor="email" className="text-lg dark:text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex flex-col pt-4">
        <label htmlFor="password" className="text-lg dark:text-white">
          Password
        </label>
        <input
          autoComplete="no"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        onClick={handleLogin}
        type="submit"
        className="p-2 mt-8 text-lg font-bold text-white bg-[#015AB8] hover:bg-gray-700"
      >
        Login
      </button>
    </form>
  );
};

export default FormLogin;
