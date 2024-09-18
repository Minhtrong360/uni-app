// https://v0.dev/chat/b/NQ89JvH
'use client'

import Image from 'next/image'
import { Menu, Search, MoreHorizontal, Home, Store, Calendar, HeartHandshake, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-4 space-y-4">
        <header className="flex justify-between items-center">
        <DropdownMenu>
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
          <CardTitle className="text-lg">Campus Events</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-6 h-6" />
            </Button>
            <Link href="/user/user-setting">
            <Image
              src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=32&width=32"
              alt="Student Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            </Link>
          </div>
        </header>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Monday, September 12</p>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Featured Events</h2>
            <Button variant="link" className="text-sm">See all</Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Image
              src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=200&width=400"
              alt="University Fair"
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

        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
          <div className="w-2 h-2 bg-secondary rounded-full"></div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Upcoming Events</h2>
            <Button variant="link" className="text-sm">See all</Button>
          </div>

          <Card>
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground">Science Building</p>
                <h3 className="font-semibold">Guest Lecture: Advancements in AI</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Sep 15, 2:00 PM</span>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Image
                src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=60&width=60"
                alt="AI Lecture"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground">Sports Complex</p>
                <h3 className="font-semibold">Inter-University Basketball Tournament</h3>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Sep 18-20, All Day</span>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <Image
                src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=60&width=60"
                alt="Basketball Tournament"
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}