// https://v0.dev/chat/_ilHMZYNF9i
"use client"
import { ArrowLeft, Eye, PenSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"



export default function UserSetting() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto w-full max-w-md bg-white p-8 rounded-3xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
          <ArrowLeft className="w-6 h-6 text-gray-500" />
          </Link>
          <h1 className="text-xl font-semibold">My profile</h1>
          <Link href="/auth"><span className="text-sm">Log out</span> </Link>
        </div>
        <div className="relative mb-6">
          <img
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=100&width=100"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <div className="absolute bottom-0 right-1/3 bg-black rounded-full p-2">
            <PenSquare className="w-4 h-4 text-white" />
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              id="name"
              defaultValue="James Harrid"
              className=" pr-4 py-3 w-full border-gray-300 text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <Input
              id="phone"
              defaultValue="123-456-7890"
              className=" pr-4 py-3 w-full border-gray-300 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              defaultValue="example@email.com"
              className=" pr-4 py-3 w-full border-gray-300 text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                defaultValue="••••••••••"
                className=" pr-4 py-3 w-full border-gray-300 text-sm"
              />
              <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 mb-1">
              Birthday
            </label>
            <Input
              id="birthday"
              placeholder="Set birthday"
              className=" pr-4 py-3 w-full border-gray-300 text-sm"
            />
          </div>
          <Button className="w-full  text-white py-3">
            Save changes
          </Button>
        </form>
      </div>
    </div>
  )
}