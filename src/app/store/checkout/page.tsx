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
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="">
        <div className="mx-auto flex items-center px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="ml-2 text-2xl font-semibold text-gray-900">
            Checkout
          </h1>
        </div>
      </header>
      <main className="container mx-auto flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Payment Details</h2>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="mb-2 text-sm font-medium text-gray-700">
                  Payment Method
                </h3>
                {/* <div className="flex space-x-4">
                  <button
                    className={`flex items-center justify-center rounded-md border px-4 py-2 ${
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
                    className={`flex items-center justify-center rounded-md border px-4 py-2 ${
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
                    className={`flex items-center justify-center rounded-md border px-4 py-2 ${
                      paymentMethod === "apple"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("apple")}
                  >
                    <Apple className="mr-2" />
                    <span>Apple Pay</span>
                  </button>
                </div> */}
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  <button
                    className={`flex min-w-[120px] items-center justify-center rounded-md border px-4 py-2 ${
                      paymentMethod === "credit"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("credit")}
                  >
                    <CreditCard className="mr-2" />
                    <span>Card</span>
                  </button>
                  <button
                    className={`flex min-w-[120px] items-center justify-center rounded-md border px-4 py-2 ${
                      paymentMethod === "ideal"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("ideal")}
                  >
                    <Apple className="mr-2" />
                    <span>Apple</span>
                  </button>

                  <button
                    className={`flex min-w-[120px] items-center justify-center rounded-md border px-4 py-2 ${
                      paymentMethod === "paypal"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <CircleDollarSign className="mr-2" />
                    <span>PayPal</span>
                  </button>
                </div>
              </div>
              {paymentMethod === "credit" && (
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="cardNumber"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Expiry Date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="expiryDate"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cvv"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <div className="py-4 text-center">
                  <p className="mb-4 text-gray-600">
                    You will be redirected to PayPal to complete your payment
                  </p>
                  <Image
                    src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/store/qrcode.png"
                    alt="PayPal"
                    width={150}
                    height={40}
                    className="mx-auto"
                  />
                </div>
              )}
              {paymentMethod === "apple" && (
                <div className="py-4 text-center">
                  <p className="mb-4 text-gray-600">
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
                className="mt-4 w-full rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Pay $14.98
              </Button>
            </div>
            <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">
                Delivery Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Standard Delivery</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Estimated delivery time: 30-45 minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-gray-400" />
                  <span>Delivery Address: 123 Main St, Anytown, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/store/z5865010369321_6e39c68276ab32af452ac7dab339ca98.jpg"
                      alt="Canvas Bag"
                      width={3000}
                      height={4500}
                      className="mr-4 max-h-[64px] max-w-[64px] rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">Uni Backpack</h3>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                  </div>
                  <span className="font-semibold">$8.99</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/public/vlu-app-img/store/z5865010377332_67de09c49a656cf7934f806d3a1f0944.jpg"
                      alt="Uni Teddy Bear"
                      width={3000}
                      height={4500}
                      className="mr-4 max-h-[64px] max-w-[64px] rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">Uni Hat</h3>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                  </div>
                  <span className="font-semibold">$3.99</span>
                </div>
              </div>
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">$12.98</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">$2.00</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$14.98</span>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Order Details</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span>Your order is eligible for free delivery</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
                  <span>Please make sure your address is correct</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 bg-white py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          &copy; 2024 Beekrowd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
