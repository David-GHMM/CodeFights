import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { authModalState } from "@/atoms/authModalAtom";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [authModal] = useAtom(authModalState);
  const closeModal = useCloseModal();

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"
        onClick={closeModal}
      ></div>
      <div className="w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-black rounded-lg shadow relative w-full bg-gradient-to-b from-white to-gray-300 mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-black"
                onClick={closeModal}
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            {authModal.type === "login" ? (
              <SignIn />
            ) : authModal.type === "register" ? (
              <SignUp />
            ) : (
              <PasswordReset />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;

function useCloseModal() {
  const [, setAuthModal] = useAtom(authModalState);

  const closeModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return closeModal;
}
