// https://v0.dev/chat/3_ZkhAryuZe
"use client";
import { useState } from "react";
import Image from "next/image";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";
import ForgotPasswordComponent from "./components/password-recovery";

export default function AuthContainer() {
  const [view, setView] = useState<"login" | "register" | "forgotPassword">(
    "login",
  );

  const toggleView = (newView: "login" | "register" | "forgotPassword") => {
    setView(newView);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-4">
      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8 rounded-3xl bg-white bg-opacity-90 p-8 shadow-lg">
        <div className="flex w-full items-center justify-between"></div>
        <div className="flex flex-col items-center space-y-2">
          <div className="relative h-16 w-16">
            <Image
              src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/auth/Utah_Utes_-_U_logo.svg.png?t=2024-09-30T02%3A37%3A40.664Z"
              alt="Logo"
              // layout="fill"
              className="max-h-[38px] max-w-[38px] rounded-full object-cover object-center"
              width={300}
              height={300}
            />
          </div>
        </div>

        {view === "login" && (
          <LoginComponent
            onForgotPassword={() => toggleView("forgotPassword")}
          />
        )}
        {view === "register" && <RegisterComponent />}
        {view === "forgotPassword" && (
          <ForgotPasswordComponent onBack={() => toggleView("login")} />
        )}

        {view !== "forgotPassword" && (
          <div className="text-center">
            <button
              onClick={() =>
                toggleView(view === "login" ? "register" : "login")
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
}
