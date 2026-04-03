import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const [, setAuthModalState] = useAtom(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };

  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.userName)
      return alert("Пожалуйста, заполните все поля!");
    try {
      toast.loading("Creating your account", {
        position: "top-center",
        toastId: "loadingToast",
      });
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleSignUp}>
      <h3 className="text-xl font-medium text-black">Sign Up</h3>
      <div>
        <input
          type="userName"
          name="userName"
          id="userName"
          onChange={handleChangeInputs}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          onChange={handleChangeInputs}
          placeholder="Email Address"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          onChange={handleChangeInputs}
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-buttons-color hover:bg-buttons-color-s"
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>

      <div className="text-sm text-black">
        Have an account?{" "}
        <a
          href="#"
          className="text-buttons-color-s hover:underline"
          onClick={handleClick}
        >
          Sign In
        </a>
      </div>
    </form>
  );
};

export default SignUp;
