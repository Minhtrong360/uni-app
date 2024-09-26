// // https://v0.dev/chat/MQCaVDbD4dV

/////
"use client";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  Clock,
  MapPin,
  X,
  History,
  Plus,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Stores() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const restaurants = [
    {
      name: "Backpack",
      description: "Uni backpack",
      time: "15 mins",
      rating: "4.8",
      price: "$15",
      categories: ["Stationary", "Backpacks"],
      image:
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/store/z5865010369321_6e39c68276ab32af452ac7dab339ca98.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9zdG9yZS96NTg2NTAxMDM2OTMyMV82ZTM5YzY4Mjc2YWIzMmFmNDUyYWM3ZGFiMzM5Y2E5OC5qcGciLCJpYXQiOjE3MjcyMzQ5NzgsImV4cCI6MTc1ODc3MDk3OH0.jwOwYDNHfBxIpMC1nXtQ44-03IacmLHjdv0VADQLY3Y&t=2024-09-25T03%3A29%3A38.091Z",
    },
    {
      name: "Uni Teddy Bear",
      description: "Uni Teddy Bear",
      time: "20 mins",
      rating: "4.1",
      price: "$12",
      categories: ["Accessories", "Teddies"],
      image:
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/store/z5865054859372_c14afc6aabe5cfc15e6569d1f728a09d.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9zdG9yZS96NTg2NTA1NDg1OTM3Ml9jMTRhZmM2YWFiZTVjZmMxNWU2NTY5ZDFmNzI4YTA5ZC5qcGciLCJpYXQiOjE3MjcyMzU3NjEsImV4cCI6MTc1ODc3MTc2MX0.0Qtvby5KbZ3YSU_DTqpwuH9UeSoa_vVbE31A7UbobcY&t=2024-09-25T03%3A42%3A40.346Z",
    },
    {
      name: "Hat",
      description: "Uni Hat",
      time: "35 mins",
      rating: "4.1",
      price: "$8",
      categories: ["Accessories", "Hats"],
      image:
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/store/z5865010377332_67de09c49a656cf7934f806d3a1f0944.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9zdG9yZS96NTg2NTAxMDM3NzMzMl82N2RlMDljNDlhNjU2Y2Y3OTM0ZjgwNmQzYTFmMDk0NC5qcGciLCJpYXQiOjE3MjcyMzU0ODgsImV4cCI6MTc1ODc3MTQ4OH0.vj0nJ3xYthww83gFDJ22-G-qALDdgvCSifC5QsQg0Dk&t=2024-09-25T03%3A38%3A07.625Z",
    },
    {
      name: "Canvas Bag",
      description: "Uni Canvas Bag",
      time: "25 mins",
      rating: "4.5",
      price: "$18",
      categories: ["Accessories", "Bags"],
      image:
        "https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/store/z5865054842124_c884f5bfba90e1b2689d5975c8415b2f.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9zdG9yZS96NTg2NTA1NDg0MjEyNF9jODg0ZjViZmJhOTBlMWIyNjg5ZDU5NzVjODQxNWIyZi5qcGciLCJpYXQiOjE3MjcyMzU3MDMsImV4cCI6MTc1ODc3MTcwM30.tffeeAenwLFMelppXbVnoc3F0ELqNzKqcvLGnpeeHFc&t=2024-09-25T03%3A41%3A42.624Z",
    },
  ];

  const categories = [
    "All",
    "Fast Food",
    "Healthy",
    "Pizza",
    "Asian",
    "Desserts",
  ];

  return (
    <div className="flex h-screen flex-col">
      <nav className="flex justify-between bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-end gap-2">
            <Button
              onClick={() => router.push("/store/addproduct")}
              className="flex items-center rounded-md bg-black px-4 py-2 text-white transition duration-300 hover:bg-gray-800"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add
            </Button>
            <History
              className="h-6 w-6 cursor-pointer"
              onClick={() => router.push("/store/history")}
            />
            <div className="lg:hidden">
              <ShoppingCart
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow overflow-hidden">
        <div className="container mx-auto flex h-full flex-col p-4 lg:flex-row">
          <div className="w-full overflow-y-auto px-0 lg:w-3/4 lg:px-4">
            <h2 className="mb-4 text-2xl font-semibold">
              Featured Restaurants
            </h2>

            {/* Categories Checkbox */}
            <div className="mb-4 flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <label key={index} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {category}
                </label>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                >
                  <Image
                    src={`${restaurant.image}?height=200&width=400`}
                    alt={restaurant.name}
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="flex-grow p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-xl font-semibold">
                        {restaurant.name}
                      </h3>
                      <span className="text-lg font-semibold text-gray-700">
                        {restaurant.price}
                      </span>
                    </div>
                    <p className="mb-2 text-gray-500">
                      {restaurant.description}
                    </p>
                    <div className="mb-2 flex items-center text-sm">
                      <Clock className="mr-1 h-4 w-4 text-gray-500" />
                      <span className="mr-2 text-gray-500">
                        {restaurant.time}
                      </span>
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      <span className="ml-1 text-yellow-500">
                        {restaurant.rating}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.categories.map((category, catIndex) => (
                        <span
                          key={catIndex}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          {category}
                        </span>
                      ))}
                      {index === 0 && (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                          Near you
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`fixed inset-y-0 right-0 mt-4 w-full transform overflow-y-auto lg:mt-0 lg:w-1/4 lg:pl-4 ${isCartOpen ? "translate-x-0" : "translate-x-full"} z-50 bg-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:bg-transparent`}
          >
            <div className="p-4 lg:p-0">
              <div className="mb-4 flex items-center justify-between lg:hidden">
                <h2 className="text-xl font-semibold">Your Order</h2>
                <X
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setIsCartOpen(false)}
                />
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-md">
                <div className="mb-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/store/z5865054842124_c884f5bfba90e1b2689d5975c8415b2f.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9zdG9yZS96NTg2NTA1NDg0MjEyNF9jODg0ZjViZmJhOTBlMWIyNjg5ZDU5NzVjODQxNWIyZi5qcGciLCJpYXQiOjE3MjcyMzU3MDMsImV4cCI6MTc1ODc3MTcwM30.tffeeAenwLFMelppXbVnoc3F0ELqNzKqcvLGnpeeHFc&t=2024-09-25T03%3A41%3A42.624Z"
                        alt="Food item"
                        width={50}
                        height={50}
                        className="mr-3 rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold">Canvas Bag</h3>
                        <p className="text-sm text-gray-500">x1</p>
                      </div>
                    </div>
                    <span className="font-semibold">$8.99</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        src="https://dheunoflmddynuaxiksw.supabase.co/storage/v1/object/sign/vlu-app-img/store/z5865054859372_c14afc6aabe5cfc15e6569d1f728a09d.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2bHUtYXBwLWltZy9zdG9yZS96NTg2NTA1NDg1OTM3Ml9jMTRhZmM2YWFiZTVjZmMxNWU2NTY5ZDFmNzI4YTA5ZC5qcGciLCJpYXQiOjE3MjcyMzU3NjEsImV4cCI6MTc1ODc3MTc2MX0.0Qtvby5KbZ3YSU_DTqpwuH9UeSoa_vVbE31A7UbobcY&t=2024-09-25T03%3A42%3A40.346Z"
                        alt="Food item"
                        width={50}
                        height={50}
                        className="mr-3 rounded-md"
                      />
                      <div>
                        <h3 className="font-semibold">Uni Teddy Bear</h3>
                        <p className="text-sm text-gray-500">x1</p>
                      </div>
                    </div>
                    <span className="font-semibold">$3.99</span>
                  </div>
                </div>
                <div className="mb-6 border-t border-gray-200 pt-4">
                  <div className="mb-2 flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">$12.98</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold">$2.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$14.98</span>
                  </div>
                </div>
                <Button
                  onClick={() => router.push("/store/checkout")}
                  className="w-full rounded-lg bg-black py-3 font-semibold text-white transition duration-300 hover:bg-gray-800"
                >
                  Place Order
                </Button>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2 h-5 w-5" />
                    <span>Delivery Time: 30-45 minutes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>Delivery Address: 123 Main St, City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
