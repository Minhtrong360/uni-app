// https://v0.dev/chat/FmwamKz6rrr
'use client'
import Image from 'next/image'
import { ChevronLeft, Star } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  const restaurants = [
    { 
      name: 'Hana Chicken', 
      description: 'Fried Chicken', 
      time: '15 mins', 
      rating: '4.8', 
      price: '$15',
      categories: ['Chicken', 'Fast Food']
    },
    { 
      name: 'Bamsu Restaurant', 
      description: 'Chicken, Salad, Sandwich & Hotdogs', 
      time: '20 mins', 
      rating: '4.1', 
      price: '$12',
      categories: ['Salad', 'Sandwich']
    },
    { 
      name: 'Neighbor Milk', 
      description: 'Dairy Drinks & Smoothies', 
      time: '35 mins', 
      rating: '4.1', 
      price: '$8',
      categories: ['Drinks', 'Smoothies']
    },
  ]

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow">
      <div className="px-4 py-4 flex items-center border-b border-gray-200">
        <Link href="/">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-semibold ml-4">Fast Food</h1>
      </div>
      
      <div className="flex space-x-4 px-4 py-3 text-sm overflow-x-auto whitespace-nowrap">
        <span className="text-blue-500">Sort by</span>
        <span className="text-gray-600">Favorite</span>
        <span className="text-gray-600">Near you</span>
        <span className="text-gray-600">Parn</span>
      </div>
      
      <div className="px-4 py-2 space-y-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Image 
              src={`https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=80&width=80`} 
              alt={restaurant.name} 
              width={80} 
              height={80} 
              className="rounded-lg"
            />
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h2 className="font-semibold">{restaurant.name}</h2>
                <span className="text-sm font-semibold text-gray-700">{restaurant.price}</span>
              </div>
              <p className="text-sm text-gray-500">{restaurant.description}</p>
              <div className="flex items-center text-sm mt-1">
                <span className="text-gray-500 mr-2">{restaurant.time}</span>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-yellow-500 ml-1">{restaurant.rating}</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {restaurant.categories.map((category, catIndex) => (
                  <span key={catIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    {category}
                  </span>
                ))}
                {index === 0 && (
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">
                    Near you
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-4 py-3 text-center text-blue-500 border-t border-b border-gray-200">
        See all
      </div>
      
      <div className="px-4 py-4">
        <div className="relative">
          <Image 
            src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=150&width=400" 
            alt="Tasty Dishes" 
            width={400} 
            height={150} 
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">
            Tasty Dishes
          </div>
        </div>
      </div>
      
      <div className="px-4 py-3 flex justify-between items-center">
        <h2 className="font-semibold">Recommended for you</h2>
        <span className="text-blue-500 text-sm">View all</span>
      </div>
    </div>
  )
}