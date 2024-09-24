// https://v0.dev/chat/3_ZkhAryuZe
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Lock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginComponent({
  onForgotPassword,
}: {
  onForgotPassword: () => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Hello Again!</h2>
        <p className="text-sm text-gray-500">Log into your account</p>
      </div>
      <form className="space-y-6">
        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            className="pl-10 pr-4 py-3 w-full border-gray-300 text-sm"
            placeholder="Enter your email address"
            type="email"
          />
        </div>
        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            className="pl-10 pr-10 py-3 w-full border-gray-300 text-sm"
            placeholder="Enter your password"
            type="password"
          />
          <Eye
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            size={20}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={onForgotPassword}
            className="text-sm hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <Link href="/">
          <Button className="w-full  text-white py-3">Continue</Button>
        </Link>
      </form>
      <div className="flex items-center justify-center space-x-4">
        <div className="h-px bg-gray-300 w-full" />
        <span className="text-sm text-gray-500">or</span>
        <div className="h-px bg-gray-300 w-full" />
      </div>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="rounded-full p-2">
          <Image
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=24&width=24"
            alt="Google"
            width={24}
            height={24}
          />
        </Button>
        <Button variant="outline" className="rounded-full p-2">
          <Image
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=24&width=24"
            alt="Facebook"
            width={24}
            height={24}
          />
        </Button>
        <Button variant="outline" className="rounded-full p-2">
          <Image
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=24&width=24"
            alt="Apple"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </>
  );
}
