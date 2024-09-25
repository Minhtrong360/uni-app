// https://v0.dev/chat/_ilHMZYNF9i
"use client";
import { ArrowLeft, Eye, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function UserSetting() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/">
            <ArrowLeft className="h-6 w-6 text-gray-500" />
          </Link>
          <h1 className="text-xl font-semibold">My profile</h1>
          <Link href="/auth">
            <span className="text-sm">Log out</span>{" "}
          </Link>
        </div>
        <div className="relative mb-6">
          <Image
            width={100}
            height={100}
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=100&width=100"
            alt="Profile"
            className="mx-auto h-24 w-24 rounded-full"
          />
          <div className="absolute bottom-0 right-1/3 rounded-full bg-black p-2">
            <PenSquare className="h-4 w-4 text-white" />
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              id="name"
              defaultValue="James Harrid"
              className="w-full border-gray-300 py-3 pr-4 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <Input
              id="phone"
              defaultValue="123-456-7890"
              className="w-full border-gray-300 py-3 pr-4 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              defaultValue="example@email.com"
              className="w-full border-gray-300 py-3 pr-4 text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                defaultValue="••••••••••"
                className="w-full border-gray-300 py-3 pr-4 text-sm"
              />
              <Eye className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>
          <div>
            <label
              htmlFor="birthday"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Birthday
            </label>
            <Input
              id="birthday"
              placeholder="Set birthday"
              className="w-full border-gray-300 py-3 pr-4 text-sm"
            />
          </div>
          <Button className="w-full py-3 text-white">Save changes</Button>
        </form>
      </div>
    </div>
  );
}
