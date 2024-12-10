import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { auth } from "@/firebase/firebase";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const [authModal] = useAtom(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

  return (
    <div className="bg-gradient-to-b from-white to-gray-300 h-screen relative">
      <div className="max-w-7xl mx-auto">
        <NavigationBar />
        <div className="flex items-center justify-center h-[calc(100vh-6rem)] pointer-events-none select-none">
          <img src="/logo/hero2.png" alt="Hero" />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};

export default AuthPage;
