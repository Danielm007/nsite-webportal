import React, { useRef } from "react";
import { toast } from "react-toastify";
import { apiEndpoint } from "../../api/apiEndpoint";
import background from "../../assets/background.png";
import logo from "../../assets/logo.svg";

export const Login = () => {
  // Referencias
  const nameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  // handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current!.value;
    const password = passwordRef.current!.value;
    if (name.trim().length === 0 || password.trim().length === 0) {
      toast.error("You must provide name and password");
      return;
    }
    reqLogin(name, password);
  };

  // sendRequestLogin
  const reqLogin = async (name: string, password: string) => {
    try {
      const res = await apiEndpoint.post("/user/login", {
        email: name,
        password,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <nav
        className="w-[350px] bg-cyan-300 h-[100vh] flex flex-col items-center"
        style={{
          backgroundImage: `url('${background}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={logo} className="mt-24 w-[65px]" alt="logo" />
        <h2 className="text-white mt-11 text-xl text-center font-bold w-[80%]">
          Welcome to the next generation diagnosis
        </h2>
      </nav>
      <div className="w-[100%] pl-24  h-[100vh] flex flex-col justify-center items-start">
        <h1 className=" font-bold">Sign In to NSite</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            type="text"
            placeholder="First Name"
            className="mt-9 border px-3 py-2 rounded-xl placeholder-black w-[333px] outline-none"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="mt-8 border px-3 py-2 rounded-xl placeholder-black outline-none"
          />
          <input
            type="submit"
            value="Login"
            className="mt-7 bg-[#338CC7] text-white py-2 px-6 rounded-xl w-[60%]"
          />
        </form>
      </div>
    </div>
  );
};
