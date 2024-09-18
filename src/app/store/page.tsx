// https://v0.dev/chat/FmwamKz6rrr
// 'use client'
// import Image from 'next/image'
// import { ChevronLeft, Star } from 'lucide-react'
// import Link from 'next/link'

// export default function Component() {
//   const restaurants = [
//     { 
//       name: 'Hana Chicken', 
//       description: 'Fried Chicken', 
//       time: '15 mins', 
//       rating: '4.8', 
//       price: '$15',
//       categories: ['Chicken', 'Fast Food']
//     },
//     { 
//       name: 'Bamsu Restaurant', 
//       description: 'Chicken, Salad, Sandwich & Hotdogs', 
//       time: '20 mins', 
//       rating: '4.1', 
//       price: '$12',
//       categories: ['Salad', 'Sandwich']
//     },
//     { 
//       name: 'Neighbor Milk', 
//       description: 'Dairy Drinks & Smoothies', 
//       time: '35 mins', 
//       rating: '4.1', 
//       price: '$8',
//       categories: ['Drinks', 'Smoothies']
//     },
//   ]

//   return (
//     <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow">
//       <div className="px-4 py-4 flex items-center border-b border-gray-200">
//         <Link href="/">
//         <ChevronLeft className="w-6 h-6 text-gray-600" />
//         </Link>
//         <h1 className="text-xl font-semibold ml-4">Fast Food</h1>
//       </div>
      
//       <div className="flex space-x-4 px-4 py-3 text-sm overflow-x-auto whitespace-nowrap">
//         <span className="text-blue-500">Sort by</span>
//         <span className="text-gray-600">Favorite</span>
//         <span className="text-gray-600">Near you</span>
//         <span className="text-gray-600">Parn</span>
//       </div>
      
//       <div className="px-4 py-2 space-y-4">
//         {restaurants.map((restaurant, index) => (
//           <div key={index} className="flex items-center space-x-4">
//             <Image 
//               src={`https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=80&width=80`} 
//               alt={restaurant.name} 
//               width={80} 
//               height={80} 
//               className="rounded-lg"
//             />
//             <div className="flex-grow">
//               <div className="flex justify-between items-start">
//                 <h2 className="font-semibold">{restaurant.name}</h2>
//                 <span className="text-sm font-semibold text-gray-700">{restaurant.price}</span>
//               </div>
//               <p className="text-sm text-gray-500">{restaurant.description}</p>
//               <div className="flex items-center text-sm mt-1">
//                 <span className="text-gray-500 mr-2">{restaurant.time}</span>
//                 <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                 <span className="text-yellow-500 ml-1">{restaurant.rating}</span>
//               </div>
//               <div className="flex flex-wrap gap-1 mt-1">
//                 {restaurant.categories.map((category, catIndex) => (
//                   <span key={catIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
//                     {category}
//                   </span>
//                 ))}
//                 {index === 0 && (
//                   <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">
//                     Near you
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <div className="px-4 py-3 text-center text-blue-500 border-t border-b border-gray-200">
//         See all
//       </div>
      
//       <div className="px-4 py-4">
//         <div className="relative">
//           <Image 
//             src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=150&width=400" 
//             alt="Tasty Dishes" 
//             width={400} 
//             height={150} 
//             className="rounded-lg"
//           />
//           <div className="absolute bottom-4 left-4 text-white font-semibold text-xl">
//             Tasty Dishes
//           </div>
//         </div>
//       </div>
      
//       <div className="px-4 py-3 flex justify-between items-center">
//         <h2 className="font-semibold">Recommended for you</h2>
//         <span className="text-blue-500 text-sm">View all</span>
//       </div>
//     </div>
//   )
// }

// https://v0.dev/chat/FmwamKz6rrr
'use client'
import Image from 'next/image'
import {  Star, ShoppingCart, Clock, MapPin, Search, Filter, Menu, X, Home, Calendar, HeartHandshake, Rocket, Store, History } from 'lucide-react'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

export default function Stores() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const router = useRouter() 
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
    { 
      name: 'Pizza Palace', 
      description: 'Authentic Italian Pizza', 
      time: '25 mins', 
      rating: '4.5', 
      price: '$18',
      categories: ['Pizza', 'Italian']
    },
  ]

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* <Menu className="w-6 h-6 mr-4 cursor-pointer" /> */}
            <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => router.push('/')}>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/store')}>
                <Store className="mr-2 h-4 w-4" />
                <span>Store</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/events')}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Events</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/support/dashboard')}>
                <HeartHandshake className="mr-2 h-4 w-4" />
                <span>Student Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/startups')}>
                <Rocket className="mr-2 h-4 w-4" />
                <span>Startup Projects</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            <h1 className="text-2xl font-bold">Store</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Filter className="w-6 h-6 cursor-pointer" />
            <History className="w-6 h-6 cursor-pointer" onClick={() => router.push('/store/history')}/>
            <div className="lg:hidden">
              <ShoppingCart className="w-6 h-6 cursor-pointer" onClick={() => setIsCartOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <ul className="flex space-x-4 overflow-x-auto pb-2">
            {['All', 'Fast Food', 'Healthy', 'Pizza', 'Asian', 'Desserts'].map((category, index) => (
              <li key={index} className="cursor-pointer hover:bg-gray-200 px-4 py-2 rounded whitespace-nowrap">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow overflow-hidden">
        <div className="container mx-auto p-4 h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 overflow-y-auto px-0 lg:px-4">
            <h2 className="text-2xl font-semibold mb-4">Featured Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <Image 
                    src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=200&width=400`} 
                    alt={restaurant.name} 
                    width={400} 
                    height={200} 
                    className="w-full object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                      <span className="text-lg font-semibold text-gray-700">{restaurant.price}</span>
                    </div>
                    <p className="text-gray-500 mb-2">{restaurant.description}</p>
                    <div className="flex items-center text-sm mb-2">
                      <Clock className="w-4 h-4 mr-1 text-gray-500" />
                      <span className="text-gray-500 mr-2">{restaurant.time}</span>
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-yellow-500 ml-1">{restaurant.rating}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
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
          </div>

          <div className={`w-full lg:w-1/3 mt-4 lg:mt-0 lg:pl-4 overflow-y-auto fixed inset-y-0 right-0 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white lg:bg-transparent z-50`}>
            <div className="p-4 lg:p-0">
              <div className="flex justify-between items-center lg:hidden mb-4">
                <h2 className="text-xl font-semibold">Your Order</h2>
                <X className="w-6 h-6 cursor-pointer" onClick={() => setIsCartOpen(false)} />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image 
                        src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=50&width=50" 
                        alt="Food item" 
                        width={50} 
                        height={50} 
                        className="rounded-md mr-3"
                      />
                      <div>
                        <h3 className="font-semibold">Chicken Burger</h3>
                        <p className="text-sm text-gray-500">x1</p>
                      </div>
                    </div>
                    <span className="font-semibold">$8.99</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image 
                        src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=50&width=50" 
                        alt="Food item" 
                        width={50} 
                        height={50} 
                        className="rounded-md mr-3"
                      />
                      <div>
                        <h3 className="font-semibold">French Fries</h3>
                        <p className="text-sm text-gray-500">x1</p>
                      </div>
                    </div>
                    <span className="font-semibold">$3.99</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">$12.98</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-semibold">$2.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>$14.98</span>
                  </div>
                </div>
                <Button
                  onClick={() => router.push('/store/checkout')}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300">
                  Place Order
                </Button>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Delivery Time: 30-45 minutes</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Delivery Address: 123 Main St, City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}