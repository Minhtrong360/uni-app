// https://v0.dev/chat/3_ZkhAryuZe
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function ForgotPasswordComponent({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Forgot Password</h2>
        <p className="text-sm text-gray-500 text-center">
          Enter your email address and we will send you a link to reset your password
        </p>
      </div>
      <form className="space-y-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            className="pl-10 pr-4 py-3 w-full border-gray-300 text-sm"
            placeholder="Enter your email address"
            type="email"
          />
        </div>
        <Button className="w-full  text-white py-3">
          Send Reset Link
        </Button>
      </form>
      <div className="text-center">
        <button onClick={onBack} className="text hover:underline">
          Back to Login
        </button>
      </div>
    </>
  )
}