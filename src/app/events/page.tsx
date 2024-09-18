// https://v0.dev/chat/MAcb32KlLGb
"use client"
// import Image from 'next/image'
// import { Menu, Search, MoreHorizontal, Home, Store, Calendar, HeartHandshake, Rocket, Bell, Settings } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// export default function Component() {
//   const router = useRouter()
//   return (
//     <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button variant="ghost" size="icon" className="lg:hidden absolute top-4 left-4">
//             <Menu className="h-6 w-6" />
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className="w-64 p-0">
//           <Sidebar />
//         </SheetContent>
//       </Sheet>

//       <aside className="hidden lg:block w-64 bg-white shadow-md">
//         <Sidebar />
//       </aside>

//       <main className="flex-1 overflow-y-auto">
//         <header className="bg-white shadow-sm sticky top-0 z-10">
//           <div className="flex justify-between items-center p-4">
//             <h1 className="text-2xl font-bold">Campus Events</h1>
//             <div className="flex items-center space-x-4">
//               <Input type="search" placeholder="Search events..." className="w-full max-w-xs hidden md:inline-flex" />
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Search className="h-6 w-6" />
//               </Button>
//               <Button variant="ghost" size="icon">
//                 <Bell className="h-6 w-6" />
//               </Button>
//               <Button
//               onClick={() => router.push('/events/create')}
//               variant="ghost" size="icon" className="hidden sm:inline-flex">
//                 <Settings  className="h-6 w-6" />
//               </Button>
//               <Link href="/user/user-setting">
//               <Image
//                 src="https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=40&width=40"
//                 alt="Student Profile"
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//               />
//               </Link>
//             </div>
//           </div>
//         </header>

//         <div className="p-4 md:p-6 space-y-6">
//           <section>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold">Featured Events</h2>
//               <Button variant="outline">See all</Button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[1, 2, 3].map((i) => (
//                 <Card key={i}>
//                   <CardContent
//                   onClick={() => router.push('/events/booking')}
//                     className="p-0">
//                     <Image
//                       src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=200&width=400&text=Event+${i}`}
//                       alt={`Featured Event ${i}`}
//                       width={400}
//                       height={200}
//                       className="w-full object-cover rounded-t-lg"
//                     />
//                     <div className="p-4 space-y-2">
//                       <p className="text-sm text-muted-foreground">Student Union</p>
//                       <h3 className="font-semibold">Annual University Fair: Explore Your Future</h3>
//                       <div className="flex justify-between items-center text-sm text-muted-foreground">
//                         <span>Tomorrow, 10 AM - 4 PM</span>
//                         <Button variant="ghost" size="icon">
//                           <MoreHorizontal className="w-5 h-5" />
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </section>

//           <section>
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-bold">Upcoming Events</h2>
//               <Button variant="outline">See all</Button>
//             </div>
//             <Tabs defaultValue="academic" className="w-full">
//               <ScrollArea className="w-full whitespace-nowrap">
//                 <TabsList className="inline-flex w-full sm:w-auto">
//                   <TabsTrigger value="academic" className="flex-1 sm:flex-none">Academic</TabsTrigger>
//                   <TabsTrigger value="sports" className="flex-1 sm:flex-none">Sports</TabsTrigger>
//                   <TabsTrigger value="cultural" className="flex-1 sm:flex-none">Cultural</TabsTrigger>
//                   <TabsTrigger value="career" className="flex-1 sm:flex-none">Career</TabsTrigger>
//                 </TabsList>
//               </ScrollArea>
//               {['academic', 'sports', 'cultural', 'career'].map((category) => (
//                 <TabsContent key={category} value={category}>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {[1, 2].map((i) => (
//                       <Card key={i}>
//                         <CardContent className="p-4 flex items-center space-x-4">
//                           <div className="flex-grow">
//                             <p className="text-sm text-muted-foreground">{getCategoryLocation(category)}</p>
//                             <h3 className="font-semibold">{getCategoryEvent(category)}</h3>
//                             <div className="flex justify-between items-center text-sm text-muted-foreground">
//                               <span>{getCategoryDate(category)}</span>
//                               <Button variant="ghost" size="icon">
//                                 <MoreHorizontal className="w-5 h-5" />
//                               </Button>
//                             </div>
//                           </div>
//                           <Image
//                             src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=80&width=80&text=${category}+${i}`}
//                             alt={`${category} Event ${i}`}
//                             width={80}
//                             height={80}
//                             className="rounded-lg object-cover"
//                           />
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </TabsContent>
//               ))}
//             </Tabs>
//           </section>
//         </div>
//       </main>
//     </div>
//   )
// }

