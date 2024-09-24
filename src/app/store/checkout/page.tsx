"use client";
// https://v0.dev/chat/FmwamKz6rrr
import { useState } from "react";
import {
  CreditCard,
  Calendar,
  Lock,
  CheckCircle,
  Truck,
  Clock,
  MapPin,
  AlertCircle,
  CircleDollarSign,
  Apple,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const router = useRouter();
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Button
            onClick={() => router.push("/store")}
            size="icon"
            variant="outline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Back</span>
          </Button>
          {/* <ChevronLeft onClick={() => router.push('/store')} className="h-6 w-6 text-gray-500 mr-4 cursor-pointer" /> */}
          <h1 className="text-2xl font-semibold text-gray-900 ml-2">
            Checkout
          </h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </h3>
                <div className="flex space-x-4">
                  <button
                    className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                      paymentMethod === "credit"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("credit")}
                  >
                    <CreditCard className="mr-2" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                      paymentMethod === "paypal"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <CircleDollarSign className="mr-2" />
                    <span>PayPal</span>
                  </button>
                  <button
                    className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                      paymentMethod === "apple"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("apple")}
                  >
                    <Apple className="mr-2" />
                    <span>Apple Pay</span>
                  </button>
                </div>
              </div>
              {paymentMethod === "credit" && (
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        maxLength={19}
                      />
                      <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Expiry Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="expiryDate"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) =>
                            setExpiryDate(formatExpiryDate(e.target.value))
                          }
                          maxLength={5}
                        />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cvv"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) =>
                            setCvv(
                              e.target.value.replace(/\D/g, "").slice(0, 3),
                            )
                          }
                          maxLength={3}
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {paymentMethod === "paypal" && (
                <div className="text-center py-4">
                  <p className="text-gray-600 mb-4">
                    You will be redirected to PayPal to complete your payment.
                  </p>
                  <Image
                    src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=40&width=150"
                    alt="PayPal"
                    width={150}
                    height={40}
                    className="mx-auto"
                  />
                </div>
              )}
              {paymentMethod === "apple" && (
                <div className="text-center py-4">
                  <p className="text-gray-600 mb-4">
                    Complete your payment with Apple Pay.
                  </p>
                  <Image
                    src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=40&width=150"
                    alt="Apple Pay"
                    width={150}
                    height={40}
                    className="mx-auto"
                  />
                </div>
              )}
              <Button
                onClick={() => router.push("/store/history")}
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4"
              >
                Pay $14.98
              </Button>
            </div>
            <div className="mt-6 bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                Delivery Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Standard Delivery</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Estimated delivery time: 30-45 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Delivery Address: 123 Main St, Anytown, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="bg-white shadow-sm rounded-lg p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=64&width=64"
                      alt="Chicken Burger"
                      width={64}
                      height={64}
                      className="rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">Chicken Burger</h3>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                  </div>
                  <span className="font-semibold">$8.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=64&width=64"
                      alt="French Fries"
                      width={64}
                      height={64}
                      className="rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">French Fries</h3>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                  </div>
                  <span className="font-semibold">$3.99</span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">$12.98</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">$2.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$14.98</span>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white shadow-sm rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Order Details</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Your order is eligible for free delivery</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Please make sure your address is correct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; 2024 Beekrowd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
