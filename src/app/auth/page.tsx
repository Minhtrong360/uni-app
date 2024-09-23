// https://v0.dev/chat/3_ZkhAryuZe
// /src/auth/pages.tsx
"use client";

import Image from "next/image";
import LoginComponent from "./login/page";
import RegisterComponent from "./register/page";
import ForgotPasswordComponent from "./password-recovery/page";
import { FC } from "react";

export interface AuthContainerProps {
  view: "login" | "register" | "forgotPassword";
  onToggleView: (newView: "login" | "register" | "forgotPassword") => void;
}

const AuthContainer: FC<AuthContainerProps> = ({ view, onToggleView }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8 bg-white bg-opacity-90 p-8 rounded-3xl shadow-lg">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-16 h-16">
            <Image
              src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=64&width=64"
              alt="Logo"
              fill
              className="rounded-full"
            />
          </div>
        </div>

        {view === "login" && (
          <LoginComponent onForgotPassword={() => onToggleView("forgotPassword")} />
        )}
        {view === "register" && <RegisterComponent />}
        {view === "forgotPassword" && (
          <ForgotPasswordComponent onBack={() => onToggleView("login")} />
        )}

        {view !== "forgotPassword" && (
          <div className="text-center">
            <button
              onClick={() =>
                onToggleView(view === "login" ? "register" : "login")
              }
              className="text-sm hover:underline"
            >
              {view === "login"
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
