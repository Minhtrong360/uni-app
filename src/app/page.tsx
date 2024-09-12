// https://v0.dev/chat/hXFtQhvdTHQ

import Image from "next/image"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { HeartHandshake, CalendarDays, ShoppingBag, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-background p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-semibold">6:59</div>
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-foreground rounded-full"></div>
          <div className="w-4 h-4 bg-foreground rounded-full"></div>
          <div className="w-4 h-4 bg-foreground rounded-full"></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
        <Image
          src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">Your engagement this semester</p>
        <Progress value={65} className="h-2" />
        <p className="text-sm text-muted-foreground mt-1">65% of services utilized</p>
      </div>
      
      <div className="bg-secondary p-4 rounded-lg mb-6 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Upcoming Event</h3>
          <p className="text-sm text-muted-foreground">Career Fair in 3 days</p>
        </div>
        <Image
          src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg"
          alt="Event illustration"
          width={80}
          height={80}
        />
      </div>
      
      <Button className="mb-6 w-full">View all events</Button>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Student Services</h2>
        <Button variant="link">See all</Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Link href="/support/dashboard">
          <div className="bg-secondary p-4 rounded-lg cursor-pointer">
            <HeartHandshake className="w-8 h-8 mb-2" />
            <h3 className="font-semibold">Student Support Center</h3>
            <p className="text-xs text-muted-foreground">Open: 9 AM - 5 PM</p>
          </div>
        </Link>
        <div className="bg-secondary p-4 rounded-lg">
          <CalendarDays className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Student Events</h3>
          <p className="text-xs text-muted-foreground">3 upcoming this week</p>
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <ShoppingBag className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Student Shops</h3>
          <p className="text-xs text-muted-foreground">New merch available</p>
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <Rocket className="w-8 h-8 mb-2" />
          <h3 className="font-semibold">Startups Contest</h3>
          <p className="text-xs text-muted-foreground">Submissions due in 2 weeks</p>
        </div>
      </div>
    </div>
  )
}