// function Sidebar() {
//   const router = useRouter()
//   return (
//     <>
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-primary">Campus Connect</h1>
//       </div>
//       <nav className="mt-6">
//         <Button
//          onClick={() => router.push('/')}
//          variant="ghost" className="w-full justify-start p-4">
//           <Home className="mr-2 h-4 w-4" />
//           <span>Home</span>
//         </Button>
//         <Button
//         onClick={() => router.push('/store')}
//         variant="ghost" className="w-full justify-start p-4">
//           <Store className="mr-2 h-4 w-4" />
//           <span>Store</span>
//         </Button>
//         <Button
//         onClick={() => router.push('/events')}
//         variant="ghost" className="w-full justify-start p-4 bg-primary/10 text-primary">
//           <Calendar className="mr-2 h-4 w-4" />
//           <span>Events</span>
//         </Button>
//         <Button
//         onClick={() => router.push('/support/dashboard')}
//         variant="ghost" className="w-full justify-start p-4">
//           <HeartHandshake className="mr-2 h-4 w-4" />
//           <span>Student Support</span>
//         </Button>
//         <Button
//         onClick={() => router.push('/startups')}
//         variant="ghost" className="w-full justify-start p-4">
//           <Rocket className="mr-2 h-4 w-4" />
//           <span>Startup Projects</span>
//         </Button>
//       </nav>
//     </>
//   )
// }

// function getCategoryLocation(category: string) {
//   switch (category) {
//     case 'academic':
//       return 'Science Building'
//     case 'sports':
//       return 'Sports Complex'
//     case 'cultural':
//       return 'Auditorium'
//     case 'career':
//       return 'Career Center'
//     default:
//       return 'Campus'
//   }
// }

// function getCategoryEvent(category: string) {
//   switch (category) {
//     case 'academic':
//       return 'Guest Lecture: Advancements in AI'
//     case 'sports':
//       return 'Inter-University Basketball Tournament'
//     case 'cultural':
//       return 'Annual Cultural Festival: Harmony'
//     case 'career':
//       return 'Tech Industry Job Fair'
//     default:
//       return 'Campus Event'
//   }
// }

// function getCategoryDate(category: string) {
//   switch (category) {
//     case 'academic':
//       return 'Sep 15, 2:00 PM'
//     case 'sports':
//       return 'Sep 18-20, All Day'
//     case 'cultural':
//       return 'Sep 25-27, 6:00 PM'
//     case 'career':
//       return 'Sep 30, 10:00 AM - 4:00 PM'
//     default:
//       return 'Upcoming'
//   }
// }

