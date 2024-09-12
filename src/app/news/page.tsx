// https://v0.dev/chat/7_2uNDV3eqj
'use client'
import Image from 'next/image'
import { Menu, Search, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="max-w-md mx-auto">
      <CardContent className="p-4 space-y-4">
        <header className="flex justify-between items-center">
          <Button variant="ghost" size="icon">
            <Menu className="w-6 h-6" />
          </Button>
          <CardTitle className="text-lg">Campus Events</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-6 h-6" />
            </Button>
            <Image
              src="https://thumbs.dreamstime.com/b/golden-retriever-puppy-pleading-20447068.jpg?height=32&width=32"
              alt="Student Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
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