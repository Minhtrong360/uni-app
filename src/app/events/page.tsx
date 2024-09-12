// https://v0.dev/chat/_ilHMZYNF9i
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

async function getEvents() {
  // Fetch events from your API or database
  return [
    { id: 1, title: "Annual Career Fair", date: "2023-09-15" },
    { id: 2, title: "Alumni Networking Night", date: "2023-10-01" },
  ]
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {event.date}</p>
              <Link href={`/events/${event.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}