import Image from 'next/image'
import { Menu, MoreHorizontal, Home, Store, Calendar, HeartHandshake, Rocket, CirclePlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
export default function Component() {
  const router = useRouter()
  return (
    <div className="flex h-screen bg-gray-100">
     

      <aside className="hidden lg:block w-64 bg-white shadow-md">
        <Sidebar />
      </aside>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-4">
          <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
           variant="ghost" size="icon" className="absolute top-4 left-4 lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Home 
            onClick={() => router.push('/')}
            className="mr-2 h-4 w-4" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Store
            onClick={() => router.push('/store')}
            className="mr-2 h-4 w-4" />
            <span>Store</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Calendar
            onClick={() => router.push('/events')}
            className="mr-2 h-4 w-4" />
            <span>Events</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HeartHandshake
            onClick={() => router.push('/support/dashboard')}
            className="mr-2 h-4 w-4" />
            <span>Student Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Rocket 
            onClick={() => router.push('/startups')}
            className="mr-2 h-4 w-4" />
            <span>Startup Projects</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
          </DropdownMenu>
            <h2 className="text-2xl font-bold ml-9 sm:ml-0">Featured Events</h2>
            <div className="flex items-center space-x-2">
            <CirclePlus onClick={() => router.push('/events/create')} />
            <Button variant="outline">See all</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent
                onClick={() => router.push('/events/booking')}
                className="p-0">
                  <Image
                    src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=200&width=400&text=Event+${i}`}
                    alt={`Featured Event ${i}`}
                    width={400}
                    height={200}
                    className="w-full object-cover rounded-t-lg"
                  />
                  <div className="p-4 space-y-2">
                    <p className="text-sm text-muted-foreground">Student Union</p>
                    <h3 className="font-semibold">Annual University Fair: Explore Your Future</h3>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Tomorrow, 10 AM - 4 PM</span>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button variant="outline">See all</Button>
          </div>
          <Tabs defaultValue="academic" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex w-full sm:w-auto">
                <TabsTrigger value="academic" className="flex-1 sm:flex-none">Academic</TabsTrigger>
                <TabsTrigger value="sports" className="flex-1 sm:flex-none">Sports</TabsTrigger>
                <TabsTrigger value="cultural" className="flex-1 sm:flex-none">Cultural</TabsTrigger>
                <TabsTrigger value="career" className="flex-1 sm:flex-none">Career</TabsTrigger>
              </TabsList>
            </ScrollArea>
            {['academic', 'sports', 'cultural', 'career'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <Card key={i}>
                      <CardContent
                      onClick={() => router.push('/events/booking')}
                      className="p-4 flex items-center space-x-4">
                        <div className="flex-grow">
                          <p className="text-sm text-muted-foreground">{getCategoryLocation(category)}</p>
                          <h3 className="font-semibold">{getCategoryEvent(category)}</h3>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span>{getCategoryDate(category)}</span>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                        <Image
                          src={`https://thumbs.dreamstime.com/b/group-happy-diverse-college-students-20447068.jpg?height=80&width=80&text=${category}+${i}`}
                          alt={`${category} Event ${i}`}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
    </div>
  )
}

function Sidebar() {
  const router = useRouter();
  return (
    <nav className="mt-6">

      <Button
      onClick={() => router.push('/')}
      variant="ghost" className="w-full justify-start p-4">
        <Home className="mr-2 h-4 w-4" />
        <span>Home</span>
      </Button>
      <Button
      onClick={() => router.push('/store')}
      variant="ghost" className="w-full justify-start p-4">
        <Store className="mr-2 h-4 w-4" />
        <span>Store</span>
      </Button>
      <Button
      onClick={() => router.push('/events')}
      variant="ghost" className="w-full justify-start p-4 bg-primary/10 text-primary">
        <Calendar className="mr-2 h-4 w-4" />
        <span>Events</span>
      </Button>
      <Button
      onClick={() => router.push('/support/dashboard')}
      variant="ghost" className="w-full justify-start p-4">
        <HeartHandshake className="mr-2 h-4 w-4" />
        <span>Student Support</span>
      </Button>
      <Button
      onClick={() => router.push('/startups')}
      variant="ghost" className="w-full justify-start p-4">
        <Rocket className="mr-2 h-4 w-4" />
        <span>Startup Projects</span>
      </Button>
    </nav>
  )
}

function getCategoryLocation(category: string) {
  switch (category) {
    case 'academic':
      return 'Science Building'
    case 'sports':
      return 'Sports Complex'
    case 'cultural':
      return 'Auditorium'
    case 'career':
      return 'Career Center'
    default:
      return 'Campus'
  }
}

function getCategoryEvent(category: string) {
  switch (category) {
    case 'academic':
      return 'Guest Lecture: Advancements in AI'
    case 'sports':
      return 'Inter-University Basketball Tournament'
    case 'cultural':
      return 'Annual Cultural Festival: Harmony'
    case 'career':
      return 'Tech Industry Job Fair'
    default:
      return 'Campus Event'
  }
}

function getCategoryDate(category: string) {
  switch (category) {
    case 'academic':
      return 'Sep 15, 2:00 PM'
    case 'sports':
      return 'Sep 18-20, All Day'
    case 'cultural':
      return 'Sep 25-27, 6:00 PM'
    case 'career':
      return 'Sep 30, 10:00 AM - 4:00 PM'
    default:
      return 'Upcoming'
  }
}