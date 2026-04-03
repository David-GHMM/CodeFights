import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const [, setAuthModalState] = useAtom(authModalState);
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password)
      return alert("Пожалуйста, заполните все поля!");
    try {
      const curUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!curUser) return;
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
    }
  };

  useEffect(() => {
    if (error)
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
  }, [error]);

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleSignIn}>
      <h3 className="text-xl font-medium text-black">Sign In</h3>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="
                    border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                    bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                    text-sm px-5 py-2.5 text-center bg-buttons-color hover:bg-buttons-color-s"
      >
        {loading ? "Loading..." : "Sign In"}
      </button>

      <div className="flex items-center justify-between mt-5 box-border ">
        <button
          className="flex box-border justify-end"
          onClick={() => handleClick("forgotPassword")}
        >
          <a
            href="#"
            className="text-sm block text-buttons-color-s hover:underline w-full text-left"
          >
            Forgot Password?
          </a>
        </button>
        <a
          href="#"
          className="text-sm text-buttons-color-s hover:underline"
          onClick={() => handleClick("register")}
        >
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default SignIn;
